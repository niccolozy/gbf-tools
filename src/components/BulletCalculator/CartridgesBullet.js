import { makeItem, makeMaterial } from "../../utils/Items/Item";
import * as World from "../../utils/Items/treasures/World"; 
import * as Uncap from "../../utils/Items/treasures/Uncap"; 
import * as Primal from "../../utils/Items/treasures/Primal"; 

const Shotshell = makeItem(
  30101,
  "Shotshell",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 4),
      makeMaterial(World.ExplosiveMaterial, 5),
      makeMaterial(World.BlisteringOre, 5)
    ]
  }
);

const ShotshellII = makeItem(
  30102,
  "Shotshell II",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 7),
      makeMaterial(World.ExplosiveMaterial, 5),
      makeMaterial(World.BlisteringOre, 7),
      makeMaterial(Shotshell, 1)
    ]
  }
);

const ShotshellIII = makeItem(
  30103,
  "Shotshell III",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 10),
      makeMaterial(World.ExplosiveMaterial, 10),
      makeMaterial(World.BlisteringOre, 10),
      makeMaterial(ShotshellII, 2)
    ]
  }
);

const ShotshellIV = makeItem(
  30104,
  "Shotshell IV",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 20),
      makeMaterial(World.ExplosiveMaterial, 30),
      makeMaterial(World.BlisteringOre, 20),
      makeMaterial(ShotshellIII, 5)
    ]
  }
);

const ShotshellV = makeItem(
  30105,
  "Shotshell V",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 30),
      makeMaterial(World.ExplosiveMaterial, 40),
      makeMaterial(World.BlisteringOre, 30),
      makeMaterial(ShotshellIV, 5)
    ]
  }
);

export const makeShotshell = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(Shotshell, quantity);
    case 2:
      return makeMaterial(ShotshellII, quantity);
    case 3:
      return makeMaterial(ShotshellIII, quantity);
    case 4:
      return makeMaterial(ShotshellIV, quantity);
    case 5:
      return makeMaterial(ShotshellV, quantity);
    default:
      throw new Error("Wrong bullet level for Shotshell ", level);
  }
};

const StrikeShel = makeItem(
  30201,
  "Strike Shell",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 7),
      makeMaterial(World.ExplosiveMaterial, 15),
      makeMaterial(World.BlisteringOre, 5)
    ]
  }
);


const StrikeShelII = makeItem(
  30202,
  "Strike Shell",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 10),
      makeMaterial(World.ExplosiveMaterial, 20),
      makeMaterial(World.BlisteringOre, 16),
      makeMaterial(StrikeShel, 1)
    ]
  }
);

const cylinderMap = {
  fire: {
    id: 30301,
    name:"Fire Cylinder"
  },
  water: {
    id: 30401,
    name:"Water Cylinder"
  },
  wind: {
    id: 30501,
    name:"Wind Cylinder"
  },
  earth: {
    id: 30601,
    name:"Earth Cylinder"
  },
  light: {
    id: 30701,
    name:"Light Cylinder"
  },
  dark: {
    id: 30801,
    name:"Dark Cylinder"
  },
};

const ElementalCylinder = element => {
  return makeItem(
    cylinderMap[element].id,
    cylinderMap[element].name,
    "bullet", { 
      isCrafted: true, 
      craftMaterials: [
        makeMaterial(World.AntiqueCloth, 2),
        makeMaterial(World.ExplosiveMaterial, 5),
        makeMaterial(Uncap.Whorl(element), 30)
      ]
    }
  );
};


const ElementalCylinderII = element => {
  return makeItem(
    cylinderMap[element].id + 1,
    cylinderMap[element].name + " II",
    "bullet", { 
      isCrafted: true, 
      craftMaterials: [
        makeMaterial(World.AntiqueCloth, 5),
        makeMaterial(World.ExplosiveMaterial, 10),
        makeMaterial(Primal.MagnaIDropItem(element), 5),
        makeMaterial(ElementalCylinder(element), 1)
      ]
    }
  );
}
