import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

export default function BoxEstimation({ payload }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>还需</TableCell>
            <TableCell align="center">数量</TableCell>
            <TableCell align="center">半红</TableCell>
            {payload.mode === 0 && <TableCell align="center">肉</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(payload.neededSolos).map(([mob, value]) => {
            return (
              <TableRow key={mob}>
                <TableCell component="th" scope="row">
                  {mob}
                </TableCell>
                <TableCell align="center">{value.num}</TableCell>
                <TableCell align="center">{value.elixir}</TableCell>
                {payload.mode === 0 && (
                  <TableCell align="center">{value.meat}</TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
