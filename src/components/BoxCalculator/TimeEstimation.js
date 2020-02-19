import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mobInfo } from "./constants.js";

const useStyles = makeStyles(theme => ({
  input: {
    padding: 3,
    width: 35
  }
}));

export default function BoxEstimation({ payload }) {
  let initTimer = {};
  for (let mobName in mobInfo) {
    initTimer[mobName] = { m: 0, s: 0 };
  }
  const [timer, setTimer] = useState(initTimer);
  const classes = useStyles();
  useEffect(() => {
    let state = JSON.parse(localStorage.getItem("GWtimer"));
    if (state !== null) {
      setTimer(state);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("GWtimer", JSON.stringify(timer));
  }, [timer]);

  const computeTimeOutput = (mob, factor) => {
    let total = (timer[mob].m * 60 + timer[mob].s) * factor;
    let h = Math.floor(total / 3600);
    let res = total % 3600;
    let m = Math.floor(res / 60);
    let s = res % 60;
    return `${h}:${m}:${s}`;
  };

  const onValueChange = e => {
    let newTimer = { ...timer };
    let [mob, type] = e.target.name.split(".");
    switch (type) {
      case "m":
        console.log(e.target.value);
        newTimer[mob].m = isNaN(Number(e.target.value))
          ? 0
          : Number(e.target.value);
        break;
      case "s":
        newTimer[mob].s = isNaN(Number(e.target.value))
          ? 0
          : Number(e.target.value);
        break;
      default:
    }
    setTimer(newTimer);
    console.log(newTimer);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>时间预测</b>
            </TableCell>
            <TableCell align="center">
              <b>单场时间</b>
            </TableCell>
            <TableCell align="center">
              <b>数量</b>
            </TableCell>
            <TableCell align="center">
              <b>预估时间</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(payload.neededSolos).map(([mob, value]) => {
            return (
              <TableRow key={mob}>
                <TableCell component="th" scope="row">
                  {mob}
                </TableCell>
                <TableCell align="center">
                  <Grid
                    container
                    alignContent="space-around"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item>
                      <TextField
                        name={mob + ".m"}
                        className={classes.input}
                        value={timer[mob].m}
                        onChange={onValueChange}
                        size="small"
                        inputProps={{
                          style: { textAlign: "center", fontSize: 15 }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>m</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        name={mob + ".s"}
                        className={classes.input}
                        value={timer[mob].s}
                        onChange={onValueChange}
                        size="small"
                        inputProps={{
                          style: { textAlign: "center", fontSize: 15 }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>s</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="center">{value.num}</TableCell>
                <TableCell align="center">
                  {computeTimeOutput(mob, value.num)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
