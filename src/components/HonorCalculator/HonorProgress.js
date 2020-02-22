import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    height: 8
  },
  barComplete: {
    borderRadius: 20,
    backgroundColor: green[500]
  },
  barIncomplete: {
    borderRadius: 20,
    backgroundColor: blue[700]
  }
}));

export default function BoxProgress({ progress }) {
  const classes = useStyles();
  let progressPercentage =
    progress.total !== 0 ? (progress.completed / progress.total) * 100 : 100;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>进度</b>
            </TableCell>
            <TableCell align="center">
              <b>目标贡献</b>
            </TableCell>
            <TableCell align="center">
              <b>完成贡献</b>
            </TableCell>
            <TableCell align="center">
              <b>当前进度</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              总进度
            </TableCell>
            <TableCell align="center">{progress.total}</TableCell>
            <TableCell align="center">{progress.completed}</TableCell>
            <TableCell align="center">
              <LinearProgress
                classes={{
                  root: classes.root,
                  bar:
                    progressPercentage >= 100
                      ? classes.barComplete
                      : classes.barIncomplete
                }}
                variant="determinate"
                value={progressPercentage > 100 ? 100 : progressPercentage}
                style={{ barColorPrimary: { backgroundColor: "#00695c" } }}
              />
              {progressPercentage.toFixed(2) + "%"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
