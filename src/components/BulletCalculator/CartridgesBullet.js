import { makeItem, makeMaterial } from "../../utils/Items/Item";
import * as World from "../../utils/Items/treasures/World"; 
import * as Uncap from "../../utils/Items/treasures/Uncap"; 
import * as Primal from "../../utils/Items/treasures/Primal"; 

const Shotshell = makeItem(
  30101,
  "Shotshell",
  "bullet/s", { 
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
  "bullet/s", { 
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
  "bullet/s", { 
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
  "bullet/s", { 
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
  "bullet/s", { 
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
  "bullet/s", { 
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
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 10),
      makeMaterial(World.ExplosiveMaterial, 20),
      makeMaterial(World.BlisteringOre, 16),
      makeMaterial(StrikeShel, 1)
    ]
  }
);

// const FireCylinder = makeItem(
//   30301,
//   "Fire Cylinder",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 2),
//       makeMaterial(World.ExplosiveMaterial, 5),
//       makeMaterial(Uncap.InfernalWhorl, 30)
//     ]
//   }
// );

// const FireCylinderII = makeItem(
//   30302,
//   "Fire Cylinder II",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 5),
//       makeMaterial(World.ExplosiveMaterial, 10),
//       makeMaterial(Primal.ResoluteReactor, 5),
//       makeMaterial(FireCylinder, 1)
//     ]
//   }
// );

// const WaterCylinder = makeItem(
//   30401,
//   "Water Cylinder",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 2),
//       makeMaterial(World.ExplosiveMaterial, 5),
//       makeMaterial(Uncap.TidalWhorl, 30)
//     ]
//   }
// );

// const WaterCylinderII = makeItem(
//   30402,
//   "Water Cylinder II",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 5),
//       makeMaterial(World.ExplosiveMaterial, 10),
//       makeMaterial(Primal.FannedFin, 5),
//       makeMaterial(WaterCylinder, 1)
//     ]
//   }
// );

// const EarthCylinder = makeItem(
//   30501,
//   "Earth Cylinder",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 2),
//       makeMaterial(World.ExplosiveMaterial, 5),
//       makeMaterial(Uncap.SeismicWhorl, 30)
//     ]
//   }
// );

// const EarthCylinderII = makeItem(
//   30502,
//   "Earth Cylinder II",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 5),
//       makeMaterial(World.ExplosiveMaterial, 10),
//       makeMaterial(Primal.GenesisBud, 5),
//       makeMaterial(EarthCylinder, 1)
//     ]
//   }
// );

// const WindCylinder = makeItem(
//   30601,
//   "Wind Cylinder",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 2),
//       makeMaterial(World.ExplosiveMaterial, 5),
//       makeMaterial(Uncap.TempestWhorl, 30)
//     ]
//   }
// );

// const WindCylinderII = makeItem(
//   30602,
//   "Wind Cylinder II",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 5),
//       makeMaterial(World.ExplosiveMaterial, 10),
//       makeMaterial(Primal.GreenDragonEye, 5),
//       makeMaterial(WindCylinder, 1)
//     ]
//   }
// );

// const LightCylinder = makeItem(
//   30701,
//   "Light Cylinder",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 2),
//       makeMaterial(World.ExplosiveMaterial, 5),
//       makeMaterial(Uncap.RadiantWhorl, 30)
//     ]
//   }
// );

// const LightCylinderII = makeItem(
//   30702,
//   "Light Cylinder II",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 5),
//       makeMaterial(World.ExplosiveMaterial, 10),
//       makeMaterial(Primal.PrimalBit, 5),
//       makeMaterial(LightCylinder, 1)
//     ]
//   }
// );

// const DarkCylinder = makeItem(
//   30801,
//   "Dark Cylinder",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 2),
//       makeMaterial(World.ExplosiveMaterial, 5),
//       makeMaterial(Uncap.UmbralWhorl, 30)
//     ]
//   }
// );

// const DarkCylinderII = makeItem(
//   30802,
//   "Dark Cylinder II",
//   "bullet/s", { 
//     isCrafted: true, 
//     craftMaterials: [
//       makeMaterial(World.AntiqueCloth, 5),
//       makeMaterial(World.ExplosiveMaterial, 10),
//       makeMaterial(Primal.BlackFogSphere, 5),
//       makeMaterial(DarkCylinder, 1)
//     ]
//   }
// );

// export const makeCylander = (element, level, quantity) => {
//   switch (element) {
//     case "fire":
//       if (level === 1)
//         return makeMaterial(FireCylinder, quantity);
//       else if (level === 2)
//         return makeMaterial(FireCylinderII, quantity);
//       break;
//     case "water":
//       if (level === 1)
//         return makeMaterial(WaterCylinder, quantity);
//       else if (level === 2)
//         return makeMaterial(WaterCylinderII, quantity);
//       break;
//     case "wind":
//       if (level === 1)
//         return makeMaterial(WindCylinder, quantity);
//       else if (level === 2)
//         return makeMaterial(WindCylinderII, quantity);
//       break;
//     case "earth":
//       if (level === 1)
//         return makeMaterial(EarthCylinder, quantity);
//       else if (level === 2)
//         return makeMaterial(EarthCylinderII, quantity);
//       break;
//     case "light":
//       if (level === 1)
//         return makeMaterial(LightCylinder, quantity);
//       else if (level === 2)
//         return makeMaterial(LightCylinderII, quantity);
//       break;
//     case "dark":
//       if (level === 1)
//         return makeMaterial(DarkCylinder, quantity);
//       else if (level === 2)
//         return makeMaterial(DarkCylinderII, quantity);
//       break;
//     default:
//       break;
//   }
//   throw new Error("Wrong type level for Cylander ", element, level);
// };

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
    "bullet/s", { 
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
    "bullet/s", { 
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
