import React from "react";
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

export default function BoxEstimation({ neededSolos }) {
  return (
    <>
      <Paper>
        <Tabs value={0} centered>
          <Tab label="Solo单一关卡" />
          <Tab label="刷肉补正" />
        </Tabs>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>还需</TableCell>
              <TableCell align="center">数量</TableCell>
              <TableCell align="center">半红</TableCell>
              <TableCell align="center">肉</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(neededSolos).map(([mob, value]) => {
              return (
                <TableRow key={mob}>
                  <TableCell component="th" scope="row">
                    {mob}
                  </TableCell>
                  <TableCell align="center">{value.num}</TableCell>
                  <TableCell align="center">{value.elixir}</TableCell>
                  <TableCell align="center">{value.meat}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
