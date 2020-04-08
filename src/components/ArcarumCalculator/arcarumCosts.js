import * as materials from "./materials";
// const UNOBTAINED = 0;
const SR0 = 1;
const SR1 = 2;
const SR2 = 3;
const SR3 = 4;
const SSR3 = 5;
const SSR4 = 6;
const SSR5 = 7;
const EVOKER = 8;

const summonToElement = {
  Justice: "water",
  HangedMan: "earth",
  Death: "dark",
  Temperance: "wind",
  Devil: "fire",
  Tower: "earth",
  Star: "light",
  Moon: "water",
  Sun: "fire",
  Judgement: "wind"
};

function getElementForHaze(element) {
  if (["fire", "wind", "light"].includes(element)) return "light";
  else return "dark";
}

function getElementForFragment(summon) {
  if (["HangedMan", "Devil", "Sun"].includes(summon)) return "red";
  else if (["Justice", "Moon", "Judgement"].includes(summon)) return "green";
  else return "blue";
}

function makeCostDict(costList) {
  let dict = {};
  costList.forEach(material => {
    if (dict[material.type]) {
      dict[material.type].push(material);
    } else {
      dict[material.type] = [];
      dict[material.type].push(material);
    }
  });
  return dict;
}

const stepCost = {
  [SR0]: (summon, element) => {
    let costList = [
      materials.SephiraStone(2),
      materials.Astra(element, 3),
      materials.Idean(summon, 2),
      materials.Haze(getElementForHaze(element), 1),
      materials.FlawlessPrism(100),
      materials.OmegaIAnima(element, 30)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 3));
      costList.push(materials.VerumProof("wind", 3));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 3));
      costList.push(materials.VerumProof("earth", 3));
    } else {
      costList.push(materials.VerumProof(element, 6));
    }
    return makeCostDict(costList);
  },

  [SR1]: (summon, element) => {
    let costList = [
      materials.SephiraStone(5),
      materials.Astra(element, 5),
      materials.Idean(summon, 3),
      materials.Haze(getElementForHaze(element), 3),
      materials.RainbowPrism(100),
      materials.Quartz(element, 100)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 8));
      costList.push(materials.VerumProof("wind", 8));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 8));
      costList.push(materials.VerumProof("earth", 8));
    } else {
      costList.push(materials.VerumProof(element, 16));
    }
    return makeCostDict(costList);
  },

  [SR2]: (summon, element) => {
    let costList = [
      materials.SephiraStone(10),
      materials.Astra(element, 10),
      materials.Idean(summon, 5),
      materials.Haze(getElementForHaze(element), 7),
      materials.SummonIAnima(element, 30)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 15));
      costList.push(materials.VerumProof("wind", 15));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 15));
      costList.push(materials.VerumProof("earth", 15));
    } else {
      costList.push(materials.VerumProof(element, 30));
    }
    return makeCostDict(costList);
  },

  [SR3]: (summon, element) => {
    let costList = [
      materials.SephiraStone(15),
      materials.Astra(element, 15),
      materials.Idean(summon, 7),
      materials.Haze(getElementForHaze(element), 16),
      materials.LegendaryMerit(3),
      materials.SummonIIAnima(element, 30)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 25));
      costList.push(materials.VerumProof("wind", 25));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 25));
      costList.push(materials.VerumProof("earth", 25));
    } else {
      costList.push(materials.VerumProof(element, 50));
    }
    return makeCostDict(costList);
  },

  [SSR3]: (summon, element) => {
    let costList = [
      materials.SephiraStone(30),
      materials.Astra(element, 30),
      materials.Idean(summon, 15),
      materials.Haze(getElementForHaze(element), 24),
      materials.SilverCentrum(5),
      materials.SunlightStone(1)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 40));
      costList.push(materials.VerumProof("wind", 40));
      costList.push(materials.PrimarchAnima("fire", 10));
      costList.push(materials.PrimarchAnima("wind", 10));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 40));
      costList.push(materials.VerumProof("earth", 40));
      costList.push(materials.PrimarchAnima("water", 10));
      costList.push(materials.PrimarchAnima("earth", 10));
    } else {
      costList.push(materials.VerumProof(element, 80));
      costList.push(materials.PrimarchAnima(element, 20));
    }
    return makeCostDict(costList);
  },

  [SSR4]: (summon, element) => {
    let costList = [
      materials.SephiraStone(45),
      materials.Astra(element, 45),
      materials.Idean(summon, 25),
      materials.Haze(getElementForHaze(element), 32),
      materials.ArcarumFragment(getElementForFragment(summon), 10),
      materials.OmegaIIAnima(element, 10)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 60));
      costList.push(materials.VerumProof("wind", 60));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 60));
      costList.push(materials.VerumProof("earth", 60));
    } else {
      costList.push(materials.VerumProof(element, 120));
    }
    return makeCostDict(costList);
  },

  [SSR5]: (summon, element) => {
    let costList = [
      materials.ArcarumFragment(getElementForFragment(summon), 20),
      materials.CoopShowdownItem(element, 100),
      materials.GenesisFragment(80),
      materials.PrimevalHorn(10),
      materials.QuestMaterial(summon, 50)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      costList.push(materials.VerumProof("fire", 125));
      costList.push(materials.VerumProof("wind", 125));
      costList.push(materials.TrialFragment("fire", 25));
      costList.push(materials.TrialFragment("wind", 25));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 125));
      costList.push(materials.VerumProof("earth", 125));
      costList.push(materials.TrialFragment("water", 25));
      costList.push(materials.TrialFragment("earth", 25));
    } else {
      costList.push(materials.VerumProof(element, 250));
      costList.push(materials.TrialFragment(element, 50));
    }
    return makeCostDict(costList);
  },

  [EVOKER]: (summon, element) => {
    let costList = [
      materials.SephiraEvolite(1),
      materials.SephiraStone(30),
      materials.Idean(summon, 22),
      materials.Astra(element, 206),
      materials.Haze(getElementForHaze(element), 3)
    ];

    if (element === "light") {
      costList.push(materials.VerumProof("fire", 10));
      costList.push(materials.VerumProof("wind", 10));
    } else if (element === "dark") {
      costList.push(materials.VerumProof("water", 10));
      costList.push(materials.VerumProof("earth", 10));
    } else {
      costList.push(materials.VerumProof(element, 20));
    }

    return makeCostDict(costList);
  }
};

export const aggregateStepCost = (summon, currentStep, targetStep) => {
  let totalCost = {};

  for (let step = currentStep + 1; step <= targetStep; step++) {
    let cost = stepCost[step](summon, summonToElement[summon]);
    Object.entries(cost).forEach(([type, list]) => {
      if (!totalCost[type]) {
        totalCost[type] = {};
      }
      list.forEach(mat => {
        if (totalCost[type][mat.name]) {
          totalCost[type][mat.name].quantity += mat.quantity;
        } else {
          totalCost[type][mat.name] = mat;
        }
      });
    });
  }
  return totalCost;
};

export const aggregateSummonCost = plans => {
  let totalCost = {};
  Object.entries(plans).map(([summon, plan]) => {
    let cost = aggregateStepCost(summon, plan.current, plan.target);
    Object.entries(cost).forEach(([type, list]) => {
      if (!totalCost[type]) {
        totalCost[type] = {};
      }
      Object.entries(list).forEach(([name, mat]) => {
        if (totalCost[type][mat.name]) {
          totalCost[type][mat.name].quantity += mat.quantity;
        } else {
          totalCost[type][mat.name] = mat;
        }
      });
      return;
    });
  });
  return totalCost;
};
