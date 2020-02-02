import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

class BoxProgress extends Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>进度</TableCell>
              <TableCell align="right">需求战货</TableCell>
              <TableCell align="right">已有战货</TableCell>
              <TableCell align="right">当前进度</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                总进度
              </TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">20</TableCell>
              <TableCell align="right">{(20 / 100) * 100}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default BoxProgress;
