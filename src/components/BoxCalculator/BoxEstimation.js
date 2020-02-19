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
            <TableCell>
              <b>战斗预测</b>
            </TableCell>
            <TableCell align="center">
              <b>数量</b>
            </TableCell>
            <TableCell align="center">
              <b>半红</b>
            </TableCell>
            <TableCell align="center">
              <b>肉</b>
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
                <TableCell align="center">{value.num}</TableCell>
                <TableCell align="center">{value.elixir}</TableCell>
                <TableCell align="center">
                  {(payload.mode === 0 &&
                    (value.hasEnoughMeat ? (
                      <IconText text={value.meat} msg={""} iconType="success" />
                    ) : (
                      <IconText
                        text={value.meat}
                        msg={"需要补肉"}
                        iconType="warning"
                      />
                    ))) ||
                    (payload.mode === 1 && value.meat)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
