export interface NectarUIThemesPalette {
  accents_1: string
  accents_2: string
  accents_3: string
  accents_4: string
  accents_5: string
  accents_6: string
  accents_7: string
  accents_8: string
  background: string
  foreground: string
  selection: string
  secondary: string
  code: string
  border: string
  success: string
  successLighter: string
  successLight: string
  successDark: string
  error: string
  errorLighter: string
  errorLight: string
  errorDark: string
  warning: string
  warningLighter: string
  warningLight: string
  warningDark: string
  cyan: string
  cyanLighter: string
  cyanLight: string
  cyanDark: string
  violet: string
  violetLighter: string
  violetLight: string
  violetDark: string
  link: string
  purple: string
  magenta: string
  alert: string
}

export interface NectarUIThemesExpressiveness {
  linkStyle: string
  linkHoverStyle: string
  dropdownBoxShadow: string
  scrollerStart: string
  scrollerEnd: string
  shadowSmall: string
  shadowMedium: string
  shadowLarge: string
  portalOpacity: number
}

export interface NectarUIThemesLayout {
  gap: string
  gapNegative: string
  gapHalf: string
  gapHalfNegative: string
  gapQuarter: string
  gapQuarterNegative: string
  pageMargin: string
  pageWidth: string
  pageWidthWithMargin: string
  breakpointMobile: string
  breakpointTablet: string
  radius: string
  unit: string
}

export interface NectarUIThemesFont {
  sans: string
  mono: string
  prism: string
}

export interface BreakpointsItem {
  min: string
  max: string
}

export interface NectarUIThemesBreakpoints {
  xs: BreakpointsItem
  sm: BreakpointsItem
  md: BreakpointsItem
  lg: BreakpointsItem
  xl: BreakpointsItem
}

export interface NectarUIThemes {
  type: string
  font: NectarUIThemesFont
  layout: NectarUIThemesLayout
  palette: NectarUIThemesPalette
  breakpoints: NectarUIThemesBreakpoints
  expressiveness: NectarUIThemesExpressiveness
}
