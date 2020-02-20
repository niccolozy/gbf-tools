import React from "react";
import { Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const useStyles = makeStyles(theme => ({
  tooltip: {
    fontSize: 14
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  outlinedWarning: {
    color: theme.palette.error.main,
    fontSize: "large"
  },
  outlinedSuccess: {
    color: theme.palette.success.main,
    fontSize: "large"
  }
}));

export default function IconText({ text, msg, iconType }) {
  const classes = useStyles();
  const getIcon = iconType => {
    switch (iconType) {
      case "warning":
        return (
          <ReportProblemOutlinedIcon className={classes.outlinedWarning} />
        );
      case "success":
        return (
          <CheckCircleOutlineOutlinedIcon className={classes.outlinedSuccess} />
        );
      default:
        return;
    }
  };
  return (
    <Tooltip title={msg} classes={{ tooltip: classes.tooltip }}>
      <div className={classes.container}>
        <Typography variant={"body2"}>{text}</Typography>
        {getIcon(iconType)}
      </div>
    </Tooltip>
  );
}
