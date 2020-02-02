import React, { Component } from "react";
import {
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class BoxCalculator extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Paper>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>数据输入</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper>Progression Zone</Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper>Estimation Zone</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default BoxCalculator;
