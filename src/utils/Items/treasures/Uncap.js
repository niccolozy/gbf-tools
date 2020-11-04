import {makeItem} from "../Item";

// Low Orbs
export const FireOrb = makeItem(1011, "Fire Orb", "item");
export const WaterOrb = makeItem(1021, "Water Orb", "item");
export const EarthOrb = makeItem(1031, "Earth Orb", "item");
export const WindOrb = makeItem(1041, "Wind Orb", "item");
export const LightOrb = makeItem(1051, "Light Orb", "item");
export const DarkOrb = makeItem(1061, "Dark Orb", "item");
export const LowOrb = element => {
  switch (element) {
    case "fire":
      return FireOrb;
    case "water":
      return WaterOrb;
    case "earth":
      return EarthOrb;
    case "wind":
      return WindOrb;
    case "light":
      return LightOrb;
    case "dark":
      return DarkOrb;
    default:
      console.log(`Wrong element for Low Orbs: ${element}`);
  }
};

// High Orbs
export const InfernoOrb = makeItem(1012, "Inferno Orb", "item");
export const FrostOrb = makeItem(1022, "Frost Orb", "item");
export const RumblingOrb = makeItem(1032, "Rumbling Orb", "item");
export const CycloneOrb = makeItem(1042, "Cyclone Orb", "item");
export const ShiningOrb = makeItem(1052, "Shining Orb", "item");
export const AbysmOrb = makeItem(1062, "Abysm Orb", "item");
export const HighOrb = element => {
  switch (element) {
    case "fire":
      return InfernoOrb;
    case "water":
      return FrostOrb;
    case "earth":
      return RumblingOrb;
    case "wind":
      return CycloneOrb;
    case "light":
      return ShiningOrb;
    case "dark":
      return AbysmOrb;
    default:
      console.log(`Wrong element for High Orbs: ${element}`);
  }
};

export const FlawedPrism = makeItem(1202, "Flawed Prism", "item");
export const FlawlessPrism = makeItem(1203, "Flawless Prism", "item");
export const RainbowPrism = makeItem(1204, "Rainbow Prism", "item");

// Whorl
export const InfernalWhorl = makeItem(1313, "Infernal Whorl", "item");
export const TidalWhorl = makeItem(1323, "Tidal Whorl", "item");
export const SeismicWhorl = makeItem(1333, "Seismic Whorl", "item");
export const TempestWhorl = makeItem(1343, "Tempest Whorl", "item");
export const RadiantWhorl = makeItem(1353, "Radiant Whorl", "item");
export const UmbralWhorl = makeItem(1363, "Umbral Whorl", "item");
export const Whorl = element => {
  switch (element) {
    case "fire":
      return InfernalWhorl;
    case "water":
      return TidalWhorl;
    case "earth":
      return SeismicWhorl;
    case "wind":
      return TempestWhorl;
    case "light":
      return RadiantWhorl;
    case "dark":
      return UmbralWhorl;
    default:
      console.log(`Wrong element for Whorl: ${element}`);
  }
};

// Dragon Scale
const RedDragonScale = makeItem(1111, "Red Dragon Scale", "item");
const BlueDragonScale = makeItem(1121, "Blue Dragon Scale", "item");
const BrownDragonScale = makeItem(1131, "Brown Dragon Scale", "item");
const GreenDragonScale = makeItem(1141, "Green Dragon Scale", "item");
const WhiteDragonScale = makeItem(1151, "White Dragon Scale", "item");
const BlackDragonScale = makeItem(1161, "Black Dragon Scale", "item");
export const DragonScale = element => {
  switch (element) {
    case "fire":
      return RedDragonScale;
    case "water":
      return BlueDragonScale;
    case "earth":
      return BrownDragonScale;
    case "wind":
      return GreenDragonScale;
    case "light":
      return WhiteDragonScale;
    case "dark":
      return BlackDragonScale;
    default:
      console.log(`Wrong element for Dragon Scale: ${element}`);
  }
};

export const LegendaryMerit = makeItem(2003, "Legendary Merit", "item");

// Quartz
const FireQuartz = makeItem(5011, "Fire Quartz", "item");
const WaterQuartz = makeItem(5021, "Water Quartz", "item");
const EarthQuartz = makeItem(5031, "Earth Quartz", "item");
const WindQuartz = makeItem(5041, "Wind Quartz", "item");
const LightQuartz = makeItem(5051, "Light Quartz", "item");
const DarkQuartz = makeItem(5061, "Dark Quartz", "item");
export const Quartz = element => {
  switch (element) {
    case "fire":
      return FireQuartz;
    case "water":
      return WaterQuartz;
    case "earth":
      return EarthQuartz;
    case "wind":
      return WindQuartz;
    case "light":
      return LightQuartz;
    case "dark":
      return DarkQuartz;
    default:
      console.log(`Wrong element for Quartz: ${element}`);
  }
};

