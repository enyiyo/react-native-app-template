import { StatusBar } from 'expo-status-bar'
import React from 'react'

import AppWrapper from './theme'
import Navigation from './routes'
import useCachedResources from './hooks/useCachedResources'

const App = () => {
  const isLoadingComplete = useCachedResources()

  return !isLoadingComplete ? null : (
    <AppWrapper>
      <Navigation />
      <StatusBar />
    </AppWrapper>
  )
}

export default App
