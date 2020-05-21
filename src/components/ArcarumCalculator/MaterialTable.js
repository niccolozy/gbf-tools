import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import TaskRow from "./TaskRow";
import propTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cell: {
    padding: "6px",
    width: "20%"
  },
  iconCell: {
    padding: "6px",
    width: "60%"
  },
  iconDiv: {
    display: "flex",
    alignItems: "center"
  },
  text: {
    marginLeft: "5px"
  },
  image: {
    maxWidth: "70px",
    height: "auto",
    width: "20%"
  },
  input: {
    width: 45
  }
}));

export default function MaterialTable({
  type,
  materials
}) {
  const classes = useStyles();
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.iconCell}>
              <b>{type}</b>
            </TableCell>
            <TableCell align="left" className={classes.cell}>
              <b>已有</b>
            </TableCell>
            <TableCell align="left" className={classes.cell}>
              <b>仍需</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materials.map( ({item, quantity}) => (
            <TaskRow key={item.name} item={item} needed={quantity} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

MaterialTable.propTypes ={
  type: propTypes.string,
  materials: propTypes.arrayOf(
    propTypes.shape({
      item: propTypes.object,
      quantity: propTypes.number,
      priority: propTypes.number
    })
  ),
  inventory: propTypes.object,
  onValueChange: propTypes.func
};