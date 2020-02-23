const arcarumMaterials = [
  "Sephira Stone",
  "Astra",
  "Idean",
  "Verum Proof",
  "Haze",
  "Arcarum Fragment",
  "Sephira Evolite"
];

const otherMaterials = [
  "Basic Omega Anima",
  "Flawless Prism",
  "Quartz",
  "Rainbow Prism",
  "Tier 1 Summon Anima",
  "Legendary Merit",
  "Tier 2 Summon Anima",
  "Silver Centrum",
  "Sunlight Stone",
  "Primarch Anima",
  "Omega II Omega Anima",
  "Co-op Rotating Showdown Item",
  "Trial Fragment",
  "Genesis Fragment",
  "Primeval Horn"
];

class Material {
  constructor(name, icon, quantity) {
    this.name = name;
    this.icon = icon;
    this.quantity = quantity;
  }
}

const makeMaterial = (name, icon, quantity) => {
  return { name: name, icon: icon, quantity: quantity };
};

export const SephiraStone = quantity => {
  return makeMaterial("Sephira Stone", null, quantity);
};

export const SephiraEvolite = quantity => {
  return makeMaterial("Sephira Evolite", null, quantity);
};

export const FlawlessPrism = quantity => {
  return makeMaterial("Flawless Prism", null, quantity);
};

export const RainbowPrism = quantity => {
  return makeMaterial("Rainbow Prism", null, quantity);
};

export const LegendaryMerit = quantity => {
  return makeMaterial("Legendary Merit", null, quantity);
};

export const SilverCentrum = quantity => {
  return makeMaterial("Silver Centrum", null, quantity);
};

export const SunlightStone = quantity => {
  return makeMaterial("Sunlight Stone", null, quantity);
};

export const GenesisFragment = quantity => {
  return makeMaterial("Genesis Fragment", null, quantity);
};

export const PrimevalHorn = quantity => {
  return makeMaterial("Primeval Horn", null, quantity);
};

export const Astra = (element, quantity) => {
  let elementTable = {
    fire: { name: "Flameborne Astra", icon: null },
    water: { name: "Aquaborne Astra", icon: null },
    earth: { name: "Earthborne Astra", icon: null },
    wind: { name: "Windborne Astra", icon: null },
    light: { name: "Lightborne Astra", icon: null },
    dark: { name: "Darkborne Astra", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const Idean = (summon, quantity) => {
  let summonTable = {
    Justice: { name: "Justice Idean", icon: null },
    HangedMan: { name: "Hanged Man Idean", icon: null },
    Death: { name: "Death Idean", icon: null },
    Temperance: { name: "Temperance Idean", icon: null },
    Devil: { name: "Devil Idean", icon: null },
    Tower: { name: "Tower Idean", icon: null },
    Star: { name: "Star Idean", icon: null },
    Moon: { name: "Moon Idean", icon: null },
    Sun: { name: "Sun Idean", icon: null },
    Judgement: { name: "Judgement Idean", icon: null }
  };

  return makeMaterial(
    summonTable[summon].name,
    summonTable[summon].icon,
    quantity
  );
};

export const VerumProof = (element, quantity) => {
  let elementTable = {
    fire: { name: "Fire Verum Proof", icon: null },
    water: { name: "Water Verum Proof", icon: null },
    earth: { name: "Earth Verum Proof", icon: null },
    wind: { name: "Wind Verum Proof", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const Haze = (element, quantity) => {
  let elementTable = {
    light: { name: "Aurora Haze", icon: null },
    dark: { name: "Chaotic Haze", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const ArcarumFragment = (element, quantity) => {
  let elementTable = {
    red: { name: "Aquila Fragment", icon: null },
    green: { name: "Bellator Fragment", icon: null },
    blue: { name: "Celsus Fragment", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const OmegaIAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Colossus Omega Anima", icon: null },
    water: { name: "Leviathan Omega Anima", icon: null },
    earth: { name: "Yggdrasil Omega Anima", icon: null },
    wind: { name: "Tiamat Omega Anima", icon: null },
    light: { name: "Luminiera Omega Anima", icon: null },
    dark: { name: "Celeste Omega Anima", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const OmegaIIAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Shiva Omega Anima", icon: null },
    water: { name: "Europa Omega Anima", icon: null },
    earth: { name: "Alexiel Omega Anima", icon: null },
    wind: { name: "Grimnir Omega Anima", icon: null },
    light: { name: "Metatron Omega Anima", icon: null },
    dark: { name: "Avatar Omega Anima", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const Quartz = (element, quantity) => {
  let elementTable = {
    fire: { name: "Fire Quartz", icon: null },
    water: { name: "Water Quartz", icon: null },
    earth: { name: "Earth Quartz", icon: null },
    wind: { name: "Wind Quartz", icon: null },
    light: { name: "Light Quartz", icon: null },
    dark: { name: "Dark Quartz", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const SummonIAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Twin Elements Anima", icon: null },
    water: { name: "Macula Marius Anima", icon: null },
    earth: { name: "Medusa Anima", icon: null },
    wind: { name: "Nezha Anima", icon: null },
    light: { name: "Apollo Anima", icon: null },
    dark: { name: "Dark Angel Olivia Anima", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const SummonIIAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Athena Anima", icon: null },
    water: { name: "Grani Anima", icon: null },
    earth: { name: "Baal Anima", icon: null },
    wind: { name: "Garuda Anima", icon: null },
    light: { name: "Odin Anima", icon: null },
    dark: { name: "Lich Anima", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const PrimarchAnima = (element, quantity) => {
  let elementTable = {
    fire: { name: "Michael Anima", icon: null },
    water: { name: "Gabriel Anima", icon: null },
    earth: { name: "Uriel Anima", icon: null },
    wind: { name: "Raphael Anima", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const CoopShowdownItem = (element, quantity) => {
  let elementTable = {
    fire: { name: "Infernal Garnet", icon: null },
    water: { name: "Frozen Hell Prism", icon: null },
    earth: { name: "Evil Judge Crystal", icon: null },
    wind: { name: "Horseman's Plate", icon: null },
    light: { name: "Halo Light Quartz", icon: null },
    dark: { name: "Phantom Demon Jewel", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const TrialFragment = (element, quantity) => {
  let elementTable = {
    fire: { name: "Hellfire Fragment", icon: null },
    water: { name: "Deluge Fragment", icon: null },
    earth: { name: "Wasteland Fragment", icon: null },
    wind: { name: "Typhoon Fragment", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};

export const QuestMaterial = (element, quantity) => {
  let elementTable = {
    Justice: { name: "Toxic Tulip", icon: null },
    HangedMan: { name: "Bestia Fruit", icon: null },
    Death: { name: "Jumbo Beast Bone", icon: null },
    Temperance: { name: "Kluger Herb", icon: null },
    Devil: { name: "Rhem Pepper", icon: null },
    Tower: { name: "Broken Teacup", icon: null },
    Star: { name: "Rusty Eave", icon: null },
    Moon: { name: "Translucent Silk", icon: null },
    Sun: { name: "Meditative Sutra", icon: null },
    Judgement: { name: "Dusty Book", icon: null }
  };

  return makeMaterial(
    elementTable[element].name,
    elementTable[element].icon,
    quantity
  );
};
