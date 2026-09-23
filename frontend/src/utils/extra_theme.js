/**
 * @typedef ExtraTheme
 * @property {string} titleColor
 * @property {string} sidebarColor
 * @property {string} splitColor
 */

import { getThemePalette } from './theme.js'

export const extraLightTheme = {
    titleColor: '#F2F2F2',
    ribbonColor: '#F9F9F9',
    ribbonActiveColor: '#E3E3E3',
    sidebarColor: '#F2F2F2',
    splitColor: '#DADADA',
}

export const extraDarkTheme = {
    titleColor: '#262626',
    ribbonColor: '#2C2C2C',
    ribbonActiveColor: '#363636',
    sidebarColor: '#262626',
    splitColor: '#474747',
}

/**
 *
 * @param {string|boolean} theme
 * @param {boolean} isDark
 * @return ExtraTheme
 */
export const extraTheme = (theme, isDark = false) => {
    if (typeof theme === 'boolean') {
        return theme ? extraDarkTheme : extraLightTheme
    }
    if (typeof theme !== 'string' || !theme.startsWith('catppuccin-')) {
        return theme === 'dark' || (theme === 'auto' && isDark) ? extraDarkTheme : extraLightTheme
    }
    const palette = getThemePalette(theme, isDark)
    return {
        titleColor: palette.mantle,
        ribbonColor: palette.crust,
        ribbonActiveColor: palette.surface1,
        sidebarColor: palette.mantle,
        splitColor: palette.surface1,
    }
}
