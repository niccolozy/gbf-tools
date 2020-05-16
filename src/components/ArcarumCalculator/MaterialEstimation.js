import React, { useState, useEffect } from "react";
import { TableContainer, Card, CardHeader } from "@material-ui/core";
import MaterialTable from "./MaterialTable";
import { localeStrings } from "./locale";
import propTypes from "prop-types";

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
    let newInventory = { ...inventory };
    newInventory[e.target.name] = e.target.value;
    setInventory(newInventory);
  };
  let types = [...new Set(materials.map(material => material.priority))];
  
  return (
    <>
      <TableContainer component={Card}>
        <CardHeader title="材料总览" />
        {types.map(type => (
          <MaterialTable
            key={type}
            type={localeStrings.materialType[type].zh}
            materials={materials.filter(material => (material.priority === type))}
            inventory={inventory}
            onValueChange={onValueChange}
          />
        ))}
        
      </TableContainer>
    </>
  );
}

MaterialEstimation.propTypes ={
  materials: propTypes.arrayOf(
    propTypes.shape({
      item: propTypes.object,
      quantity: propTypes.number,
      priority: propTypes.number
    })
  )
};