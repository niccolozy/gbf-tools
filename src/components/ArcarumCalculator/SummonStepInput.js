import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  cell: {
    width: "33.3%",
    padding: "7px"
  },
  image: {
    maxWidth: "140px",
    height: "auto",
    width: "100%"
  }
}));

const stepChoices = [
  "未获得",
  "SR0突",
  "SR1突",
  "SR2突",
  "SR3突",
  "SSR3突",
  "SSR4突",
  "SSR5突",
  "贤者"
];

export default function SummonStepInput({ trackedSummons, onStepChange }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader subheader="设定当前进度与目标进度" title="召唤石进度" />
      <Divider />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>召唤石</b>
              </TableCell>
              <TableCell align="center">
                <b>已完成进度</b>
              </TableCell>
              <TableCell align="center">
                <b>目标进度</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trackedSummons.map(({name, icon, current, target}) => {
              return (
                <TableRow key={name}>
                  <TableCell className={classes.cell}>
                    <img
                      alt={name}
                      className={classes.image}
                      src={icon}
                    />
                  </TableCell>
                  <TableCell className={classes.cell} align="center">
                    <FormControl
                      fullWidth
                      style={{ marginLeft: 10, marginRight: 10 }}
                    >
                      <Select
                        name="current"
                        value={current}
                        onChange={e => onStepChange(e, name)}
                      >
                        {stepChoices.map((step, index) => {
                          return (
                            <MenuItem key={step} value={index}>
                              {step}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell className={classes.cell} align="center">
                    <FormControl
                      fullWidth
                      style={{ marginLeft: 10, marginRight: 10 }}
                    >
                      <Select
                        name="target"
                        value={target}
                        onChange={e => onStepChange(e, name)}
                      >
                        {stepChoices.map((step, index) => {
                          return (
                            index >= current && (
                              <MenuItem key={step} value={index}>
                                {step}
                              </MenuItem>
                            )
                          );
                        })}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

SummonStepInput.propTypes ={
  trackedSummons: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
