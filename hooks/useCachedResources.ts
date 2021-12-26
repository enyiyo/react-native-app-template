import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...MaterialCommunityIcons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'primary-regular': require('../assets/fonts/Ubuntu-Medium.ttf'),
          'primary-bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
          'secondary-regular': require('../assets/fonts/Poppins-ExtraLight.ttf'),
          'secondary-bold': require('../assets/fonts/Poppins-Regular.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
