import React from "react";
import {
  Card,
  CardHeader,
  TextField,
  Typography,
  Divider,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  header: {
    padding: theme.spacing(1)
  },
  devider: {
    marginBottom: theme.spacing(1.5)
  },
  input: {
    margin: theme.spacing(1)
  }
}));

export default function BoxInput({ current, onChange }) {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const onValueChange = e => {
    onChange(e.target.name, Number(e.target.value));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title="数据输入"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider className={classes.devider} />

      <TextField
        name="targetHonor"
        label="目标贡献"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.targetHonor === null ? "" : current.targetHonor}
        size={matches ? "medium" : "small"}
      />
      <TextField
        name="currentHonor"
        label="已有贡献"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.currentHonor === null ? "" : current.currentHonor}
        size={matches ? "medium" : "small"}
      />
      <TextField
        name="currentMeat"
        label="持有肉数"
        variant="outlined"
        className={classes.input}
        onChange={onValueChange}
        value={current.currentMeat === null ? "" : current.currentMeat}
        size={matches ? "medium" : "small"}
      />
    </Card>
  );
}
