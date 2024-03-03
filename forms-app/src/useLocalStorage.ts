import { useState } from 'react';
const useLocalStorage = (key: string, initialValue: Record<string, string>) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch(err) {
      return initialValue;
    }
  });
  const setValue = (value: Record<string, string>) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }
  return [storedValue, setValue];
}
export default useLocalStorage;