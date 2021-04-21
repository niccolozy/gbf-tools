import React from "react";
import { Grid } from "@material-ui/core";
import { resolveSummons, summonFactory } from "./arcarumCosts.js";
import { resolveWeapons, weaponFactory } from "./NewWorldFoundationWeaponCosts";
import { resolveDomain, domainFactory } from "./EvokerDomainCost";
import ArcarumBanner from "./ArcarumBanner";
import SummonStepInput from "./SummonStepInput";
import WeaponStepInput from "./WeaponStepInput";
import DomainStepInput from "./DomainStepInput";
import MaterialEstimation from "./MaterialEstimation";
import { useLocalStorageState } from "../../utils/storage";
import { makeMaterial, makeItem, resolveMaterials } from "../../utils/Items/Item";

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
const SUMMONSTEPCHANGE = "SUMMONSTEPCHANGE";
const WEAPONSTEPCHANGE = "WEAPONSTEPCHANGE";
const DOMAINSTEPCHANGE = "DOMAINSTEPCHANGE";


const isTargetValueValid = (current, target) => {
  return target >= current;
}

const updateTracker = (oldtracker, summon, newTrackerValue) => {
  let newTracker = Object.assign({}, oldtracker);
  newTracker[summon] = newTrackerValue;
  return newTracker;
}

const changeTrackerStep = (oldtracker, summon, fieldCurrent, fieldTarget, changedField, newValue) => {
  let newTrackerValue = Object.assign({}, oldtracker[summon])
  newTrackerValue[changedField] = newValue;
  if (!isTargetValueValid(newTrackerValue[fieldCurrent], newTrackerValue[fieldTarget])) {
    newTrackerValue[fieldTarget] = newTrackerValue[fieldCurrent];
  }
  return updateTracker(oldtracker, summon, newTrackerValue);
}

const TrackerReducer = (state, action) => {
  switch (action.type) {
    case TOGGLETRACKING: {
      let newTracker = { 
        ...state, 
        [action.summon]: {
          ...state[action.summon], 
          track: !state[action.summon].track
        }
      };
      return newTracker;
    }
    case WEAPONSTEPCHANGE: {
      return changeTrackerStep(state, action.summon, "weaponCurrent", "weaponTarget", action.target, action.value);
    }
    case SUMMONSTEPCHANGE: {
      return changeTrackerStep(state, action.summon, "current", "target", action.target, action.value);
    }
    case DOMAINSTEPCHANGE: {
      return changeTrackerStep(state, action.summon, "domainCurrent", "domainTarget", action.target, action.value);
    }
    default:
      throw new Error("Unknown operation for tracking change: " + action);
  }
};

export default function ArcarumCalculator() {
  let initTracker = {};
  SUMMONLIST.forEach(summon => {
    initTracker[summon] = {
      track: false,
      current: 0,
      target: 8,
      weaponCurrent: 0,
      weaponTarget: 0,
      domainCurrent: 0,
      domainTarget: 0
    };
  });

  const [summonTracker, dispatchSummonTracker] = useLocalStorageState("ArcarumCalculator", TrackerReducer, initTracker);

  const onBannerClick = summon => {
    dispatchSummonTracker({
      type:TOGGLETRACKING, 
      summon:summon
    });
  };

  const onStepChangeCreator = (type) => {
    return (e, summon) => {
      dispatchSummonTracker({
        type: type,
        summon: summon,
        target: e.target.name,
        value: e.target.value
      })
    };
  };

  const onSummonStepChange = onStepChangeCreator(SUMMONSTEPCHANGE);
  const onWeaponStepChange = onStepChangeCreator(WEAPONSTEPCHANGE);
  const ondomainStepChange = onStepChangeCreator(DOMAINSTEPCHANGE);

  const trackList = Object.keys(summonTracker).filter(
    key => summonTracker[key].track
  );

  let trackedSummons = trackList.map(
    name => (
      {
        name: name, 
        icon: summonFactory(name, summonTracker[name].current).icon, 
        current: summonTracker[name].current,
        target: summonTracker[name].target
      }
    )
  );

  let trackedWeapons = trackList.map(
    name => (
      {
        name: name, 
        icon: weaponFactory(name, summonTracker[name].weaponCurrent).icon, 
        current: summonTracker[name].weaponCurrent,
        target: summonTracker[name].weaponTarget
      }
    )
  );

  let trackedEvoker = trackList.map(
    name => (
      {
        name: name, 
        icon: domainFactory(name, summonTracker[name].domainCurrent).icon, 
        current: summonTracker[name].domainCurrent,
        target: summonTracker[name].domainTarget
      }
    )
  );
  
  let summonsMaterials = resolveSummons(trackedSummons);
  let weaponMaterials = resolveWeapons(trackedWeapons);
  let domainMaterials = resolveDomain(trackedEvoker);
  let virtual_target = makeItem(null, "fake", "", {isCrafted:true, craftMaterials:[].concat(summonsMaterials, weaponMaterials, domainMaterials)});
  let materials = resolveMaterials(makeMaterial(virtual_target, 1));

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
          onStepChange={onSummonStepChange}
        />
      </Grid>
      <Grid item xs={12}>
        <WeaponStepInput
          trackedWeapons={trackedWeapons}
          onStepChange={onWeaponStepChange}
        />
      </Grid>

      <Grid item xs={12}>
        <DomainStepInput
          trackedEvoker={trackedEvoker}
          onStepChange={ondomainStepChange}
        />
      </Grid>

      <Grid item xs={12}>
        <MaterialEstimation materials={materials} />
      </Grid>
    </Grid>
  );
}
