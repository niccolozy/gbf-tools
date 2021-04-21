import * as treasures from "../../utils/Items/treasures";
import { makeMaterial, makeItem, resolveMaterials } from "../../utils/Items/Item";
import { 
  VerumProofRouter,
  LusterRouter,
  HazeRouter,
  ArcarumFragmentRouter
} from "./arcarumMaterialRouter";
import { ArcarumPriorities } from "./arcarumCosts"

const UNLOCK0 = 0;
const UNLOCK1 = 1;
const UNLOCK2 = 2;
const UNLOCK3 = 3;
const UNLOCK4 = 4;

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

const EvokerId = {
    Justice: "3040160000_01",
    HangedMan: "3040164000_01",
    Death: "3040169000_01",
    Temperance: "3040163000_01",
    Devil: "3040161000_01",
    Tower: "3040165000_01",
    Star: "3040162000_01",
    Moon: "3040168000_01",
    Sun: "3040167000_01",
    Judgement: "3040166000_01"
  };

const Domain1 = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.GenesisFragment, 30));
  list.push(makeMaterial(treasures.SephiraStone, 5, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...VerumProofRouter(element, 120));
  list.push(...HazeRouter(element, 20));
  return makeItem(EvokerId[name], name, "npc", {isCrafted:true, craftMaterials:list});
};

const Domain2 = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.Urn(element), 30));
  list.push(makeMaterial(treasures.Astra(element), 30, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.SephiraStone, 10, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...VerumProofRouter(element, 240));
  list.push(...HazeRouter(element, 30));
  
  return makeItem(EvokerId[name], name, "npc", {isCrafted:true, craftMaterials:list});
};

const Domain3 = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.MagnaIIOmegaAnima(element), 10));
  list.push(makeMaterial(treasures.Veritas(name), 30, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 40, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 40, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.SephiraStone, 15, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...ArcarumFragmentRouter(name, 10));
  
  return makeItem(EvokerId[name], name, "npc", {isCrafted:true, craftMaterials:list});
};

const Domain4 = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.SixDragonDropItem(element), 30));
  list.push(makeMaterial(treasures.Veritas(name), 50, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Astra(element), 40, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 70, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.SephiraStone, 20, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...LusterRouter(element, 20));
  list.push(...ArcarumFragmentRouter(name, 20));

  return makeItem(EvokerId[name], name, "npc", {isCrafted:true, craftMaterials:list});
  };

export const domainFactory = (name, step) => {
  if (typeof step === "undefined")
    step = 0;
  switch(step) {
    case UNLOCK0:
    case UNLOCK1:
      return Domain1(name);
    case UNLOCK2:
      return Domain2(name);
    case UNLOCK3:
      return Domain3(name);
    case UNLOCK4:
      return Domain4(name);
    default:
      console.log("Wrong step for evoker domain ", name, step);
  }
};

export const resolveDomain = (plans) => {
  let targets = [];
  plans.forEach(plan => {
    let {name, current, target} = plan;
    Array.from({length: target - current}, (_, i) => i+current+1).forEach(i => {
      targets.push(makeMaterial(domainFactory(name, i),1));
    });
  });
  let virtual_target = makeItem(null, "fake", "", {isCrafted:true, craftMaterials:targets});
  return resolveMaterials(makeMaterial(virtual_target, 1));
};