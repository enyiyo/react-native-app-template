import React from 'react'

import {
  Text,
  Link,
  Heading,
  Code,
  Container,
  VStack,
  HStack,
} from '../theme/components'
import NativeBaseIcon from '../components/NativeBaseIcon'
import { DarkModeToggler } from '../theme/components'

export default function NativeBaseDemoScreen() {
  return (
    <Container>
      <VStack space={5}>
        <NativeBaseIcon />
        <Heading>Welcome to NativeBase</Heading>
        <HStack>
          <Text>Edit</Text>
          <Code>App.tsx</Code>
          <Text>and save to reload.</Text>
        </HStack>
        <Link href='https://docs.nativebase.io' isExternal>
          Learn NativeBase
        </Link>
        <DarkModeToggler />
      </VStack>
    </Container>
  )
}
