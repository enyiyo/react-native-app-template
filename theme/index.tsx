import React from 'react'
import {
  ColorMode,
  extendTheme,
  NativeBaseProvider,
  useColorMode,
} from 'native-base'
import type { StorageManager } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../constants/colors'

const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      console.log(e)
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value as string)
    } catch (e) {
      console.log(e)
    }
  },
}

export const useTheme = function () {
  const { colorMode } = useColorMode()

  const lightNavTheme = {
    dark: false,
    colors: {
      primary: colors.secondary[800],
      background: colors.coolGray[100],
      card: colors.secondary[200],
      text: colors.secondary[800],
      border: colors.secondary[400],
      notification: colors.primary[700],
    },
  }
  const darkNavTheme = {
    dark: true,
    colors: {
      primary: colors.secondary[100],
      background: colors.coolGray[800],
      card: colors.secondary[900],
      text: colors.secondary[100],
      border: colors.secondary[800],
      notification: colors.primary[900],
    },
  }

  const theme = extendTheme({
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
    },
    fonts: {
      heading: 'Primary',
      body: 'Secondary',
      mono: 'Mono',
    },
    fontConfig: {
      Primary: { 700: { normal: 'primary-regular' } },
      Secondary: { 400: { normal: 'secondary-regular' } },
      Mono: { 400: { normal: 'space-mono' } },
    },
    navTheme: colorMode === 'light' ? lightNavTheme : darkNavTheme,
  })

  return theme
}

export default function ({ children }: any) {
  const theme = useTheme()
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </NativeBaseProvider>
  )
}
