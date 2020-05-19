import { useState, useCallback } from "react";

const useLocalStorageState = (key, initialValue) => {
  let [state, setState] = useState(() => {
    try {
      let item = JSON.parse(localStorage.getItem(key));
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const updateState = useCallback( valueOrFunc => {
    try {
      const newState = typeof valueOrFunc === "function" ? valueOrFunc(state) : valueOrFunc;

      localStorage.setItem(key, JSON.stringify(newState));
      setState(newState);
    } catch (error) {
      console.log(error);
    }
  }, [key, state]);

  return [state, updateState];
};

export default useLocalStorageState;
