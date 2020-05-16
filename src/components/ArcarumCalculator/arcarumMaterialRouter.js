import {makeMaterial} from "../../utils/Items/Item";
import {PrimarchAnima} from "../../utils/Items/treasures/Primal";
import {AuroraHaze, ChaoticHaze} from "../../utils/Items/treasures/Uncap";
import {AquilaFragment,BellatorFragment, CelsusFragment} from "../../utils/Items/treasures/Uncap";
import {VerumProof} from "../../utils/Items/treasures/Uncap";
import {TrialFragment} from "../../utils/Items/treasures/Uncap";
import * as World from "../../utils/Items/treasures/World";
import {ArcarumPriorities} from "./arcarumCosts"

export const HazeRouter = (element, quantity) => {
  switch(element) {
    case "fire":
    case "wind":
    case "light":
      return [makeMaterial(AuroraHaze, quantity, ArcarumPriorities.OTHERARCARUM)];
    case "earth":
    case "water":
    case "dark":
      return [makeMaterial(ChaoticHaze, quantity, ArcarumPriorities.OTHERARCARUM)];
    default:
      console.log(`Wrong summon for Haze: ${element}`);
  }
};

export const ArcarumFragmentRouter = (summon, quantity) => {
  switch(summon) {
    case "HangedMan":
    case "Devil":
    case "Sun":
      return [makeMaterial(AquilaFragment, quantity, ArcarumPriorities.OTHERARCARUM)];
    case "Justice":
    case "Moon":
    case "Judgement":
      return [makeMaterial(BellatorFragment, quantity, ArcarumPriorities.OTHERARCARUM)];
    case "Death":
    case "Temperance":
    case "Star":
    case "Tower":
      return [makeMaterial(CelsusFragment, quantity, ArcarumPriorities.OTHERARCARUM)];
    default:
      console.log(`Wrong summon for Arcarum Fragment: ${summon}`);
  }
};

export const VerumProofRouter = (element, quantity) => {
  switch (element) {
    case "light":
      return [makeMaterial(VerumProof("fire"), quantity/2, ArcarumPriorities.OTHERARCARUM), makeMaterial(VerumProof("wind"), quantity/2, ArcarumPriorities.OTHERARCARUM)];
    case "dark":
      return [makeMaterial(VerumProof("water"), quantity/2, ArcarumPriorities.OTHERARCARUM), makeMaterial(VerumProof("earth"), quantity/2, ArcarumPriorities.OTHERARCARUM)];
    default:
      return [makeMaterial(VerumProof(element), quantity, ArcarumPriorities.OTHERARCARUM)];
  }
};

export const PrimarchAnimaRouter = (element, quantity) => {
  switch (element) {
    case "light":
      return [makeMaterial(PrimarchAnima("fire"), quantity/2), makeMaterial(PrimarchAnima("wind"), quantity/2)];
    case "dark":
      return [makeMaterial(PrimarchAnima("water"), quantity/2), makeMaterial(PrimarchAnima("earth"), quantity/2)];
    default:
      return [makeMaterial(PrimarchAnima(element), quantity)];
  }
};

export const TrialFragmentRouter = (element, quantity) => {
  switch (element) {
    case "light":
      return [makeMaterial(TrialFragment("fire"), quantity/2), makeMaterial(TrialFragment("wind"), quantity/2)];
    case "dark":
      return [makeMaterial(TrialFragment("water"), quantity/2), makeMaterial(TrialFragment("earth"), quantity/2)];
    default:
      return [makeMaterial(TrialFragment(element), quantity)];
  }
};

export const WorldMaterialRouter = (summon, quantity) => {
  switch(summon) {
    case "HangedMan":
      return [makeMaterial(World.BestiaFruit, quantity)];
    case "Devil":
      return [makeMaterial(World.RhemPepper, quantity)];
    case "Sun":
      return [makeMaterial(World.MeditativeSutra, quantity)];
    case "Justice":
      return [makeMaterial(World.ToxicTulip, quantity)];
    case "Moon":
      return [makeMaterial(World.TranslucentSilk, quantity)];
    case "Judgement":
      return [makeMaterial(World.DustyBook, quantity)];
    case "Death":
      return [makeMaterial(World.JumboBeastBone, quantity)];
    case "Temperance":
      return [makeMaterial(World.KlugerHerb, quantity)];
    case "Star":
      return [makeMaterial(World.RustyEave, quantity)];
    case "Tower":
      return [makeMaterial(World.BrokenTeacup, quantity)];
    default:
      console.log(`Wrong summon for World Material: ${summon}`);
  }
};