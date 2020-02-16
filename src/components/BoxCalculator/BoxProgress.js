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
    // backgroundColor: lighten("#ff6c5c", 0.5)
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
  let total = progress.requiredToken;
  let completed =
    progress.currentToken + progress.drewToken + progress.currentTokenFromHonor;
  let progressPercentage = total !== 0 ? (completed / total) * 100 : 100;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>进度</TableCell>
            <TableCell align="center">需求战货</TableCell>
            <TableCell align="center">已完成战货</TableCell>
            <TableCell align="center">当前进度</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              总进度
            </TableCell>
            <TableCell align="center">{total}</TableCell>
            <TableCell align="center">{completed}</TableCell>
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
                value={progressPercentage}
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
