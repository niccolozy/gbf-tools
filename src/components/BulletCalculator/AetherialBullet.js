import { makeItem, makeMaterial } from "../../utils/Items/Item";
import * as World from "../../utils/Items/treasures/World"; 
import * as Uncap from "../../utils/Items/treasures/Uncap"; 
import * as Showdown from "../../utils/Items/treasures/Showdown"; 
import * as Primal from "../../utils/Items/treasures/Primal"; 
import { makeFullMetalJacket, makePiercer } from "./RifleBullet";
import { makeIronBullet } from "./ParabellumBullet";

const pointT1Map = {
  fire: {
    id: 40101,
    name:"Ifrit Point"
  },
  water: {
    id: 40201,
    name:"Cocytus Point"
  },
  wind: {
    id: 40301,
    name:"Vohu Manah Point"
  },
  earth: {
    id: 40401,
    name:"Sagittarius Point"
  },
  light: {
    id: 40501,
    name:"Corow Point"
  },
  dark: {
    id: 40601,
    name:"Diablo Point"
  },
};

const AetherialT1 = (element, level) => {
  let materials;
  switch (level) {
    case 1:
      materials = [
        makeMaterial(Uncap.LowOrb(element), 20),
        makeMaterial(Uncap.HighOrb(element), 10),
        makeMaterial(Uncap.Whorl(element), 20),
        makeMaterial(Showdown.Anima(element), 20)
      ]
      break;
    case 2:
      materials = [
        makeMaterial(Uncap.Tome(element), 24),
        makeMaterial(Uncap.Scroll(element), 12),
        makeMaterial(Uncap.DragonScale(element), 16),
        makeMaterial(AetherialT1(element, 1), 2)
      ]
      break;
    case 3:
      materials = [
        makeMaterial(Primal.TrueAnima(element), 20),
        makeMaterial(Uncap.Quartz(element), 10),
        makeMaterial(Uncap.DragonScale(element), 20),
        makeMaterial(AetherialT1(element, 2), 5)
      ]
      break;
    default:
      throw new Error("Wrong bullet level for Aetherial T1 ", level);
  }
  return makeItem(
    pointT1Map[element].id + level - 1,
    pointT1Map[element].name + (level > 1 ? " " + "I".repeat(level-1) : ""),
    "bullet", { 
      isCrafted: true, 
      craftMaterials: materials
    }
  )
}

const pointT2Map = {
  fire: {
    id: 40701,
    name:"Agni Point"
  },
  water: {
    id: 40801,
    name:"Neptune Point"
  },
  wind: {
    id: 40901,
    name:"Titan Point"
  },
  earth: {
    id: 41001,
    name:"Zephyrus Point"
  },
  light: {
    id: 41101,
    name:"Zeus Point"
  },
  dark: {
    id: 41201,
    name:"Hades Point"
  },
};

const AetherialT2 = (element, level) => {
  let materials;
  switch (level) {
    case 1:
      materials = [
        makeMaterial(Uncap.LowOrb(element), 20),
        makeMaterial(Uncap.HighOrb(element), 10),
        makeMaterial(Uncap.Whorl(element), 20),
        makeMaterial(Showdown.Anima(element), 20)
      ]
      break;
    case 2:
      materials = [
        makeMaterial(Uncap.Tome(element), 24),
        makeMaterial(Uncap.Scroll(element), 12),
        makeMaterial(Uncap.DragonScale(element), 16),
        makeMaterial(AetherialT1(element, 1), 2)
      ]
      break;
    case 3:
      materials = [
        makeMaterial(Primal.TrueAnima(element), 20),
        makeMaterial(Uncap.Quartz(element), 10),
        makeMaterial(Uncap.DragonScale(element), 20),
        makeMaterial(AetherialT1(element, 2), 5)
      ]
      break;
    default:
      throw new Error("Wrong bullet level for Aetherial T1 ", level);
  }
  return makeItem(
    pointT2Map[element].id + level - 1,
    pointT2Map[element].name + (level > 1 ? " " + "I".repeat(level-1) : ""),
    "bullet", { 
      isCrafted: true, 
      craftMaterials: materials
    }
  )
}