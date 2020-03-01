import React, { useState, useEffect } from "react";
import { TableContainer, Card, CardHeader } from "@material-ui/core";
import MaterialTable from "./MaterialTable";

export default function MaterialEstimation({ materials }) {
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    let state = JSON.parse(localStorage.getItem("ArcarumInventory"));
    if (state !== null) {
      setInventory(state);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ArcarumInventory", JSON.stringify(inventory));
  }, [inventory]);

  const onValueChange = e => {
    if (!isNaN(Number(e.target.value))) {
      let newInventory = { ...inventory };
      newInventory[e.target.name] = Number(e.target.value);
      setInventory(newInventory);
    }
  };
  return (
    <>
      <TableContainer component={Card}>
        <CardHeader title="材料总览" />
        {Object.entries(materials).map(([type, list]) => {
          return (
            <MaterialTable
              key={type}
              type={type}
              materials={list}
              inventory={inventory}
              onValueChange={onValueChange}
            />
          );
        })}
      </TableContainer>
    </>
  );
}
