
import { useState} from  'react';

export function useToggle (initialState = false) {
    const [value, setValue] = useState(initialState);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
}
