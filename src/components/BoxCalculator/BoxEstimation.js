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
import IconText from "./IconText.js";

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
                  <TableCell align="center">
                    {value.hasEnoughMeat ? (
                      <IconText text={value.meat} msg={""} iconType="success" />
                    ) : (
                      <IconText
                        text={value.meat}
                        msg={"需要补肉"}
                        iconType="warning"
                      />
                    )}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
