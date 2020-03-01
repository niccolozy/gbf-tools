import React from "react";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as banners from "../../assets/ArcarumBanners";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {},
  unselected: {
    filter: "brightness(50%)"
  },
  selected: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "13px"
  }
}));

export default function ArcarumBanner({ summon, selected, onClick }) {
  const classes = useStyles();
  return (
    <ButtonBase
      key={summon}
      className={classes.root}
      onClick={e => {
        onClick(summon);
      }}
    >
      <img
        alt={summon + " Banner"}
        className={clsx(classes.selected, { [classes.unselected]: !selected })}
        src={banners[summon]}
      />
    </ButtonBase>
  );
}
