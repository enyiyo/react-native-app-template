import React from 'react'
import {
  Box as NBBox,
  Center as NBCenter,
  Code as NBCode,
  Text as NBText,
  Switch,
  useColorMode,
  Heading as NBHeading,
  HStack as NBHStack,
  IBoxProps,
  ICenterProps,
  IHeadingProps,
  ILinkProps,
  ITextProps,
  Link as NBLink,
  VStack as NBVStack,
} from 'native-base'

// Typography components
export const Text = function (props: ITextProps) {
  return (
    <NBText
      _light={{ color: 'muted.800' }}
      _dark={{ color: 'muted.50' }}
      fontSize={17}
      lineHeight={24}
      {...props}
    />
  )
}

export const TextCenter = function (props: ITextProps) {
  return <Text textAlign='center' {...props} />
}

export const Heading = function (props: IHeadingProps) {
  return (
    <NBHeading
      _light={{ color: 'secondary.900' }}
      _dark={{ color: 'secondary.100' }}
      {...props}
    />
  )
}

export const Code = function (props: ITextProps) {
  return (
    <NBCode
      mx={1}
      rounded={5}
      _light={{ bg: 'secondary.300' }}
      _dark={{ bg: 'secondary.900' }}
      {...props}
    />
  )
}

// Layout components
export const Box = function (props: IBoxProps) {
  return (
    <NBBox
      _light={{ bg: 'coolGray.100' }}
      _dark={{ bg: 'coolGray.800' }}
      {...props}
    />
  )
}

export const Container = function (props: IBoxProps) {
  return (
    <NBBox flex={1} justifyContent='center' alignItems='center' {...props} />
  )
}

export const Center = function (props: ICenterProps) {
  return (
    <NBCenter
      _light={{ bg: 'coolGray.100' }}
      _dark={{ bg: 'coolGray.800' }}
      {...props}
    />
  )
}

interface IStackProps extends IBoxProps {
  space?: number
}

export const HStack = function (props: IStackProps) {
  return <NBHStack alignItems='center' {...props} />
}

export const VStack = function (props: IStackProps) {
  return <NBVStack alignItems='center' {...props} />
}

// Touchable components
export const Link = function (props: ILinkProps) {
  return (
    <NBLink
      _text={{
        fontSize: 17,
        _light: { color: 'blue.600' },
        _dark: { color: 'blue.300' },
      }}
      {...props}
    />
  )
}

export const DarkModeToggler = function () {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}
