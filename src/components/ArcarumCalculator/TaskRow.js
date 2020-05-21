import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import {
  TableCell,
  TableRow
} from "@material-ui/core";
import IconNameCell from "./IconNameCell";

import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { LocalInventoryContext, inventoryActions } from "../../utils/storage";

const useStyles = makeStyles(theme => ({
  completed: {
    background:"rgba(94,255,91,.15)"
  },
  cell: {
    padding: "6px",
    width: "20%"
  },
  input: {
    width: 45
  },
  outlinedSuccess: {
    color: theme.palette.success.main
  }
}));

export default function TaskRow({
  item,
  needed
}) {
  const classes = useStyles();
  const { inventory, dispatchInventory } = useContext(LocalInventoryContext);
  let remain = needed;
  let finished = inventory[item.name];
  if(!isNaN(Number(finished)))
    remain -= finished;
  return (
    <>
      <TableRow key={item.name} className={remain > 0 ? null : classes.completed}>
        <IconNameCell item={item} />
        <TableCell align="left" className={classes.cell}>
          <TextField
            name={item.name}
            className={classes.input}
            onChange={ e => dispatchInventory({
              type: inventoryActions.CHANGEAMOUNT,
              item: e.target.name,
              quantity: e.target.value
            })}
            inputProps={{
              style: { textAlign: "center", fontSize: 15 }
            }}
            value={finished===undefined ? "" : finished}
            error={isNaN(Number(finished))}
          />
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {remain > 0 ? remain : <CheckCircleIcon className={classes.outlinedSuccess} /> }
        </TableCell>
      </TableRow>
    </>
  );
}
