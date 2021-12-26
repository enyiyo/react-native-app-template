import * as WebBrowser from 'expo-web-browser'
import React from 'react'

import { Center, TextCenter, Box, Link, Code } from '../theme/components'

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <Box>
      <Center mx={50}>
        <TextCenter>Open up the code for this screen:</TextCenter>

        <Box my={4}>
          <Code>{path}</Code>
        </Box>

        <TextCenter>
          Change any of the text, save the file, and your app will automatically
          update.
        </TextCenter>
      </Center>

      <Center mt={15} mx={22}>
        <Link py={15} onPress={handleHelpPress}>
          <TextCenter>
            Tap here if your app doesn't automatically update after making
            changes
          </TextCenter>
        </Link>
      </Center>
    </Box>
  )
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  )
}
