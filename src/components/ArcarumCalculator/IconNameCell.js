import React from "react";
import { Typography, Link } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  iconCell: {
    padding: "6px",
    width: "60%"
  },
  iconDiv: {
    display: "flex",
    alignItems: "center"
  },
  text: {
    marginLeft: "5px"
  },
  image: {
    maxWidth: "70px",
    height: "auto",
    width: "20%"
  }
}));

export default function IconNameCell({ item }) {
  const classes = useStyles();
  let {name, icon} = item;
  let wikiSearchUrl = ("https://gbf.wiki/"+name).replace(/\s/g, "_");
  return (
    <>
      <TableCell className={classes.iconCell}>
        <div className={classes.iconDiv}>
          <img
            alt={name + " icon"}
            className={classes.image}
            src={icon}
          />
          <Typography className={classes.text} variant="body2">
            
            <Link
              href={wikiSearchUrl}
              target="_blank"
              color="inherit"
              underline="always"
            >
              {name} 
            </Link>
          </Typography>
        </div>
      </TableCell>
    </>
  );
}

IconNameCell.propTypes ={
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  })
};