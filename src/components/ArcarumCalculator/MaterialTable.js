import React from "react";
import { Typography, TextField } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { localeStrings } from "./locale";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cell: {
    padding: "6px"
  },
  iconCell: {
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

export default function MaterialEstimation({
  type,
  materials,
  inventory,
  onValueChange
}) {
  const classes = useStyles();
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>{localeStrings.materialType[type].zh}</b>
            </TableCell>
            <TableCell align="center">
              <b>已有</b>
            </TableCell>
            <TableCell align="center">
              <b>所需</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(materials).map(([name, material]) => {
            return (
              <TableRow key={name}>
                <TableCell className={classes.cell}>
                  <div className={classes.iconCell}>
                    <img
                      alt={name + " icon"}
                      className={classes.image}
                      src={material.icon}
                    />
                    <Typography className={classes.text} variant="body2">
                      {material.name}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  <TextField
                    name={name}
                    className={classes.input}
                    onChange={onValueChange}
                    inputProps={{
                      style: { textAlign: "center", fontSize: 15 }
                    }}
                    value={inventory[name] || ""}
                  />
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {inventory[material.name]
                    ? material.quantity - inventory[material.name] >= 0
                      ? material.quantity - inventory[material.name]
                      : 0
                    : material.quantity}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
