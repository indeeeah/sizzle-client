import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { error: printError } = console;

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T | undefined, (value: T) => void] {
  const [storage, setStorage] = useState(initialValue);

  useEffect(() => {
    const fetchStorage = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        setStorage(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        printError('useAsyncStorage', error);
      }
    };

    fetchStorage();
  }, [key]);

  const setValue = (value: T) => {
    try {
      setStorage(value);
      AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      printError('useLocalStorage:', error);
    }
  };

  return [storage, setValue];
}
