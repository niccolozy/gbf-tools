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

export default function BoxProgress({ progress }) {
  let total = progress.requiredToken;
  let completed =
    progress.currentToken + progress.drewToken + progress.currentTokenFromHonor;
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
                variant="determinate"
                value={
                  total !== 0 && completed < total
                    ? (completed / total) * 100
                    : 100
                }
              />
              {(total !== 0 ? (completed / total) * 100 : 100).toFixed(2) + "%"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
