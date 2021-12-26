import * as React from 'react'

import { RootStackScreenProps } from '../types/navigation'
import { Container, Heading, Link } from '../theme/components'

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <Container>
      <Heading mb={25}>This screen doesn't exist.</Heading>
      <Link onPress={() => navigation.replace('Root')}>Go to home screen!</Link>
    </Container>
  )
}
