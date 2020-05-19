import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { resolveSummons, summonFactory } from "./arcarumCosts.js";
import ArcarumBanner from "./ArcarumBanner";
import SummonStepInput from "./SummonStepInput";
import MaterialEstimation from "./MaterialEstimation";
import useLocalStorageState from "../../utils/storage";

const SUMMONLIST = [
  "Justice",
  "HangedMan",
  "Death",
  "Temperance",
  "Devil",
  "Tower",
  "Star",
  "Moon",
  "Sun",
  "Judgement"
];

const TOGGLETRACKING = "TOGGLETRACKING";
const CHANGESTEP = "CHANGESTEP";
const reducer = action => (state, prop) => {
  switch (action.type) {
    case TOGGLETRACKING: {
      let newTracker = { ...state };
      newTracker[action.summon].track = !newTracker[action.summon].track;
      return newTracker;
    }
    case CHANGESTEP: {
      let newTracker = { ...state };
      newTracker[action.summon][action.target] = action.value;
      if (newTracker[action.summon].current > newTracker[action.summon].target)
        newTracker[action.summon].target = newTracker[action.summon].current;
      return newTracker;
    }
    default:
      throw new Error("Unknown operation for summon tracking change: " + action);
  }
};

export default function ArcarumCalculator() {
  let initTracker = {};
  SUMMONLIST.forEach(summon => {
    initTracker[summon] = {
      track: false,
      current: 0,
      target: 8
    };
  });

  const [summonTracker, setSummonTracker] = useLocalStorageState("ArcarumCalculator", initTracker);

  const onBannerClick = summon => {
    setSummonTracker(reducer({
      type:TOGGLETRACKING, 
      summon:summon
    }));
  };

  const onStepChange = (e, summon) => {
    setSummonTracker(reducer({
      type: CHANGESTEP, 
      summon:summon,
      target: e.target.name,
      value: e.target.value
    }));
  };

  const trackList = Object.keys(summonTracker).filter(
    key => summonTracker[key].track
  );

  let trackedSummons = trackList.map(name => ({name: name, icon: summonFactory(name, summonTracker[name].current).icon, ...summonTracker[name]}));
  let materials = resolveSummons(trackedSummons);

  return (
    <Grid
      container
      spacing={1}
      style={{ paddingTop: 4, paddingLeft: 2, paddingRight: 2 }}
    >
      {SUMMONLIST.map(summon => {
        return (
          <Grid key={summon} item xs={6} sm={4} md={2}>
            <ArcarumBanner
              summon={summon}
              selected={summonTracker[summon].track}
              onClick={onBannerClick}
            />
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <SummonStepInput
          trackedSummons={trackedSummons}
          onStepChange={onStepChange}
        />
      </Grid>

      <Grid item xs={12}>
        <MaterialEstimation materials={materials} />
      </Grid>
    </Grid>
  );
}