// Trial Fragment
const HellfireFragment = makeItem(5111, "Hellfire Fragment", "item");
const DelugeFragment = makeItem(5121, "Deluge Fragment", "item");
const WastelandFragment = makeItem(5131, "Wasteland Fragment", "item");
const TyphoonFragment = makeItem(5141, "Typhoon Fragment", "item");
export const TrialFragment = element => {
  switch (element) {
    case "fire":
      return HellfireFragment;
    case "water":
      return DelugeFragment;
    case "earth":
      return WastelandFragment;
    case "wind":
      return TyphoonFragment;
    default:
      console.log(`Wrong element for Trial Fragment: ${element}`);
  }
};

export const SephiraStone = makeItem(25000, "Sephira Stone", "item");

// Astra
const FlameborneAstra = makeItem(25001, "Flameborne Astra", "item");
const AquaborneAstra = makeItem(25002, "Aquaborne Astra", "item");
const EarthborneAstra = makeItem(25003, "Earthborne Astra", "item");
const WindborneAstra = makeItem(25004, "Windborne Astra", "item");
const LightborneAstra = makeItem(25005, "Lightborne Astra", "item");
const DarkborneAstra = makeItem(25006, "Darkborne Astra", "item");
export const Astra = element => {
  switch (element) {
    case "fire":
      return FlameborneAstra;
    case "water":
      return AquaborneAstra;
    case "earth":
      return EarthborneAstra;
    case "wind":
      return WindborneAstra;
    case "light":
      return LightborneAstra;
    case "dark":
      return DarkborneAstra;
    default:
      console.log(`Wrong element for Astra: ${element}`);
  }
};

// Idean
const JusticeIdean = makeItem(25007, "Justice Idean", "item");
const HangedManIdean = makeItem(25008, "Hanged Man Idean", "item");
const DeathIdean = makeItem(25009, "Death Idean", "item");
const TemperanceIdean = makeItem(25010, "Temperance Idean", "item");
const DevilIdean = makeItem(25011, "Devil Idean", "item");
const TowerIdean = makeItem(25012, "Tower Idean", "item");
const StarIdean = makeItem(25013, "Star Idean", "item");
const MoonIdean = makeItem(25014, "Moon Idean", "item");
const SunIdean = makeItem(25015, "Sun Idean", "item");
const JudgementIdean = makeItem(25016, "Judgement Idean", "item");
export const Idean = summon => {
  switch (summon) {
    case "Justice":
      return JusticeIdean;
    case "HangedMan":
      return HangedManIdean;
    case "Death":
      return DeathIdean;
    case "Temperance":
      return TemperanceIdean;
    case "Devil":
      return DevilIdean;
    case "Tower":
      return TowerIdean;
    case "Star":
      return StarIdean;
    case "Moon":
      return MoonIdean;
    case "Sun":
      return SunIdean;
    case "Judgement":
      return JudgementIdean;
    default:
      console.log(`Wrong summon for Idean: ${summon}`);
  }
};

// Haze
export const AuroraHaze = makeItem(25020, "Aurora Haze", "item");
export const ChaoticHaze = makeItem(25021, "Chaotic Haze", "item");

// Verum Proof
const FireVerumProof = makeItem(25023, "Fire Verum Proof", "item");
const WaterVerumProof = makeItem(25024, "Water Verum Proof", "item");
const EarthVerumProof = makeItem(25025, "Earth Verum Proof", "item");
const WindVerumProof = makeItem(25026, "Wind Verum Proof", "item");
export const VerumProof = element => {
  switch (element) {
    case "fire":
      return FireVerumProof;
    case "water":
      return WaterVerumProof;
    case "earth":
      return EarthVerumProof;
    case "wind":
      return WindVerumProof;
    default:
      console.log(`Wrong element for Verum Proof: ${element}`);
  }
};

// Arcarum Fragment
export const AquilaFragment = makeItem(25033, "Aquila Fragment", "item");
export const BellatorFragment = makeItem(25034, "Bellator Fragment", "item");
export const CelsusFragment = makeItem(25035, "Celsus Fragment", "item");

export const SephiraEvolite = makeItem(25036, "Sephira Evolite", "item");