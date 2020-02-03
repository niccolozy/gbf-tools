import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import BoxInput from "./BoxInput";
import BoxProgress from "./BoxProgress.js";
import BoxEstimation from "./BoxEstimation.js";

class BoxCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetBox: "",
      drewBox: "",
      currentToken: "",
      currentHonor: "",
      currentMeat: ""
    };
  }

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  };

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Paper>
            <BoxInput current={this.state} onChange={this.onInputChange} />
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
