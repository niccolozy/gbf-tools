import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import BoxInput from "./BoxInput";
import BoxProgress from "./BoxProgress.js";
import BoxEstimation from "./BoxEstimation.js";

class BoxCalculator extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Paper>
            <BoxInput />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <BoxProgress />
        </Grid>
        <Grid item sm={12}>
          <BoxEstimation />
        </Grid>
      </Grid>
    );
  }
}

export default BoxCalculator;
