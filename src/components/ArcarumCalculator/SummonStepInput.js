import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
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
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h5'>转世召唤石进度</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table>
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
                      error={typeof(current) == "undefined" ? true : false}
                    >
                      <InputLabel>已完成进度</InputLabel>
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
                      error={typeof(target) == "undefined" ? true : false}
                    >
                      <InputLabel>目标进度</InputLabel>
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
      </AccordionDetails>
    </Accordion>
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
