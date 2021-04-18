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
  "SSR0突",
  "SSR1突",
  "SSR2突",
  "SSR3突"
];

export default function WeaponStepInput({ trackedSummons, onStepChange }) {
  const classes = useStyles();
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h5'>贤者武器进度</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table>
          <TableBody>
            {trackedSummons.map(({name, weaponIcon, weaponCurrent, weaponTarget}) => {
              return (
                <TableRow key={name}>
                  <TableCell className={classes.cell}>
                    <img
                      alt={name}
                      className={classes.image}
                      src={weaponIcon}
                    />
                  </TableCell>
                  <TableCell className={classes.cell} align="center">
                    <FormControl
                      fullWidth
                      style={{ marginLeft: 10, marginRight: 10 }}
                      error={typeof(weaponCurrent) == "undefined" ? true : false}
                    >
                      <InputLabel>已完成进度</InputLabel>
                      <Select
                        name="weaponCurrent"
                        value={typeof(weaponCurrent) == "undefined" ? '' : weaponCurrent }
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
                      error={typeof(weaponTarget) == "undefined" ? true : false}
                    >
                      <InputLabel>目标进度</InputLabel>
                      <Select
                        name="weaponTarget"
                        value={typeof(weaponTarget) == "undefined" ? '' : weaponTarget}
                        onChange={e => onStepChange(e, name)}
                      >
                        {stepChoices.map((step, index) => {
                          return (
                            index >= (typeof(weaponCurrent) == "undefined" ? 0 : weaponCurrent) && (
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

WeaponStepInput.propTypes ={
  trackedSummons: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    weaponicon: propTypes.string,
    weaponCurrent: propTypes.number,
    weaponTtarget: propTypes.number
  })),
  onStepChange: propTypes.func
};
