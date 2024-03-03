import { useState } from 'react';
const useToggle = () => {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue(currentValue => !currentValue);
  };

  return [value, toggle] as const;
};
export default useToggle;