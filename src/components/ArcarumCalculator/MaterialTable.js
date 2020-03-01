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
            <TableCell className={classes.iconCell}>
              <b>{localeStrings.materialType[type].zh}</b>
            </TableCell>
            <TableCell align="left" className={classes.cell}>
              <b>已有</b>
            </TableCell>
            <TableCell align="left" className={classes.cell}>
              <b>所需</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(materials).map(([name, material]) => {
            return (
              <TableRow key={name}>
                <TableCell className={classes.iconCell}>
                  <div className={classes.iconDiv}>
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
                <TableCell align="left" className={classes.cell}>
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
                <TableCell align="left" className={classes.cell}>
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
