import { useReducer } from "react";

const useLocalStorageState = (key, reducer, initialValue) => {
  let [state, dispatch] = useReducer(reducer, initialValue, initialValue => {
    try {
      let item = JSON.parse(localStorage.getItem(key));
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const dispatchStorage = action => {
    try {
      const newState = reducer(state, action);

      localStorage.setItem(key, JSON.stringify(newState));
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, dispatchStorage];
};

export default useLocalStorageState;
