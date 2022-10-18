import React from 'react'
import Themes from '../themes/themes'
import { NectarUIThemes } from '../themes/presets'

export type AllThemesConfig = {
  themes: Array<NectarUIThemes>
}

const defaultAllThemesConfig = {
  themes: Themes.getPresets(),
}

export const AllThemesContext: React.Context<AllThemesConfig> = React.createContext<AllThemesConfig>(
  defaultAllThemesConfig,
)

export const useAllThemes = (): AllThemesConfig =>
  React.useContext<AllThemesConfig>(AllThemesContext)
