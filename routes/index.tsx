/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Link } from '../theme/components'

import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import NativeBaseDemoScreen from '../screens/NativeBaseDemoScreen'

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types/navigation'
import LinkingConfiguration from './LinkingConfiguration'

import { useTheme } from '../theme'

export default function Navigation() {
  const { navTheme } = useTheme()
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal', animation: 'fade' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const { colors } = useTheme().navTheme

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'primary-regular',
        },
      }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Link onPress={() => navigation.navigate('Modal')}>
              <Icons
                name='information'
                size={25}
                color={colors.primary}
                style={{ marginRight: 15 }}
              />
            </Link>
          ),
        })}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name='xml' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='NativeBaseDemo'
        component={NativeBaseDemoScreen}
        options={{
          title: 'Native Base',
          tabBarIcon: ({ color }) => <TabBarIcon name='cog' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icons>['name']
  color: string
}) {
  return <Icons size={30} style={{ marginBottom: -3 }} {...props} />
}
