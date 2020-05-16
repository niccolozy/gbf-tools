import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { resolveSummons, summonFactory } from "./arcarumCosts.js";
import ArcarumBanner from "./ArcarumBanner";
import SummonStepInput from "./SummonStepInput";
import MaterialEstimation from "./MaterialEstimation";

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

export default function ArcarumCalculator() {
  let initTracker = {};
  SUMMONLIST.forEach(summon => {
    initTracker[summon] = {
      track: false,
      current: 0,
      target: 8
    };
  });
  const [summonTracker, setSummonTracker] = useState(initTracker);
  useEffect(() => {
    let state = JSON.parse(localStorage.getItem("ArcarumCalculator"));
    if (state !== null) {
      setSummonTracker(state);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ArcarumCalculator", JSON.stringify(summonTracker));
  }, [summonTracker]);

  const onBannerClick = summon => {
    let newTracker = { ...summonTracker };
    newTracker[summon].track = !newTracker[summon].track;
    setSummonTracker(newTracker);
  };
  const onStepChange = (e, summon) => {
    let newTracker = { ...summonTracker };
    newTracker[summon][e.target.name] = e.target.value;
    if (newTracker[summon].current > newTracker[summon].target) {
      newTracker[summon].target = newTracker[summon].current;
    }
    setSummonTracker(newTracker);
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
