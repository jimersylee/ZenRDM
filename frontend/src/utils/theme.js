import lodash from 'lodash'

const { merge } = lodash

export const THEME_OPTIONS = [
    { value: 'light', label: 'Light', mode: 'light' },
    { value: 'dark', label: 'Dark', mode: 'dark' },
    { value: 'auto', label: 'Auto', mode: 'auto' },
    { value: 'catppuccin-latte', label: 'Catppuccin Latte', mode: 'light' },
    { value: 'catppuccin-frappe', label: 'Catppuccin Frappé', mode: 'dark' },
    { value: 'catppuccin-macchiato', label: 'Catppuccin Macchiato', mode: 'dark' },
    { value: 'catppuccin-mocha', label: 'Catppuccin Mocha', mode: 'dark' },
]

const palettes = {
    light: {
        mode: 'light',
        base: '#ffffff',
        mantle: '#f2f2f2',
        crust: '#e6e6e6',
        text: '#303030',
        subtext1: '#606060',
        surface0: '#e6e6e6',
        surface1: '#d6d6d6',
        surface2: '#c6c6c6',
        overlay0: '#8a8a8a',
        blue: '#3478db',
        mauve: '#d33a31',
        red: '#d5271c',
    },
    dark: {
        mode: 'dark',
        base: '#1e1e1e',
        mantle: '#181818',
        crust: '#111111',
        text: '#e5e5e5',
        subtext1: '#b8b8b8',
        surface0: '#2c2c2c',
        surface1: '#3a3a3a',
        surface2: '#4a4a4a',
        overlay0: '#858585',
        blue: '#7aa2f7',
        mauve: '#ff6b6b',
        red: '#d5271c',
    },
    'catppuccin-latte': {
        mode: 'light',
        base: '#eff1f5',
        mantle: '#e6e9ef',
        crust: '#dce0e8',
        text: '#4c4f69',
        subtext1: '#5c5f77',
        surface0: '#ccd0da',
        surface1: '#bcc0cc',
        surface2: '#acb0be',
        overlay0: '#9ca0b0',
        blue: '#1e66f5',
        mauve: '#8839ef',
        red: '#d20f39',
    },
    'catppuccin-frappe': {
        mode: 'dark',
        base: '#303446',
        mantle: '#292c3c',
        crust: '#232634',
        text: '#c6d0f5',
        subtext1: '#b5bfe2',
        surface0: '#414559',
        surface1: '#51576d',
        surface2: '#626880',
        overlay0: '#737994',
        blue: '#8caaee',
        mauve: '#ca9ee6',
        red: '#e78284',
    },
    'catppuccin-macchiato': {
        mode: 'dark',
        base: '#24273a',
        mantle: '#1e2030',
        crust: '#181926',
        text: '#cad3f5',
        subtext1: '#b8c0e0',
        surface0: '#363a4f',
        surface1: '#494d64',
        surface2: '#5b6078',
        overlay0: '#6e738d',
        blue: '#8aadf4',
        mauve: '#c6a0f6',
        red: '#ed8796',
    },
    'catppuccin-mocha': {
        mode: 'dark',
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
        text: '#cdd6f4',
        subtext1: '#bac2de',
        surface0: '#313244',
        surface1: '#45475a',
        surface2: '#585b70',
        overlay0: '#6c7086',
        blue: '#89b4fa',
        mauve: '#cba6f7',
        red: '#f38ba8',
    },
}

export const getThemePalette = (theme, isDark = false) => {
    if (theme === 'auto') {
        return palettes[isDark ? 'dark' : 'light']
    }
    return palettes[theme] || palettes.light
}

export const isDarkTheme = (theme, systemDark = false) => getThemePalette(theme, systemDark).mode === 'dark'

export const getMonacoThemeName = (theme, isDark = false) => {
    const palette = getThemePalette(theme, isDark)
    if (theme === 'auto') {
        return isDark ? 'rdm-dark' : 'rdm-light'
    }
    if (typeof theme === 'string' && theme.startsWith('catppuccin-')) {
        return `rdm-${theme}`
    }
    return palette.mode === 'dark' ? 'rdm-dark' : 'rdm-light'
}

/**
 *
 * @type import('naive-ui').GlobalThemeOverrides
 */
