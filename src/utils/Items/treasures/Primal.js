import {makeItem, makeMaterial} from "../Item";
import {Quartz} from "./Uncap";

export const PrimevalHorn = makeItem(79, "Primeval Horn", "item");

export const SilverCentrum = makeItem(107, "Silver Centrum", "item");

export const MaliceFragment = makeItem(533, "Malice Fragment", "item");
export const GenesisFragment = makeItem(535, "Genesis Fragment", "item");
export const Meteorite = makeItem(137, "Meteorite", "item");

// Magna I Omega Anima
const TiamatOmegaAnima = makeItem(18, "Tiamat Omega Anima", "item");
const ColossusOmegaAnima = makeItem(19, "Colossus Omega Anima", "item");
const LeviathanOmegaAnima = makeItem(20, "Leviathan Omega Anima", "item");
const YggdrasilOmegaAnima = makeItem(21, "Yggdrasil Omega Anima", "item");
const LuminieraOmegaAnima = makeItem(26, "Luminiera Omega Anima", "item");
const CelesteOmegaAnima = makeItem(31, "Celeste Omega Anima", "item");
export const MagnaIOmegaAnima = element => {
  switch (element) {
    case "fire":
      return ColossusOmegaAnima;
    case "water":
      return LeviathanOmegaAnima;
    case "earth":
      return YggdrasilOmegaAnima;
    case "wind":
      return TiamatOmegaAnima;
    case "light":
      return LuminieraOmegaAnima;
    case "dark":
      return CelesteOmegaAnima;
    default:
      console.log(`Wrong element for Magna I Omega Anima: ${element}`);
  }
};

// True Anima
const TrueFireAnima = makeItem(41, "True Fire Anima", "item");
const TrueWaterAnima = makeItem(42, "True Water Anima", "item");
const TrueEarthAnima = makeItem(43, "True Earth Anima", "item");
const TrueWindAnima = makeItem(44, "True Wind Anima", "item");
const TrueLightAnima = makeItem(45, "True Light Anima", "item");
const TrueDarkAnima = makeItem(46, "True Dark Anima", "item");
export const TrueAnima = element => {
  switch (element) {
    case "fire":
      return TrueFireAnima;
    case "water":
      return TrueWaterAnima;
    case "earth":
      return TrueEarthAnima;
    case "wind":
      return TrueWindAnima;
    case "light":
      return TrueLightAnima;
    case "dark":
      return TrueDarkAnima;
    default:
      console.log(`Wrong element for True Anima: ${element}`);
  }
};

const ResoluteReactor = makeItem(47, "Resolute Reactor", "item");
const FannedFin = makeItem(48, "Fanned Fin", "item");
const GenesisBud = makeItem(49, "Genesis Bud", "item");
const GreenDragonEye = makeItem(32, "Green Dragon Eye", "item");
const PrimalBit = makeItem(50, "Primal Bit", "item");
const BlackFogSphere = makeItem(51, "Black Fog Sphere", "item");
export const MagnaIDropItem = element => {
  switch (element) {
    case "fire":
      return ResoluteReactor;
    case "water":
      return FannedFin;
    case "earth":
      return GenesisBud;
    case "wind":
      return GreenDragonEye;
    case "light":
      return PrimalBit;
    case "dark":
      return BlackFogSphere;
    default:
      console.log(`Wrong element for Magna I Drop Item: ${element}`);
  }
};

// Summon I Anima
const TwinElementsAnima = makeItem(64, "Twin Elements Anima", "item");
const MaculaMariusAnima = makeItem(60, "Macula Marius Anima", "item");
const MedusaAnima = makeItem(62, "Medusa Anima", "item");
const NezhaAnima = makeItem(65, "Nezha Anima", "item");
const ApolloAnima = makeItem(66, "Apollo Anima", "item");
const DarkAngelOliviaAnima = makeItem(63, "Dark Angel Olivia Anima", "item");
export const SummonIAnima = element => {
  switch (element) {
    case "fire":
      return TwinElementsAnima;
    case "water":
      return MaculaMariusAnima;
    case "earth":
      return MedusaAnima;
    case "wind":
      return NezhaAnima;
    case "light":
      return ApolloAnima;
    case "dark":
      return DarkAngelOliviaAnima;
    default:
      console.log(`Wrong element for Summon I Anima: ${element}`);
  }
};

