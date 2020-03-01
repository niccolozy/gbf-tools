import * as matImg from "../../assets/materials";
export { matImg };

const makeMaterial = (name, icon, type, quantity) => {
  return { name: name, icon: icon, type: type, quantity: quantity };
};

export const SephiraStone = quantity => {
  return makeMaterial(
    "Sephira Stone",
    matImg.Arcarum.Sephira_Stone,
    "important",
    quantity
  );
};

export const SephiraEvolite = quantity => {
  return makeMaterial(
    "Sephira Evolite",
    matImg.Arcarum.Sephira_Evolite,
    "important",
    quantity
  );
};

export const FlawlessPrism = quantity => {
  return makeMaterial(
    "Flawless Prism",
    matImg.Other.Flawless_Prism,
    "other",
    quantity
  );
};

export const RainbowPrism = quantity => {
  return makeMaterial(
    "Rainbow Prism",
    matImg.Other.Rainbow_Prism,
    "other",
    quantity
  );
};

export const LegendaryMerit = quantity => {
  return makeMaterial(
    "Legendary Merit",
    matImg.Other.Legendary_Merit,
    "other",
    quantity
  );
};

export const SilverCentrum = quantity => {
  return makeMaterial(
    "Silver Centrum",
    matImg.Other.Silver_Centrum,
    "raid",
    quantity
  );
};

export const SunlightStone = quantity => {
  return makeMaterial(
    "Sunlight Stone",
    matImg.Other.Sunlight_Stone,
    "important",
    quantity
  );
};

export const GenesisFragment = quantity => {
  return makeMaterial(
    "Genesis Fragment",
    matImg.Other.Genesis_Fragment,
    "raid",
    quantity
  );
};

export const PrimevalHorn = quantity => {
  return makeMaterial(
    "Primeval Horn",
    matImg.Other.Primeval_Horn,
    "raid",
    quantity
  );
};

export const Astra = (element, quantity) => {
  let elementTable = {
    fire: { name: "Flameborne Astra", icon: matImg.Arcarum.Flameborne_Astra },
    water: { name: "Aquaborne Astra", icon: matImg.Arcarum.Aquaborne_Astra },
    earth: { name: "Earthborne Astra", icon: matImg.Arcarum.Earthborne_Astra },
    wind: { name: "Windborne Astra", icon: matImg.Arcarum.Windborne_Astra },
    light: { name: "Lightborne Astra", icon: matImg.Arcarum.Lightborne_Astra },
    dark: { name: "Darkborne Astra", icon: matImg.Arcarum.Darkborne_Astra }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "astra",
    quantity
  );
};

export const Idean = (summon, quantity) => {
  let summonTable = {
    Justice: { name: "Justice Idean", icon: matImg.Arcarum.Justice_Idean },
    HangedMan: {
      name: "Hanged Man Idean",
      icon: matImg.Arcarum.Hanged_Man_Idean
    },
    Death: { name: "Death Idean", icon: matImg.Arcarum.Death_Idean },
    Temperance: {
      name: "Temperance Idean",
      icon: matImg.Arcarum.Temperance_Idean
    },
    Devil: { name: "Devil Idean", icon: matImg.Arcarum.Devil_Idean },
    Tower: { name: "Tower Idean", icon: matImg.Arcarum.Tower_Idean },
    Star: { name: "Star Idean", icon: matImg.Arcarum.Star_Idean },
    Moon: { name: "Moon Idean", icon: matImg.Arcarum.Moon_Idean },
    Sun: { name: "Sun Idean", icon: matImg.Arcarum.Sun_Idean },
    Judgement: { name: "Judgement Idean", icon: matImg.Arcarum.Judgement_Idean }
  };

  return makeMaterial(
    summonTable[summon].name,
    summonTable[summon].icon,
    "idean",
    quantity
  );
};

export const VerumProof = (element, quantity) => {
  let elementTable = {
    fire: { name: "Fire Verum Proof", icon: matImg.Arcarum.Fire_Verum_Proof },
    water: {
      name: "Water Verum Proof",
      icon: matImg.Arcarum.Water_Verum_Proof
    },
    earth: {
      name: "Earth Verum Proof",
      icon: matImg.Arcarum.Earth_Verum_Proof
    },
    wind: { name: "Wind Verum Proof", icon: matImg.Arcarum.Wind_Verum_Proof }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "arcarum",
    quantity
  );
};

export const Haze = (element, quantity) => {
  let elementTable = {
    light: { name: "Aurora Haze", icon: matImg.Arcarum.Aurora_Haze },
    dark: { name: "Chaotic Haze", icon: matImg.Arcarum.Chaotic_Haze }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "arcarum",
    quantity
  );
};

export const ArcarumFragment = (element, quantity) => {
  let elementTable = {
    red: { name: "Aquila Fragment", icon: matImg.Arcarum.Aquila_Fragment },
    green: {
      name: "Bellator Fragment",
      icon: matImg.Arcarum.Bellator_Fragment
    },
    blue: { name: "Celsus Fragment", icon: matImg.Arcarum.Celsus_Fragment }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "arcarum",
    quantity
  );
};

export const OmegaIAnima = (element, quantity) => {
  let elementTable = {
    fire: {
      name: "Colossus Omega Anima",
      icon: matImg.Anima.Celeste_Omega_Anima
    },
    water: {
      name: "Leviathan Omega Anima",
      icon: matImg.Anima.Leviathan_Omega_Anima
    },
    earth: {
      name: "Yggdrasil Omega Anima",
      icon: matImg.Anima.Yggdrasil_Omega_Anima
    },
    wind: { name: "Tiamat Omega Anima", icon: matImg.Anima.Tiamat_Omega_Anima },
    light: {
      name: "Luminiera Omega Anima",
      icon: matImg.Anima.Luminiera_Omega_Anima
    },
    dark: {
      name: "Celeste Omega Anima",
      icon: matImg.Anima.Celeste_Omega_Anima
    }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "raid",
    quantity
  );
};

