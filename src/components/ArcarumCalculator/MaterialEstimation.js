import React from "react";
import { TableContainer, Card, CardHeader } from "@material-ui/core";
import MaterialTable from "./MaterialTable";
import { localeStrings } from "./locale";
import { LocalInventoryContextProvider } from "../../utils/storage";
import propTypes from "prop-types";

export default function MaterialEstimation({ materials }) {

  let types = [...new Set(materials.map(material => material.priority))];
  
  return (
    <LocalInventoryContextProvider>
      <TableContainer component={Card}>
        <CardHeader title="材料总览" />
        {types.map(type => (
          <MaterialTable
            key={type}
            type={localeStrings.materialType[type].zh}
            materials={materials.filter(material => (material.priority === type))}
          />
        ))}
      </TableContainer>
    </LocalInventoryContextProvider>
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