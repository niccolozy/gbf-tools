import {makeItem} from "../Item";

// Anima
const IfritAnima = makeItem(10018, "Ifrit Anima", "item");
const CocytusAnima = makeItem(10005, "Cocytus Anima", "item");
const VohuManahAnima = makeItem(10011, "Vohu Manah Anima", "item");
const SagittariusAnima = makeItem(10027, "Sagittarius Anima", "item");
const CorowAnima = makeItem(10046, "Corow Anima", "item");
const DiabloAnima = makeItem(10065, "Diablo Anima", "item");
export const Anima = element => {
  switch (element) {
    case "fire":
      return IfritAnima;
    case "water":
      return CocytusAnima;
    case "earth":
      return VohuManahAnima;
    case "wind":
      return SagittariusAnima;
    case "light":
      return CorowAnima;
    case "dark":
      return DiabloAnima;
    default:
      console.log(`Wrong element for anima: ${element}`);
  }
};

// Coop Showdown Item
const InfernalGarnet = makeItem(20611, "Infernal Garnet", "item");
const FrozenHellPrism = makeItem(20621, "Frozen Hell Prism", "item");
const EvilJudgeCrystal = makeItem(20631, "Evil Judge Crystal", "item");
const HorsemansPlate = makeItem(20641, "Horseman's Plate", "item");
const HaloLightQuartz = makeItem(20651, "Halo Light Quartz", "item");
const PhantomDemonJewel = makeItem(20661, "Phantom Demon Jewel", "item");
export const CoopShowdownItem = element => {
  switch (element) {
    case "fire":
      return InfernalGarnet;
    case "water":
      return FrozenHellPrism;
    case "earth":
      return EvilJudgeCrystal;
    case "wind":
      return HorsemansPlate;
    case "light":
      return HaloLightQuartz;
    case "dark":
      return PhantomDemonJewel;
    default:
      console.log(`Wrong element for Coop Showdown Item: ${element}`);
  }
};