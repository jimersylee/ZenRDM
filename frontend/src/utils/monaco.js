import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import { BrowserOpenURL } from 'wailsjs/runtime/runtime.js'
import { getThemePalette } from '@/utils/theme.js'

const catppuccinThemes = ['catppuccin-latte', 'catppuccin-frappe', 'catppuccin-macchiato', 'catppuccin-mocha']

export const setupMonaco = () => {
    window.MonacoEnvironment = {
        getWorker: (_, label) => {
            switch (label) {
                case 'json':
                    return new jsonWorker()
                case 'css':
                case 'scss':
                case 'less':
                    return new cssWorker()
                case 'html':
                    return new htmlWorker()
                default:
                    return new editorWorker()
            }
        },
    }

    // setup light theme
    monaco.editor.defineTheme('rdm-light', {
        base: 'vs',
        inherit: true,
        rules: [],
        colors: {
            'editorLineNumber.foreground': '#BABBBD',
            'editorLineNumber.activeForeground': '#777D83',
        },
    })

    // setup dark theme
    monaco.editor.defineTheme('rdm-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {},
    })

    for (const theme of catppuccinThemes) {
        const palette = getThemePalette(theme)
        monaco.editor.defineTheme(`rdm-${theme}`, {
            base: palette.mode === 'dark' ? 'vs-dark' : 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': palette.base,
                'editor.foreground': palette.text,
                'editorCursor.foreground': palette.mauve,
                'editorLineNumber.foreground': palette.overlay0,
                'editorLineNumber.activeForeground': palette.text,
                'editor.lineHighlightBackground': palette.mantle,
                'editor.selectionBackground': palette.surface2,
                'editor.inactiveSelectionBackground': palette.surface1,
                'editorGutter.background': palette.base,
                'editorWidget.background': palette.mantle,
                'editorWidget.border': palette.surface1,
            },
        })
    }

    // register default link opening behavior
    monaco.editor.registerLinkOpener({
        open(resource) {
            BrowserOpenURL(resource.toString())
            return true
        },
    })
}
