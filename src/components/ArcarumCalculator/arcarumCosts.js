import * as treasures from "../../utils/Items/treasures";
import { makeMaterial, makeItem, resolveMaterials } from "../../utils/Items/Item";
import { 
  HazeRouter, 
  VerumProofRouter, 
  PrimarchAnimaRouter, 
  ArcarumFragmentRouter, 
  TrialFragmentRouter, 
  WorldMaterialRouter 
} from "./arcarumMaterialRouter";

const UNOBTAINED = 0;
const SR0 = 1;
const SR1 = 2;
const SR2 = 3;
const SR3 = 4;
const SSR3 = 5;
const SSR4 = 6;
const SSR5 = 7;
const EVOKER = 8;

export const ArcarumPriorities = {
  RARE:1,
  IMPORTANT:2,
  OTHERARCARUM:3,
  OTHER:4,
  BASIC:Number.MAX_SAFE_INTEGER
};

const summonToElement = {
  Justice: "water",
  HangedMan: "earth",
  Death: "dark",
  Temperance: "wind",
  Devil: "fire",
  Tower: "earth",
  Star: "light",
  Moon: "water",
  Sun: "fire",
  Judgement: "wind"
};

const SRSummonId = {
  Justice: 2030081000,
  HangedMan: 2030085000,
  Death: 2030089000,
  Temperance: 2030093000,
  Devil: 2030097000,
  Tower: 2030101000,
  Star: 2030105000,
  Moon: 2030109000,
  Sun: 2030113000,
  Judgement: 2030117000
};

const SSRSummonId = {
  Justice: 2040313000,
  HangedMan: 2040314000,
  Death: 2040315000,
  Temperance: 2040316000,
  Devil: 2040317000,
  Tower: 2040318000,
  Star: 2040319000,
  Moon: 2040320000,
  Sun: 2040321000,
  Judgement: 2040322000
};

const SR0Summon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraStone, 2, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(summonToElement[name]), 3, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 2, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.FlawlessPrism, 100));
  list.push(makeMaterial(treasures.MagnaIOmegaAnima(element), 30));
  // Router returns an array of materials
  list.push(...HazeRouter(element, 1));
  list.push(...VerumProofRouter(element, 6));

  return makeItem(SRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const SR1Summon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraStone, 5, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 5, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 3, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.RainbowPrism, 100));
  list.push(makeMaterial(treasures.Quartz(element), 100, ArcarumPriorities.OTHER));

  list.push(...HazeRouter(element, 3));
  list.push(...VerumProofRouter(element, 16));

  return makeItem(SRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const SR2Summon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraStone, 10, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 10, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 5, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.SummonIAnima(element), 30));

  list.push(...HazeRouter(element, 7));
  list.push(...VerumProofRouter(element, 30));

  return makeItem(SRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const SR3Summon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraStone, 15, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 15, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 7, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.LegendaryMerit, 3));
  list.push(makeMaterial(treasures.SummonIIAnima(element), 30));

  list.push(...HazeRouter(element, 16));
  list.push(...VerumProofRouter(element, 50));

  return makeItem(SRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const SSR3Summon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraStone, 30, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 30, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 15, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.SilverCentrum, 5, ArcarumPriorities.OTHER));
  list.push(makeMaterial(treasures.SunlightStone, 1, ArcarumPriorities.RARE));

  list.push(...HazeRouter(element, 24));
  list.push(...VerumProofRouter(element, 80));
  list.push(...PrimarchAnimaRouter(element, 20));

  return makeItem(SSRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const SSR4Summon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SephiraStone, 45, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 45, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 25, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.MagnaIIOmegaAnima(element), 10, ArcarumPriorities.OTHER));

  list.push(...HazeRouter(element, 32));
  list.push(...VerumProofRouter(element, 120));
  list.push(...ArcarumFragmentRouter(name, 10));

  return makeItem(SSRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const SSR5Summon = name => {
  let element = summonToElement[name];
  let list = [];

  list.push(makeMaterial(treasures.CoopShowdownItem(element), 100));
  list.push(makeMaterial(treasures.GenesisFragment, 80));
  list.push(makeMaterial(treasures.PrimevalHorn, 10));

  list.push(...ArcarumFragmentRouter(name, 20));
  list.push(...VerumProofRouter(element, 250));
  list.push(...TrialFragmentRouter(element, 50));
  list.push(...WorldMaterialRouter(name, 50));

  return makeItem(SSRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

const Evoker = name => {
  let element = summonToElement[name];
  let list = [];

  list.push(makeMaterial(treasures.SephiraEvolite, 1, ArcarumPriorities.RARE));
  list.push(makeMaterial(treasures.SephiraStone, 30, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 22, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 206, ArcarumPriorities.IMPORTANT));
  list.push(...HazeRouter(element, 3));
  list.push(...VerumProofRouter(element, 20));

  return makeItem(SSRSummonId[name], name, "summon", {isCrafted:true, craftMaterials:list});
};

export const summonFactory = (name, step) => {
  switch(step) {
    case UNOBTAINED:
    case SR0:
      return SR0Summon(name);
    case SR1:
      return SR1Summon(name);
    case SR2:
      return SR2Summon(name);
    case SR3:
      return SR3Summon(name);
    case SSR3:
      return SSR3Summon(name);
    case SSR4:
      return SSR4Summon(name);
    case SSR5:
      return SSR5Summon(name);
    case EVOKER:
      return Evoker(name);
    default:
      console.log("Wrong step for summon ", name);
  }
};

export const resolveSummons = (plans) => {
  let targets = [];
  plans.forEach(plan => {
    let {name, current, target} = plan;
    Array.from({length: target - current}, (_, i) => i+current+1).forEach(i => {
      targets.push(makeMaterial(summonFactory(name, i),1));
    });
  });
  let virtual_target = makeItem(-1, "fake", "", {isCrafted:true, craftMaterials:targets});
  return resolveMaterials(makeMaterial(virtual_target, 1));
};
