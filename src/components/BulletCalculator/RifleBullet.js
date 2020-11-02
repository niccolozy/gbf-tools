import { makeItem, makeMaterial } from "../../utils/Items/Item";
import * as World from "../../utils/Items/treasures/World"; 
import * as Uncap from "../../utils/Items/treasures/Uncap"; 
import * as Primal from "../../utils/Items/treasures/Primal"; 

const FullMetalJacket = makeItem(
  20101,
  "Full Metal Jacket",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.IronCluster, 3),
      makeMaterial(World.SandBrick, 3),
      makeMaterial(World.CorrodedCartridge, 7),
      makeMaterial(Uncap.RumblingOrb, 2),
    ]
  }
);

const FullMetalJacketII = makeItem(
  20102,
  "Full Metal Jacket II",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacket, 1),
      makeMaterial(World.IronCluster, 7),
      makeMaterial(World.CorrodedCartridge, 10),
      makeMaterial(Uncap.RumblingOrb, 5),
    ]
  }
);

const FullMetalJacketIII = makeItem(
  20103,
  "Full Metal Jacket III",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacketII, 2),
      makeMaterial(World.IronCluster, 12),
      makeMaterial(World.SteelLiquid, 10),
      makeMaterial(World.UntamedFlame, 12),
    ]
  }
);


const FullMetalJacketIV = makeItem(
  20104,
  "Full Metal Jacket IV",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacketIII, 5),
      makeMaterial(World.IronCluster, 25),
      makeMaterial(World.SteelLiquid, 20),
      makeMaterial(World.SandBrick, 25),
    ]
  }
);

const FullMetalJacketV = makeItem(
  20105,
  "Full Metal Jacket V",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacketIV, 5),
      makeMaterial(World.IronCluster, 30),
      makeMaterial(World.SteelLiquid, 25),
      makeMaterial(World.SandBrick, 30),
    ]
  }
);

export const makeFullMetalJacket = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(FullMetalJacket, quantity);
    case 2:
      return makeMaterial(FullMetalJacketII, quantity);
    case 3:
      return makeMaterial(FullMetalJacketIII, quantity);
    case 4:
      return makeMaterial(FullMetalJacketIV, quantity);
    case 5:
      return makeMaterial(FullMetalJacketV, quantity);
    default:
      throw new Error("Wrong bullet level for FullMetalJacket ", level);
  }
};

const Exploder = makeItem(
  20201,
  "Exploder",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacket, 3),
      makeMaterial(World.ExplosiveMaterial, 4),
      makeMaterial(World.FineSandBottle, 7),
      makeMaterial(World.BlisteringOre, 4),
    ]
  }
);

const ExploderII = makeItem(
  20202,
  "Exploder II",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(Exploder, 1),
      makeMaterial(World.ExplosiveMaterial, 8),
      makeMaterial(World.FineSandBottle, 10),
      makeMaterial(World.BlisteringOre, 8),
    ]
  }
);

const ExploderIII = makeItem(
  20203,
  "Exploder III",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(ExploderII, 2),
      makeMaterial(World.ExplosiveMaterial, 8),
      makeMaterial(World.FineSandBottle, 15),
      makeMaterial(World.BlisteringOre, 15),
    ]
  }
);

export const makeExploder = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(Exploder, quantity);
    case 2:
      return makeMaterial(ExploderII, quantity);
    case 3:
      return makeMaterial(ExploderIII, quantity);
    default:
      throw new Error("Wrong bullet level for Exploder ", level);
  }
};

const Piercer = makeItem(
  20301,
  "Piercer",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacketII, 3),
      makeMaterial(World.IronCluster, 5),
      makeMaterial(World.CoarseAlluvium, 5),
      makeMaterial(World.FlyingSprout, 10),
    ]
  }
);

const PiercerII = makeItem(
  20302,
  "Piercer II",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(Piercer, 1),
      makeMaterial(World.IronCluster, 8),
      makeMaterial(World.CoarseAlluvium, 8),
      makeMaterial(World.FlyingSprout, 14),
    ]
  }
);

const PiercerIII = makeItem(
  20303,
  "Piercer III",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(PiercerII, 2),
      makeMaterial(World.IronCluster, 18),
      makeMaterial(World.CoarseAlluvium, 24),
      makeMaterial(World.FlyingSprout, 20),
    ]
  }
);

export const makePiercer = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(Piercer, quantity);
    case 2:
      return makeMaterial(PiercerII, quantity);
    case 3:
      return makeMaterial(PiercerIII, quantity);
    default:
      throw new Error("Wrong bullet level for Piercer ", level);
  }
};

const SilverBullet = makeItem(
  20401,
  "Silver Bullet",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(FullMetalJacketII, 3),
      makeMaterial(Uncap.FlawedPrism, 8),
      makeMaterial(Uncap.SeismicWhorl, 20),
      makeMaterial(World.Lacrimosa, 5),
    ]
  }
);

const SilverBulletII = makeItem(
  20402,
  "Silver Bullet II",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(SilverBullet, 7),
      makeMaterial(Uncap.FlawedPrism, 20),
      makeMaterial(Uncap.SeismicWhorl, 30),
      makeMaterial(World.Lacrimosa, 10),
    ]
  }
);

const SilverBulletIII = makeItem(
  20403,
  "Silver Bullet III",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(SilverBulletII, 10),
      makeMaterial(Uncap.FlawedPrism, 30),
      makeMaterial(Uncap.SeismicWhorl, 40),
      makeMaterial(World.Lacrimosa, 20),
    ]
  }
);

export const makeSilverBullet = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(SilverBullet, quantity);
    case 2:
      return makeMaterial(SilverBulletII, quantity);
    case 3:
      return makeMaterial(SilverBulletIII, quantity);
    default:
      throw new Error("Wrong bullet level for Silver Bullet ", level);
  }
};

const GoldBullet = makeItem(
  20501,
  "Gold Bullet",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(SilverBullet, 10),
      makeMaterial(FullMetalJacketV, 2),
      makeMaterial(Primal.Meteorite, 1),
    ]
  }
);

const GoldBulletII = makeItem(
  20502,
  "Gold Bullet II",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(GoldBullet, 2),
      makeMaterial(World.GraySandstone, 5),
      makeMaterial(Primal.Meteorite, 5),
      makeMaterial(World.RustyEave, 5)
    ]
  }
);

export const makeGoldBullett = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(GoldBullet, quantity);
    case 2:
      return makeMaterial(GoldBulletII, quantity);
    default:
      throw new Error("Wrong bullet level for Gold Bullet ", level);
  }
};

