import * as treasures from "../../utils/Items/treasures";
import { makeMaterial, makeItem, resolveMaterials } from "../../utils/Items/Item";
import { 
  VerumProofRouter,
  LusterRouter
} from "./arcarumMaterialRouter";
import { ArcarumPriorities } from "./arcarumCosts"

const UNOBTAINED = 0;
const SSR0 = 1;
const SSR1 = 2;
const SSR2 = 3;
const SSR3 = 4;

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

const WeaponId = {
    Justice: 1040020800,
    HangedMan: 1040215500,
    Death: 1040113200,
    Temperance: 1040418200,
    Devil: 1040614300,
    Tower: 1040313500,
    Star: 1040513700,
    Moon: 1040710700,
    Sun: 1040912600,
    Judgement: 1040813300
  };

const SSR0Weapon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.NewWorldQuartz, 5, ArcarumPriorities.RARE));
  list.push(makeMaterial(treasures.Veritas(name), 20, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  let lusterNum = 5;
  if (name === "Death" || name === "Star") {
    lusterNum = 6;
  }
  list.push(...LusterRouter(element, lusterNum));
  
  return makeItem(WeaponId[name], name, "weapon", {isCrafted:true, craftMaterials:list});
};

const SSR1Weapon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.NewWorldQuartz, 5, ArcarumPriorities.RARE));
  list.push(makeMaterial(treasures.Veritas(name), 70, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.MaliceFragment, 30));
  list.push(makeMaterial(treasures.Astra(summonToElement[name]), 30, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...LusterRouter(element, 15));
  list.push(...VerumProofRouter(element, 100));
  
  return makeItem(WeaponId[name], name, "weapon", {isCrafted:true, craftMaterials:list});
};

const SSR2Weapon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.NewWorldQuartz, 10, ArcarumPriorities.RARE));
  list.push(makeMaterial(treasures.Veritas(name), 100, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.VerdantAzurite, 20));
  list.push(makeMaterial(treasures.Astra(summonToElement[name]), 50, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 30, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...LusterRouter(element, 30));
  list.push(...VerumProofRouter(element, 150));
  
  return makeItem(WeaponId[name], name, "weapon", {isCrafted:true, craftMaterials:list});
};

const SSR3Weapon = name => {
  let element = summonToElement[name];
  let list = [];
  list.push(makeMaterial(treasures.NewWorldQuartz, 20, ArcarumPriorities.RARE));
  list.push(makeMaterial(treasures.Veritas(name), 130, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.SixDragonJewel(summonToElement[name]), 20));
  list.push(makeMaterial(treasures.Astra(summonToElement[name]), 100, ArcarumPriorities.IMPORTANT));
  list.push(makeMaterial(treasures.Idean(name), 70, ArcarumPriorities.IMPORTANT));
  // Router returns an array of materials
  list.push(...LusterRouter(element, 50));
  list.push(...VerumProofRouter(element, 200));

  return makeItem(WeaponId[name], name, "weapon", {isCrafted:true, craftMaterials:list});
  };

export const weaponFactory = (name, step) => {
  if (typeof step === "undefined")
    step = 0;
  switch(step) {
    case UNOBTAINED:
    case SSR0:
      return SSR0Weapon(name);
    case SSR1:
      return SSR1Weapon(name);
    case SSR2:
      return SSR2Weapon(name);
    case SSR3:
      return SSR3Weapon(name);
    default:
      console.log("Wrong step for weapon ", name, step);
  }
};

export const resolveWeapons = (plans) => {
  let targets = [];
  plans.forEach(plan => {
    let {name, weaponCurrent, weaponTarget} = plan;
    Array.from({length: weaponTarget - weaponCurrent}, (_, i) => i+weaponCurrent+1).forEach(i => {
      targets.push(makeMaterial(weaponFactory(name, i),1));
    });
  });
  let virtual_target = makeItem(-1, "fake", "", {isCrafted:true, craftMaterials:targets});
  return resolveMaterials(makeMaterial(virtual_target, 1));
};