export const OmegaIIAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Shiva Omega Anima", icon: matImg.Anima.Shiva_Omega_Anima },
    water: {
      name: "Europa Omega Anima",
      icon: matImg.Anima.Europa_Omega_Anima
    },
    earth: {
      name: "Alexiel Omega Anima",
      icon: matImg.Anima.Alexiel_Omega_Anima
    },
    wind: {
      name: "Grimnir Omega Anima",
      icon: matImg.Anima.Grimnir_Omega_Anima
    },
    light: {
      name: "Metatron Omega Anima",
      icon: matImg.Anima.Metatron_Omega_Anima
    },
    dark: { name: "Avatar Omega Anima", icon: matImg.Anima.Avatar_Omega_Anima }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "raid",
    quantity
  );
};

export const Quartz = (element, quantity) => {
  let elementTable = {
    fire: { name: "Fire Quartz", icon: matImg.Quartz.Fire_Quartz },
    water: { name: "Water Quartz", icon: matImg.Quartz.Water_Quartz },
    earth: { name: "Earth Quartz", icon: matImg.Quartz.Earth_Quartz },
    wind: { name: "Wind Quartz", icon: matImg.Quartz.Wind_Quartz },
    light: { name: "Light Quartz", icon: matImg.Quartz.Light_Quartz },
    dark: { name: "Dark Quartz", icon: matImg.Quartz.Dark_Quartz }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "other",
    quantity
  );
};

export const SummonIAnima = (element, quantity) => {
  let elementTable = {
    fire: {
      name: "Twin Elements Anima",
      icon: matImg.Anima.Twin_Elements_Anima
    },
    water: {
      name: "Macula Marius Anima",
      icon: matImg.Anima.Macula_Marius_Anima
    },
    earth: { name: "Medusa Anima", icon: matImg.Anima.Medusa_Anima },
    wind: { name: "Nezha Anima", icon: matImg.Anima.Nezha_Anima },
    light: { name: "Apollo Anima", icon: matImg.Anima.Apollo_Anima },
    dark: {
      name: "Dark Angel Olivia Anima",
      icon: matImg.Anima.Dark_Angel_Olivia_Anima
    }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "raid",
    quantity
  );
};

export const SummonIIAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Athena Anima", icon: matImg.Anima.Athena_Anima },
    water: { name: "Grani Anima", icon: matImg.Anima.Grani_Anima },
    earth: { name: "Baal Anima", icon: matImg.Anima.Baal_Anima },
    wind: { name: "Garuda Anima", icon: matImg.Anima.Garuda_Anima },
    light: { name: "Odin Anima", icon: matImg.Anima.Odin_Anima },
    dark: { name: "Lich Anima", icon: matImg.Anima.Lich_Anima }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "raid",
    quantity
  );
};

export const PrimarchAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Michael Anima", icon: matImg.Anima.Michael_Anima },
    water: { name: "Gabriel Anima", icon: matImg.Anima.Gabriel_Anima },
    earth: { name: "Uriel Anima", icon: matImg.Anima.Uriel_Anima },
    wind: { name: "Raphael Anima", icon: matImg.Anima.Raphael_Anima }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "raid",
    quantity
  );
};

export const CoopShowdownItem = (element, quantity) => {
  let elementTable = {
    fire: { name: "Infernal Garnet", icon: matImg.Coop.Infernal_Garnet },
    water: { name: "Frozen Hell Prism", icon: matImg.Coop.Frozen_Hell_Prism },
    earth: { name: "Evil Judge Crystal", icon: matImg.Coop.Evil_Judge_Crystal },
    wind: { name: "Horseman's Plate", icon: matImg.Coop.Horseman_Plate },
    light: { name: "Halo Light Quartz", icon: matImg.Coop.Halo_Light_Quartz },
    dark: { name: "Phantom Demon Jewel", icon: matImg.Coop.Phantom_Demon_Jewel }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "coop",
    quantity
  );
};

export const TrialFragment = (element, quantity) => {
  let elementTable = {
    fire: { name: "Hellfire Fragment", icon: matImg.Other.Hellfire_Fragment },
    water: { name: "Deluge Fragment", icon: matImg.Other.Deluge_Fragment },
    earth: {
      name: "Wasteland Fragment",
      icon: matImg.Other.Wasteland_Fragment
    },
    wind: { name: "Typhoon Fragment", icon: matImg.Other.Typhoon_Fragment }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "other",
    quantity
  );
};

export const QuestMaterial = (element, quantity) => {
  let elementTable = {
    Justice: { name: "Toxic Tulip", icon: matImg.Quest.Toxic_Tulip },
    HangedMan: { name: "Bestia Fruit", icon: matImg.Quest.Bestia_Fruit },
    Death: { name: "Jumbo Beast Bone", icon: matImg.Quest.Jumbo_Beast_Bone },
    Temperance: { name: "Kluger Herb", icon: matImg.Quest.Kluger_Herb },
    Devil: { name: "Rhem Pepper", icon: matImg.Quest.Rhem_Pepper },
    Tower: { name: "Broken Teacup", icon: matImg.Quest.Broken_Teacup },
    Star: { name: "Rusty Eave", icon: matImg.Quest.Rusty_Eave },
    Moon: { name: "Translucent Silk", icon: matImg.Quest.Translucent_Silk },
    Sun: { name: "Meditative Sutra", icon: matImg.Quest.Meditative_Sutra },
    Judgement: { name: "Dusty Book", icon: matImg.Quest.Dusty_Book }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    "other",
    quantity
  );
};
