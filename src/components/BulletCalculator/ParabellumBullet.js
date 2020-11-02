import { makeItem, makeMaterial } from "../../utils/Items/Item";
import * as World from "../../utils/Items/treasures/World"; 
import * as Uncap from "../../utils/Items/treasures/Uncap"; 
import * as Primal from "../../utils/Items/treasures/Primal"; 

const IronBullet = makeItem(
  10101,
  "Iron Bullet",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.IronCluster, 2),
      makeMaterial(World.BlisteringOre, 2)
    ]
  }
);

const IronBulletII = makeItem(
  10102,
  "Iron Bullet II",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeMaterial(World.IronCluster, 5),
      makeMaterial(World.BlisteringOre, 5),
      makeMaterial(IronBullet, 1)
    ]
  }
);

const IronBulletIII = makeItem(
  10103,
  "Iron Bullet III",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeMaterial(World.IronCluster, 12),
      makeMaterial(World.BlisteringOre, 8),
      makeMaterial(IronBulletII, 2),
      makeMaterial(World.UntamedFlame, 5)
    ]
  }
);

const IronBulletIV = makeItem(
  10104,
  "Iron Bullet IV",
  "bullet/s", {
    isCrafted:  true,
    craftMaterials: [
      makeMaterial(World.IronCluster, 25),
      makeMaterial(World.BlisteringOre, 20),
      makeMaterial(IronBulletIII, 5),
      makeMaterial(World.ProsperityFlame, 20)
    ]
  }
);

const IronBulletV = makeItem(
  10105,
  "Iron Bullet V",
  "bullet/s", {
    isCrafted:  true,
    craftMaterials: [
      makeMaterial(World.Ironluster, 40),
      makeMaterial(World.BlisteringOre, 30),
      makeMaterial(IronBulletIV, 3),
      makeMaterial(IronBulletIII, 22)
    ]
  }
);

export const makeIronBullet = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(IronBullet, quantity);
    case 2:
      return makeMaterial(IronBulletII, quantity);
    case 3:
      return makeMaterial(IronBulletIII, quantity);
    case 4:
      return makeMaterial(IronBulletIV, quantity);
    case 5:
      return makeMaterial(IronBulletV, quantity);
    default:
      throw new Error("Wrong bullet level for IronBullet ", level);
  }
};

const RapidBullet = makeItem(
  10201,
  "Rapid Bullet",
  "bullet/s", { 
    isCrafted: true, 
    craftMaterials: [
      makeMaterial(World.IronCluster, 2),
      makeMaterial(World.ProsperityFlame, 2),
      makeMaterial(World.SteelLiquid, 3)
    ]
  }
);

const RapidBulletII = makeItem(
  10202,
  "Rapid Bullet II",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeMaterial(World.IronCluster, 4),
      makeMaterial(World.ProsperityFlame, 4),
      makeMaterial(World.SteelLiquid, 7),
      makeMaterial(RapidBullet, 1)
    ]
  }
);

const RapidBulletIII = makeItem(
  10203,
  "Rapid Bullet III",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeMaterial(World.IronCluster, 20),
      makeMaterial(World.ProsperityFlame, 20),
      makeMaterial(World.SteelLiquid, 20),
      makeMaterial(RapidBulletII, 2)
    ]
  }
);

const RapidBulletIV = makeItem(
  10204,
  "Rapid Bullet IV",
  "bullet/s", {
    isCrafted:  true,
    craftMaterials: [
      makeMaterial(World.IronCluster, 30),
      makeMaterial(World.ProsperityFlame, 30),
      makeMaterial(World.SteelLiquid, 30),
      makeMaterial(RapidBulletIII, 25)
    ]
  }
);

export const makeRapidBullet = (level, quantity) => {
  switch (level) {
    case 1:
      return makeMaterial(RapidBullet, quantity);
    case 2:
      return makeMaterial(RapidBulletII, quantity);
    case 3:
      return makeMaterial(RapidBulletIII, quantity);
    case 4:
      return makeMaterial(RapidBulletIV, quantity);
    default:
      throw new Error("Wrong bullet level for RapidBullet ", level);
  }
};

export const FlameBullet = makeItem(
  10301,
  "Flame Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeIronBullet(1, 5),
      makeMaterial(Uncap.FireOrb, 10),
      makeMaterial(Uncap.InfernalWhorl, 7),
      makeMaterial(World.ProsperityFlame, 5)
    ]
  }
);

export const PoisonBullet = makeItem(
  10401,
  "Poison Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeIronBullet(1, 5),
      makeMaterial(Uncap.WaterOrb, 10),
      makeMaterial(Uncap.TidalWhorl, 7),
      makeMaterial(World.ProsperityFlame, 5)
    ]
  }
);

export const SleepBullet = makeItem(
  10501,
  "Sleep Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeIronBullet(1, 5),
      makeMaterial(Uncap.WindOrb, 10),
      makeMaterial(Uncap.TempestWhorl, 7),
      makeMaterial(World.ProsperityFlame, 5)
    ]
  }
);

export const ShieldBullet = makeItem(
  10601,
  "Shield Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeRapidBullet(2, 3),
      makeMaterial(Uncap.RadiantWhorl, 20),
      makeMaterial(World.HollowSoul, 10),
      makeMaterial(World.ProsperityFlame, 10)
    ]
  }
);

export const CharmdBullet = makeItem(
  10701,
  "Charm Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeIronBullet(1, 5),
      makeMaterial(Uncap.EarthOrb, 10),
      makeMaterial(Uncap.SeismicWhorl, 7),
      makeMaterial(World.CorrodedCartridge, 2)
    ]
  }
);

export const ParalyzeBullet = makeItem(
  10801,
  "Paralyze Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeIronBullet(5, 1),
      makeRapidBullet(4, 1),
      makeMaterial(Primal.PrimevalHorn, 2),
      makeMaterial(World.BastionBlock, 5)
    ]
  }
);

export const HealingBullet = makeItem(
  10901,
  "Healing Bullet",
  "bullet/s", {
    isCrafted: true,
    craftMaterials: [
      makeIronBullet(5, 1),
      makeRapidBullet(4, 1),
      makeMaterial(Primal.SilverCentrum, 2),
      makeMaterial(World.BastionBlock, 5)
    ]
  }
);