import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";

class BoxEstimation extends Component {
  render() {
    return (
      <>
        <Paper>
          <Tabs indicatorColor="primary" textColor="primary" centered>
            <Tab label="单一关卡" />
            <Tab label="刷肉补正" />
          </Tabs>
        </Paper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>还需</TableCell>
                <TableCell align="right">数量</TableCell>
                <TableCell align="right">半红</TableCell>
                <TableCell align="right">肉</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ex牛
                </TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default BoxEstimation;
