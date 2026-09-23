import assert from 'node:assert/strict'
import test from 'node:test'
import { getMonacoThemeName, getThemeOverrides, isDarkTheme, THEME_OPTIONS } from './theme.js'

test('Catppuccin themes expose the expected mode and colors', () => {
    const values = THEME_OPTIONS.map(({ value }) => value)

    assert.equal(values.includes('catppuccin-latte'), true)
    assert.equal(values.includes('catppuccin-mocha'), true)
    assert.equal(isDarkTheme('catppuccin-latte'), false)
    assert.equal(isDarkTheme('catppuccin-mocha'), true)
    assert.equal(getMonacoThemeName('catppuccin-macchiato'), 'rdm-catppuccin-macchiato')
    assert.equal(getThemeOverrides('catppuccin-frappe').common.bodyColor, '#303446')
})
