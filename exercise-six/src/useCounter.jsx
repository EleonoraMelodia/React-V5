import React, { useCallback, useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);
  const decrement = useCallback(() => {
   
    setCounter(counter - 1);
  }, [counter]);
  const reset = useCallback(() => {
   
    setCounter(initialValue);
  }, [initialValue]);

  return {
    counter: counter,
    onIncrement: increment,
    onDecrement: decrement,
    onReset: reset,
  };
};

export default useCounter;
