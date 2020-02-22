import React, { useState, useEffect } from "react";
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
import { makeStyles } from "@material-ui/core/styles";

import HonorInput from "./HonorInput.js";
import HonorProgress from "./HonorProgress.js";
import BoxEstimation from "../BoxCalculator/BoxEstimation.js";
import TimeEstimation from "../BoxCalculator/TimeEstimation.js";
import {
  calculateNeededSolo,
  calculateNeededSoloWithMeatRefill
} from "../BoxCalculator/calculation.js";
import { mobInfo } from "../BoxCalculator/constants.js";

const SOLO = 0;
const SOLOandMEAT = 1;

const useStyles = makeStyles(theme => ({
  inputZone: {
    height: "100%"
  },
  outputZone: {
    height: "100%"
  }
}));

function HonorCalculator(props) {
  const [targetHonor, setTargetHonor] = useState(null);
  const [currentHonor, setCurrentHonor] = useState(null);
  const [currentMeat, setCurrentMeat] = useState(null);
  const [estimationMode, setEstimationMode] = useState(0);
  const [meatChoice, setMeatChoice] = useState("Ex");
  const [soloChoice, setSoloChoice] = useState("Hell90");
  const classes = useStyles();

  const onInputChange = (inputName, value) => {
    let numValue = isNaN(value) ? 0 : value;
    switch (inputName) {
      case "targetHonor":
        setTargetHonor(numValue);
        break;
      case "currentHonor":
        setCurrentHonor(numValue);
        break;
      case "currentMeat":
        setCurrentMeat(numValue);
        break;
      default:
    }
  };

  const onModeChange = (e, mode) => {
    setEstimationMode(Number(mode));
  };

  const onChoiceChange = e => {
    switch (e.target.name) {
      case "meatChoice":
        setMeatChoice(e.target.value);
        break;
      case "soloChoice":
        setSoloChoice(e.target.value);
        break;
      default:
    }
  };

  useEffect(() => {
    let state = JSON.parse(localStorage.getItem("HonorCalculator"));
    if (state !== null) {
      setTargetHonor(state.targetHonor);
      setCurrentHonor(state.currentHonor);
      setCurrentMeat(state.currentMeat);
      setEstimationMode(state.estimationMode);
      setMeatChoice(state.meatChoice);
      setSoloChoice(state.soloChoice);
    }
  }, []);

  useEffect(() => {
    let state = {
      targetHonor: targetHonor,
      currentHonor: currentHonor,
      currentMeat: currentMeat,
      estimationMode: estimationMode,
      meatChoice: meatChoice,
      soloChoice: soloChoice
    };
    localStorage.setItem("HonorCalculator", JSON.stringify(state));
  }, [
    targetHonor,
    currentHonor,
    currentMeat,
    estimationMode,
    meatChoice,
    soloChoice
  ]);

  const meatChoices = Object.keys(mobInfo).filter(mob => !mobInfo[mob].meat);
  const soloChoices = Object.keys(mobInfo).filter(mob => mobInfo[mob].meat);
  let payload = {
    mode: estimationMode,
    progress: null,
    neededSolos: null
  };
  let data = {
    targetHonor: targetHonor,
    currentHonor: currentHonor,
    currentMeat: currentMeat,
    estimationMode: estimationMode,
    meatChoice: meatChoice,
    soloChoice: soloChoice
  };

  switch (estimationMode) {
    case SOLO:
      [payload.progress, payload.neededSolos] = calculateNeededSolo(
        data,
        "soloHonor"
      );
      break;
    case SOLOandMEAT:
      [
        payload.progress,
        payload.neededSolos
      ] = calculateNeededSoloWithMeatRefill(data, "soloHonor");
      break;
    default:
      break;
  }

  return (
    <Grid container spacing={1}>
      <Grid item sm={3} xs={12}>
        <HonorInput current={data} onChange={onInputChange} />
      </Grid>

      <Grid item sm={9} xs={12}>
        <Paper className={classes.outputZone}>
          <HonorProgress progress={payload.progress} />

          <Paper>
            <Tabs value={estimationMode} onChange={onModeChange} centered>
              <Tab value={SOLO} label="Solo单一关卡" />
              <Tab value={SOLOandMEAT} label="Solo+补肉" />
            </Tabs>

            {estimationMode === SOLOandMEAT && (
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={3}>
                  <FormControl
                    fullWidth
                    style={{ marginLeft: 10, marginRight: 10 }}
                  >
                    <Select
                      name="meatChoice"
                      value={meatChoice}
                      onChange={onChoiceChange}
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
                  <FormControl
                    fullWidth
                    style={{ marginLeft: 10, marginRight: 10 }}
                  >
                    <Select
                      name="soloChoice"
                      value={soloChoice}
                      onChange={onChoiceChange}
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
                  {estimationMode === SOLOandMEAT && (
                    <Typography variant="subtitle2" align="center">
                      计算假设平均每只{meatChoice}掉落
                      {mobInfo[meatChoice].meatGain}肉
                    </Typography>
                  )}
                </Grid>
              </Grid>
            )}
          </Paper>

          <BoxEstimation payload={payload} />
          <TimeEstimation payload={payload} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default HonorCalculator;
