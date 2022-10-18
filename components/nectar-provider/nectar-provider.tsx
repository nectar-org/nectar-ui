import React, { PropsWithChildren, useMemo, useState } from 'react'
import {
  NectarUIContent,
  defaultToastLayout,
  NectarUIContextParams,
  UpdateToastsFunction,
  UpdateToastsIDFunction,
  UpdateToastsLayoutFunction,
} from '../utils/use-nectar-ui-context'
import ThemeProvider from './theme-provider'
import useCurrentState from '../utils/use-current-state'
import ToastContainer from '../use-toasts/toast-container'
import { NectarUIThemes } from '../themes/presets'

export type NectarProviderProps = {
  themes?: Array<NectarUIThemes>
  themeType?: string | 'dark' | 'light'
}

const NectarProvider: React.FC<PropsWithChildren<NectarProviderProps>> = ({
  themes,
  themeType,
  children,
}) => {
  const [lastUpdateToastId, setLastUpdateToastId] =
    useState<NectarUIContextParams['lastUpdateToastId']>(null)
  const [toasts, setToasts, toastsRef] = useCurrentState<NectarUIContextParams['toasts']>(
    [],
  )
  const [toastLayout, setToastLayout, toastLayoutRef] =
    useCurrentState<NectarUIContextParams['toastLayout']>(defaultToastLayout)
  const updateToasts: UpdateToastsFunction = fn => {
    const nextToasts = fn(toastsRef.current)
    setToasts(nextToasts)
  }
  const updateToastLayout: UpdateToastsLayoutFunction = fn => {
    const nextLayout = fn(toastLayoutRef.current)
    setToastLayout(nextLayout)
  }
  const updateLastToastId: UpdateToastsIDFunction = fn => {
    setLastUpdateToastId(fn())
  }

  const initialValue = useMemo<NectarUIContextParams>(
    () => ({
      toasts,
      toastLayout,
      updateToasts,
      lastUpdateToastId,
      updateToastLayout,
      updateLastToastId,
    }),
    [toasts, toastLayout, lastUpdateToastId],
  )

  return (
    <NectarUIContent.Provider value={initialValue}>
      <ThemeProvider themes={themes} themeType={themeType}>
        {children}
        <ToastContainer />
      </ThemeProvider>
    </NectarUIContent.Provider>
  )
}

export default NectarProvider
