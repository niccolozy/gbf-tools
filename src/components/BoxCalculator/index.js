import React, { Component } from "react";
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Select,
  MenuItem,
  Typography,
  FormControl
} from "@material-ui/core";

import BoxInput from "./BoxInput";
import BoxProgress from "./BoxProgress.js";
import BoxEstimation from "./BoxEstimation.js";
import {
  calculateNeededSolo,
  calculateNeededSoloWithMeatRefill
} from "./calculation.js";
import { mobInfo } from "./constants";

const SOLO = 0;
const SOLOandMEAT = 1;

class BoxCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetBox: null,
      drewBox: null,
      currentToken: null,
      currentHonor: null,
      currentMeat: null,
      estimationMode: SOLO,
      meatChoice: "Ex",
      soloChoice: "Hell90"
    };
  }

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: Number(value) });
  };

  onModeChange = (e, mode) => {
    this.setState({ estimationMode: mode });
  };

  onChoiceChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    this.setState(JSON.parse(localStorage.getItem("BoxCalculator")));
  };

  componentDidUpdate = () => {
    localStorage.setItem("BoxCalculator", JSON.stringify(this.state));
  };

  render() {
    // console.log(this.state);
    const meatChoices = Object.keys(mobInfo).filter(mob => !mobInfo[mob].meat);
    const soloChoices = Object.keys(mobInfo).filter(mob => mobInfo[mob].meat);
    let payload = {
      mode: this.state.estimationMode,
      progress: null,
      neededSolos: null
    };
    switch (this.state.estimationMode) {
      case SOLO:
        [payload.progress, payload.neededSolos] = calculateNeededSolo(
          this.state
        );
        break;
      case SOLOandMEAT:
        [
          payload.progress,
          payload.neededSolos
        ] = calculateNeededSoloWithMeatRefill(this.state);
        break;
      default:
        break;
    }

    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper>
            <BoxInput current={this.state} onChange={this.onInputChange} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <BoxProgress progress={payload.progress} />
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Tabs
              value={this.state.estimationMode}
              onChange={this.onModeChange}
              centered
            >
              <Tab value={SOLO} label="Solo单一关卡" />
              <Tab value={SOLOandMEAT} label="Solo+补肉" />
            </Tabs>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <Select
                    name="meatChoice"
                    value={this.state.meatChoice}
                    disabled={this.state.estimationMode === SOLO}
                    onChange={this.onChoiceChange}
                  >
                    {meatChoices.map(mob => {
                      return (
                        <MenuItem key={mob} value={mob}>
                          {mob}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <Select
                    name="soloChoice"
                    value={this.state.soloChoice}
                    disabled={this.state.estimationMode === SOLO}
                    onChange={this.onChoiceChange}
                  >
                    {soloChoices.map(mob => {
                      return (
                        <MenuItem key={mob} value={mob}>
                          {mob}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                {this.state.estimationMode === SOLOandMEAT && (
                  <Typography variant="subtitle2" align="center">
                    计算假设平均每只{this.state.meatChoice}掉落
                    {mobInfo[this.state.meatChoice].meatGain}肉
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <BoxEstimation payload={payload} />
        </Grid>
      </Grid>
    );
  }
}

export default BoxCalculator;
