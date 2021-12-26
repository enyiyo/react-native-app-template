import * as React from 'react'

import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types/navigation'
import { Container, Heading } from '../theme/components'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <Container>
      <Heading mb={60}>Tab One</Heading>
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </Container>
  )
}
