import * as React from 'react'

import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types/navigation'
import { Container, Heading } from '../theme/components'

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<'TabTwo'>) {
  return (
    <Container>
      <Heading mb={60}>Tab Two</Heading>
      <EditScreenInfo path='/screens/TabTwoScreen.tsx' />
    </Container>
  )
}
