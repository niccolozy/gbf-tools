import React from "react";
import { Grid } from "@material-ui/core";
import { resolveSummons, summonFactory } from "./arcarumCosts.js";
import { resolveWeapons, weaponFactory } from "./NewWorldFoundationWeaponCosts";
import ArcarumBanner from "./ArcarumBanner";
import SummonStepInput from "./SummonStepInput";
import WeaponStepInput from "./WeaponStepInput";
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
const CHANGESTEP = "CHANGESTEP";

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
    case CHANGESTEP: {
      let newTracker = { 
        ...state,
        [action.summon]: {
          ...state[action.summon],
          ...(action.target==="current" && {
            current: action.value, 
            // target step shouldn't be smaller than current step
            // overwrite with new current step if it's the case
            ...(action.value > state[action.summon].target && {
              target: action.value
            })
          }),
          ...(action.target==="target" && { target: action.value }),
          ...(action.target==="weaponCurrent" && {
            weaponCurrent: action.value, 
            ...(action.value > state[action.summon].weaponTarget && {
              weaponTarget: action.value
            })
          }),
          ...(action.target==="weaponTarget" && { weaponTarget: action.value }),
        }
      };
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
      target: 8,
      weaponCurrent: 0,
      weaponTarget: 0
    };
  });

  const [summonTracker, dispatchSummonTracker] = useLocalStorageState("ArcarumCalculator", TrackerReducer, initTracker);

  const onBannerClick = summon => {
    dispatchSummonTracker({
      type:TOGGLETRACKING, 
      summon:summon
    });
  };

  const onStepChange = (e, summon) => {
    dispatchSummonTracker({
      type: CHANGESTEP, 
      summon:summon,
      target: e.target.name,
      value: e.target.value
    });
  };

  const trackList = Object.keys(summonTracker).filter(
    key => summonTracker[key].track
  );

  let trackedSummons = trackList.map(name => ({name: name, icon: summonFactory(name, summonTracker[name].current).icon, weaponIcon: weaponFactory(name, summonTracker[name].weaponCurrent).icon, ...summonTracker[name]}));
  let summonsMaterials = resolveSummons(trackedSummons);
  let weaponMaterials = resolveWeapons(trackedSummons);
  let virtual_target = makeItem(-1, "fake", "", {isCrafted:true, craftMaterials:[].concat(summonsMaterials, weaponMaterials)});
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
          onStepChange={onStepChange}
        />
      </Grid>
      <Grid item xs={12}>
        <WeaponStepInput
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
