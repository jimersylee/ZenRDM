<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { compact, trim } from 'lodash'
import { useThemeVars } from 'naive-ui'
import * as monaco from 'monaco-editor'
import useConnectionStore from 'stores/connections.js'
import usePreferencesStore from 'stores/preferences.js'
import Delete from '@/components/icons/Delete.vue'
import Save from '@/components/icons/Save.vue'
import IconButton from '@/components/common/IconButton.vue'
import { ExecCommand } from 'wailsjs/go/services/cliService.js'
import { i18nGlobal } from '@/utils/i18n.js'

const props = defineProps({
    server: String,
})

const themeVars = useThemeVars()
const connectionStore = useConnectionStore()
const prefStore = usePreferencesStore()

const editorRef = ref(null)
const saving = ref(false)
const running = ref(false)
const output = ref([])
const selectedLineCount = ref(0)
const selectedCommandCount = ref(0)
const commandText = ref('')

/** @type {monaco.editor.IStandaloneCodeEditor|null} */
let editorNode = null

const storedCommands = computed(() => connectionStore.serverProfile[props.server]?.savedCommands || [])

const commandsToText = (commands) => (commands || []).join('\n')

const textToSavedLines = (text) => {
    if (!text) {
        return []
    }
    const lines = (text || '').replace(/\r\n/g, '\n').split('\n')
    if (lines.length > 1 && lines[lines.length - 1] === '') {
        lines.pop()
    }
    return lines
}

const isRunnableCommand = (line) => {
    const command = trim(line)
    return command.length > 0 && !command.startsWith('#')
}

const getModel = () => editorNode?.getModel()

const getSelectedLineRange = () => {
    const model = getModel()
    const selection = editorNode?.getSelection()
    if (model == null || selection == null) {
        return { start: 1, end: 1 }
    }

    if (selection.isEmpty()) {
        const line = selection.positionLineNumber || 1
        return { start: line, end: line }
    }

    let start = selection.startLineNumber
    let end = selection.endLineNumber
    if (selection.endColumn === 1 && end > start) {
        end -= 1
    }
    return {
        start: Math.max(1, start),
        end: Math.min(model.getLineCount(), end),
    }
}

const getSelectedCommands = () => {
    const model = getModel()
    if (model == null) {
        return []
    }

    const { start, end } = getSelectedLineRange()
    const commands = []
    for (let line = start; line <= end; line++) {
        const command = trim(model.getLineContent(line))
        if (isRunnableCommand(command)) {
            commands.push(command)
        }
    }
    return commands
}

const refreshSelectedCount = () => {
    const model = getModel()
    if (model == null) {
        selectedLineCount.value = 0
        selectedCommandCount.value = 0
        return
    }
    const { start, end } = getSelectedLineRange()
    selectedLineCount.value = Math.max(0, end - start + 1)
    selectedCommandCount.value = getSelectedCommands().length
}

const saveCommands = async (showMessage = true) => {
    saving.value = true
    try {
        const { success, msg } = await connectionStore.saveCommands(props.server, textToSavedLines(commandText.value))
        if (!success) {
            $message.error(msg)
            return false
        }
        if (showMessage) {
            $message.success(i18nGlobal.t('common.success'))
        }
        return true
    } finally {
        saving.value = false
    }
}

const deleteSelectedLines = async () => {
    const model = getModel()
    if (model == null) {
        return
    }

    const { start, end } = getSelectedLineRange()
    const lastLine = model.getLineCount()
    const range =
        end >= lastLine
            ? new monaco.Range(start, 1, lastLine, model.getLineMaxColumn(lastLine))
            : new monaco.Range(start, 1, end + 1, 1)
    editorNode.executeEdits('delete-saved-commands', [{ range, text: '' }])
    await nextTick()
    await saveCommands(false)
    refreshSelectedCount()
}

const runSelectedCommands = async () => {
    const commands = getSelectedCommands()
    if (commands.length <= 0) {
        return
    }

    running.value = true
    output.value = []
    try {
        await saveCommands(false)
        for (const command of commands) {
            output.value.push(`> ${command}`)
            const { success, data, msg } = await ExecCommand(props.server, command)
            if (!success) {
                output.value.push(msg)
                $message.error(msg)
                continue
            }
            output.value.push(...compact(data?.content || ['(nil)']))
        }
    } finally {
        running.value = false
    }
}

