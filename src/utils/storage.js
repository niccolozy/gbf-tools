import React, { useReducer, createContext } from "react";

export const useLocalStorageState = (key, reducer, initialValue) => {
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

export const LocalInventoryContext = createContext();

export const inventoryActions = {
  CHANGEAMOUNT: "CHANGEAMOUNT"
};

const inventoryReducer = (state, action) => {
  switch (action.type) {
    case inventoryActions.CHANGEAMOUNT:
      return { ...state, [action.item]: action.quantity };
    default:
      return state;
  }
};

export const LocalInventoryContextProvider = (props) => {
  let [inventory, dispatchInventory] = useLocalStorageState("Inventory", inventoryReducer, {});

  return (
    <LocalInventoryContext.Provider value={{inventory, dispatchInventory}}>
      {props.children}
    </LocalInventoryContext.Provider>
  );
};
