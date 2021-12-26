import { useState, useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useAsyncStorage<T>(
  key: string,
  initialValue: T
): [T | undefined, (value: T) => Promise<void>] {
  const [value, setValue] = useState<T>()

  const updateValue = useCallback(
    async (newValue: T) => {
      try {
        setValue(newValue)
        await AsyncStorage.setItem(key, JSON.stringify(newValue))
      } catch (e) {
        console.warn(e)
      }
    },
    [key]
  )

  useEffect(() => {
    const update = async () => {
      try {
        const jsonResult = await AsyncStorage.getItem(key)
        const result = jsonResult ? JSON.parse(jsonResult) : initialValue
        setValue(result)
      } catch (e: any) {
        console.warn(e)
      }
    }

    update()
  }, [])

  return [value, updateValue]
}
