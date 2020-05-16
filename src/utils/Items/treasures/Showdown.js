import {makeItem} from "../Item";

// Anima
const IfritAnima = makeItem(10018, "Ifrit Anima", "item/article/s");
const CocytusAnima = makeItem(10005, "Cocytus Anima", "item/article/s");
const VohuManahAnima = makeItem(10011, "Vohu Manah Anima", "item/article/s");
const SagittariusAnima = makeItem(10027, "Sagittarius Anima", "item/article/s");
const CorowAnima = makeItem(10046, "Corow Anima", "item/article/s");
const DiabloAnima = makeItem(10065, "Diablo Anima", "item/article/s");
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
const InfernalGarnet = makeItem(20611, "Infernal Garnet", "item/article/s");
const FrozenHellPrism = makeItem(20621, "Frozen Hell Prism", "item/article/s");
const EvilJudgeCrystal = makeItem(20631, "Evil Judge Crystal", "item/article/s");
const HorsemansPlate = makeItem(20641, "Horseman's Plate", "item/article/s");
const HaloLightQuartz = makeItem(20651, "Halo Light Quartz", "item/article/s");
const PhantomDemonJewel = makeItem(20661, "Phantom Demon Jewel", "item/article/s");
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