import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Platform } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Container, Heading } from '../theme/components'

export default function ModalScreen() {
  return (
    <Container>
      <Heading mb={60}>Modal</Heading>
      <EditScreenInfo path='/screens/ModalScreen.tsx' />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Container>
  )
}
