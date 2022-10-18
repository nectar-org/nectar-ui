import React from 'react'
import Themes from '../themes'
import { NectarUIThemes } from '../themes/presets'

const defaultTheme = Themes.getPresetStaticTheme()

export const ThemeContext: React.Context<NectarUIThemes> =
  React.createContext<NectarUIThemes>(defaultTheme)
export const useTheme = (): NectarUIThemes => React.useContext<NectarUIThemes>(ThemeContext)
