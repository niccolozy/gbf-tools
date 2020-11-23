import { makeItem, makeMaterial } from "../../utils/Items/Item";
import * as World from "../../utils/Items/treasures/World"; 
import * as Uncap from "../../utils/Items/treasures/Uncap"; 
import * as Primal from "../../utils/Items/treasures/Primal"; 
import { makeFullMetalJacket, makePiercer } from "./RifleBullet";
import { makeIronBullet } from "./ParabellumBullet";

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

const StrikeShell = makeItem(
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


const StrikeShellII = makeItem(
  30202,
  "Strike Shell II",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.ProsperityFlame, 10),
      makeMaterial(World.ExplosiveMaterial, 20),
      makeMaterial(World.BlisteringOre, 16),
      makeMaterial(StrikeShell, 1)
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

const GuardBreaker = makeItem(
  30901,
  "Guard Breaker",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.SteelLiquid, 10),
      makeMaterial(World.ProsperityFlame, 20),
      makeMaterial(makePiercer(2, 5)),
      makeMaterial(makePiercer(1, 5))
    ]
  }
);


const GuardBreakerII = makeItem(
  30902,
  "Guard Breaker II",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.SteelLiquid, 24),
      makeMaterial(World.ExplosiveMaterial, 20),
      makeMaterial(GuardBreaker, 1)
    ]
  }
);

const SlugShot = makeItem(
  31001,
  "Slug Shot",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.SteelLiquid, 20),
      makeMaterial(World.ProsperityFlame, 20),
      makeMaterial(makeFullMetalJacket(3, 5)),
      makeMaterial(makeIronBullet(3, 5))
    ]
  }
);


const SlugShotII = makeItem(
  31002,
  "Slug Shot II",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.SteelLiquid, 70),
      makeMaterial(World.ExplosiveMaterial, 20),
      makeMaterial(SlugShot, 1)
    ]
  }
);


const StickyShell = makeItem(
  31101,
  "Sticky Shell",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.SteelLiquid, 10),
      makeMaterial(World.CorrodedCartridge, 8),
      makeMaterial(makePiercer(2, 5)),
      makeMaterial(makePiercer(1, 5))
    ]
  }
);


const StickyShellII = makeItem(
  31102,
  "Sticky Shell II",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.SteelLiquid, 20),
      makeMaterial(World.CorrodedCartridge, 15),
      makeMaterial(StickyShell, 10)
    ]
  }
);

const ChaserShell = makeItem(
  31201,
  "Chaser Shell",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.BrokenTeacup, 10),
      makeMaterial(World.RawGemstone, 10),
      makeMaterial(Primal.MaliceFragment, 5),
      makeShotshell(5, 2)
    ]
  }
);

const EnhancingShell = makeItem(
  31301,
  "Enhancing Shell",
  "bullet", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.JumboBeastBone, 10),
      makeMaterial(World.TranslucentSilk, 10),
      makeMaterial(Primal.MaliceFragment, 5),
      makeShotshell(5, 2)
    ]
  }
);