const baseThemeOverrides = {
    common: {
        primaryColor: '#D33A31',
        primaryColorHover: '#FF6B6B',
        primaryColorPressed: '#D5271C',
        primaryColorSuppl: '#FF6B6B',
        borderRadius: '4px',
        borderRadiusSmall: '3px',
        heightMedium: '32px',
        lineHeight: 1.5,
        scrollbarWidth: '8px',
        tabColor: '#FFFFFF',
    },
    Button: {
        heightMedium: '32px',
        paddingSmall: '0 8px',
        paddingMedium: '0 12px',
    },
    Tag: {
        borderRadius: '4px',
        heightLarge: '32px',
    },
    Input: {
        heightMedium: '32px',
    },
    Tabs: {
        tabGapSmallCard: '2px',
        tabGapMediumCard: '2px',
        tabGapLargeCard: '2px',
        tabFontWeightActive: 450,
    },
    Tree: {
        nodeWrapperPadding: '0 3px',
    },
    Card: {
        colorEmbedded: '#FAFAFA',
    },
    Form: {
        labelFontSizeTopSmall: '12px',
        labelFontSizeTopMedium: '13px',
        labelFontSizeTopLarge: '13px',
        labelHeightSmall: '18px',
        labelHeightMedium: '18px',
        labelHeightLarge: '18px',
        labelPaddingVertical: '0 0 5px 2px',
        feedbackHeightSmall: '18px',
        feedbackHeightMedium: '18px',
        feedbackHeightLarge: '20px',
        feedbackFontSizeSmall: '11px',
        feedbackFontSizeMedium: '12px',
        feedbackFontSizeLarge: '12px',
        labelTextColor: 'rgb(113,120,128)',
        labelFontWeight: '450',
    },
    Radio: {
        buttonColorActive: '#D13B37',
        buttonTextColorActive: '#FFF',
    },
    DataTable: {
        thPaddingSmall: '6px 8px',
        tdPaddingSmall: '6px 8px',
    },
    Dropdown: {
        borderRadius: '5px',
        optionIconSizeMedium: '18px',
        padding: '6px 2px',
        optionColorHover: '#D33A31',
        optionTextColorHover: '#FFF',
        optionHeightMedium: '28px',
    },
    Divider: {
        color: '#AAAAAB',
    },
}

const defaultDarkThemeOverrides = merge({}, baseThemeOverrides, {
    common: {
        bodyColor: '#1E1E1E',
        tabColor: '#1E1E1E',
        borderColor: '#515151',
    },
    Tree: {
        nodeTextColor: '#CECED0',
    },
    Card: {
        colorEmbedded: '#212121',
    },
    Dropdown: {
        color: '#272727',
    },
    Popover: {
        color: '#2C2C32',
    },
})

export const getThemeOverrides = (theme, isDark = false) => {
    if (typeof theme !== 'string' || !theme.startsWith('catppuccin-')) {
        return isDarkTheme(theme, isDark) ? defaultDarkThemeOverrides : baseThemeOverrides
    }
    const palette = getThemePalette(theme, isDark)
    const dark = palette.mode === 'dark'
    return merge({}, baseThemeOverrides, {
        common: {
            primaryColor: palette.mauve,
            primaryColorHover: palette.blue,
            primaryColorPressed: palette.red,
            primaryColorSuppl: palette.blue,
            bodyColor: palette.base,
            cardColor: palette.mantle,
            modalColor: palette.mantle,
            popoverColor: palette.mantle,
            inputColor: palette.surface0,
            baseColor: palette.base,
            textColorBase: palette.text,
            textColor1: palette.text,
            textColor2: palette.subtext1,
            textColor3: palette.overlay0,
            borderColor: palette.surface0,
            dividerColor: palette.surface1,
            hoverColor: palette.surface0,
            tableHeaderColor: palette.mantle,
            tableColor: palette.base,
            tabColor: palette.base,
        },
        Form: {
            labelTextColor: palette.subtext1,
        },
        Radio: {
            buttonColorActive: palette.mauve,
        },
        Dropdown: {
            color: palette.mantle,
            optionColorHover: palette.mauve,
        },
        Popover: {
            color: palette.mantle,
        },
        Card: {
            colorEmbedded: palette.mantle,
        },
        Tree: dark ? { nodeTextColor: palette.text } : {},
    })
}

export const themeOverrides = getThemeOverrides('light')
export const darkThemeOverrides = getThemeOverrides('dark', true)