const destroyEditor = () => {
    if (editorNode != null) {
        const model = editorNode.getModel()
        model?.dispose()
        editorNode.dispose()
        editorNode = null
    }
}

onMounted(() => {
    if (editorRef.value == null) {
        return
    }

    const { fontSize, fontFamily = ['monaco'] } = prefStore.editorFont
    commandText.value = commandsToText(storedCommands.value)
    editorNode = monaco.editor.create(editorRef.value, {
        value: commandText.value,
        theme: prefStore.isDark ? 'rdm-dark' : 'rdm-light',
        language: 'redis',
        lineNumbers: 'on',
        readOnly: false,
        accessibilitySupport: 'off',
        wordWrap: 'off',
        tabSize: 2,
        folding: false,
        dragAndDrop: prefStore.dropText,
        fontFamily,
        fontSize,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        contextmenu: false,
        lineNumbersMinChars: 2,
        lineDecorationsWidth: 0,
        minimap: {
            enabled: false,
        },
        renderLineHighlight: 'line',
        scrollbar: {
            useShadows: false,
            verticalScrollbarSize: '10px',
        },
    })

    editorNode.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, runSelectedCommands)
    editorNode.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => saveCommands())
    editorNode.onDidChangeModelContent(() => {
        commandText.value = editorNode.getValue()
        refreshSelectedCount()
    })
    editorNode.onDidChangeCursorSelection(refreshSelectedCount)
    refreshSelectedCount()
})

watch(
    storedCommands,
    (commands) => {
        const text = commandsToText(commands)
        commandText.value = text
        if (editorNode != null && editorNode.getValue() !== text) {
            editorNode.setValue(text)
            refreshSelectedCount()
        }
    },
    { immediate: true },
)

watch(
    () => prefStore.isDark,
    (dark) => {
        editorNode?.updateOptions({
            theme: dark ? 'rdm-dark' : 'rdm-light',
        })
    },
)

watch(
    () => prefStore.editor,
    ({ dropText = true }) => {
        const { fontSize, fontFamily } = prefStore.editorFont
        editorNode?.updateOptions({
            fontSize,
            fontFamily,
            dragAndDrop: dropText,
        })
    },
    { deep: true },
)

onUnmounted(destroyEditor)
</script>

<template>
    <div class="saved-command-pane flex-box-v">
        <div class="saved-command-editor">
            <div ref="editorRef" class="saved-command-editor-inst" />
        </div>
        <div class="saved-command-status flex-box-h">
            <span>{{ $t('interface.selected_command_count', { count: selectedCommandCount }) }}</span>
            <n-space :size="8">
                <icon-button
                    :icon="Delete"
                    :disabled="selectedLineCount <= 0"
                    :loading="saving"
                    :tooltip="$t('interface.delete_row')"
                    @click="deleteSelectedLines" />
                <icon-button :icon="Save" :loading="saving" :tooltip="$t('common.save')" @click="saveCommands" />
                <n-button
                    :disabled="selectedCommandCount <= 0"
                    :loading="running"
                    secondary
                    size="small"
                    type="primary"
                    @click="runSelectedCommands">
                    {{ $t('interface.execute_selected') }} ⌘↵
                </n-button>
            </n-space>
        </div>
        <pre v-if="output.length > 0" class="saved-command-output">{{ output.join('\n') }}</pre>
    </div>
</template>

<style lang="scss" scoped>
.saved-command-pane {
    height: 100%;
    overflow: hidden;
    background-color: v-bind('themeVars.bodyColor');
}

.saved-command-editor {
    position: relative;
    flex: 1;
    min-height: 0;
}

.saved-command-editor-inst {
    position: absolute;
    inset: 0;
}

.saved-command-status {
    flex: none;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding: 0 10px 0 12px;
    color: v-bind('themeVars.textColor3');
    background-color: v-bind('themeVars.tableHeaderColor');
    border-top: 1px solid v-bind('themeVars.dividerColor');
    border-bottom: 1px solid v-bind('themeVars.dividerColor');
}

.saved-command-output {
    flex: none;
    box-sizing: border-box;
    height: 34%;
    margin: 0;
    padding: 10px 12px;
    overflow: auto;
    color: v-bind('themeVars.textColorBase');
    background: v-bind('themeVars.bodyColor');
    border-top: 1px solid v-bind('themeVars.dividerColor');
    font-family: 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.5;
    white-space: pre-wrap;
}
</style>
