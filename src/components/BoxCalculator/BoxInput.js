import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField,
  Typography,
  Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function BoxInput({ current, onChange }) {
  const classes = useStyles();
  const onValueChange = e => {
    onChange(e.target.name, Number(e.target.value));
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>数据输入</Typography>
      </ExpansionPanelSummary>
      <Divider />
      <ExpansionPanelDetails>
        <div>
          <TextField
            name="targetBox"
            label="目标箱数"
            variant="filled"
            className={classes.margin}
            onChange={onValueChange}
            value={current.targetBox}
          />
          <TextField
            name="drewBox"
            label="已刷箱数"
            variant="filled"
            className={classes.margin}
            onChange={onValueChange}
            value={current.drewBox}
          />
        </div>
        <br />
        <div>
          <TextField
            name="currentToken"
            label="持有战货数"
            variant="filled"
            className={classes.margin}
            onChange={onValueChange}
            value={current.currentToken}
          />
          <TextField
            name="currentHonor"
            label="累计贡献"
            variant="filled"
            className={classes.margin}
            onChange={onValueChange}
            value={current.currentHonor}
          />
          <TextField
            name="currentMeat"
            label="持有肉数量"
            variant="filled"
            className={classes.margin}
            onChange={onValueChange}
            value={current.currentMeat}
          />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