// Summon II Anima
const AthenaAnima = makeItem(85, "Athena Anima", "item");
const GraniAnima = makeItem(68, "Grani Anima", "item");
const BaalAnima = makeItem(87, "Baal Anima", "item");
const GarudaAnima = makeItem(92, "Garuda Anima", "item");
const OdinAnima = makeItem(67, "Odin Anima", "item");
const LichAnima = makeItem(72, "Lich Anima", "item");
export const SummonIIAnima = element => {
  switch (element) {
    case "fire":
      return AthenaAnima;
    case "water":
      return GraniAnima;
    case "earth":
      return BaalAnima;
    case "wind":
      return GarudaAnima;
    case "light":
      return OdinAnima;
    case "dark":
      return LichAnima;
    default:
      console.log(`Wrong element for Summon II Anima: ${element}`);
  }
};

// Primarch Anima
const MichaelAnima = makeItem(506, "Michael Anima", "item");
const GabrielAnima = makeItem(507, "Gabriel Anima", "item");
const UrielAnima = makeItem(508, "Uriel Anima", "item");
const RaphaelAnima = makeItem(509, "Raphael Anima", "item");
export const PrimarchAnima = element => {
  switch (element) {
    case "fire":
      return MichaelAnima;
    case "water":
      return GabrielAnima;
    case "earth":
      return UrielAnima;
    case "wind":
      return RaphaelAnima;
    default:
      console.log(`Wrong element for Primarch Anima: ${element}`);
  }
};

// Magna II Anima
const ShivaAnima = makeItem(510, "Shiva Anima", "item");
const EuropaAnima = makeItem(512, "Europa Anima", "item");
const AlexielAnima = makeItem(514, "Alexiel Anima", "item");
const GrimnirAnima = makeItem(516, "Grimnir Anima", "item");
const MetatronAnima = makeItem(518, "Metatron Anima", "item");
const AvatarAnima = makeItem(520, "Avatar Anima", "item");
export const MagnaIIAnima = element => {
  switch (element) {
    case "fire":
      return ShivaAnima;
    case "water":
      return EuropaAnima;
    case "earth":
      return AlexielAnima;
    case "wind":
      return GrimnirAnima;
    case "light":
      return MetatronAnima;
    case "dark":
      return AvatarAnima;
    default:
      console.log(`Wrong element for Magna II Anima: ${element}`);
  }
};

// Magna II Omega Anima
const ShivaOmegaAnima = makeItem(511, "Shiva Omega Anima", "item", {isBuyable:true, exchangeMaterials:[makeMaterial(ShivaAnima, 10), makeMaterial(Quartz("fire"), 30)]});
const EuropaOmegaAnima = makeItem(513, "Europa Omega Anima", "item", {isBuyable:true, exchangeMaterials:[makeMaterial(EuropaAnima, 10), makeMaterial(Quartz("water"), 30)]});
const AlexielOmegaAnima = makeItem(515, "Alexiel Omega Anima", "item", {isBuyable:true, exchangeMaterials:[makeMaterial(AlexielAnima, 10), makeMaterial(Quartz("earth"), 30)]});
const GrimnirOmegaAnima = makeItem(517, "Grimnir Omega Anima", "item", {isBuyable:true, exchangeMaterials:[makeMaterial(GrimnirAnima, 10), makeMaterial(Quartz("wind"), 30)]});
const MetatronOmegaAnima = makeItem(519, "Metatron Omega Anima", "item", {isBuyable:true, exchangeMaterials:[makeMaterial(MetatronAnima, 10), makeMaterial(Quartz("light"), 30)]});
const AvatarOmegaAnima = makeItem(521, "Avatar Omega Anima", "item", {isBuyable:true, exchangeMaterials:[makeMaterial(AvatarAnima, 10), makeMaterial(Quartz("dark"), 30)]});
export const MagnaIIOmegaAnima = element => {
  switch (element) {
    case "fire":
      return ShivaOmegaAnima;
    case "water":
      return EuropaOmegaAnima;
    case "earth":
      return AlexielOmegaAnima;
    case "wind":
      return GrimnirOmegaAnima;
    case "light":
      return MetatronOmegaAnima;
    case "dark":
      return AvatarOmegaAnima;
    default:
      console.log(`Wrong element for Magna II Omega Anima: ${element}`);
  }
};

