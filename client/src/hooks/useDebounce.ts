import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number) => {
  // state to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  // useEffect hook to set the debounced value after the delay
  useEffect(() => {
    // create a timeout function that updates the debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup function to clear the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // dependency array with value and delay

  // return the debounced value
  return debouncedValue;
};

export default useDebounce;
