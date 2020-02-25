import * as materials from "./materials";
const UNOBTAINED = 0;
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
  else if (["Star", "Moon", "Judgement"].includes(summon)) return "green";
  else return "blue";
}

const stepCost = {
  [SR0]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraStone(2),
      new materials.Astra(element, 3),
      new materials.Idean(summon, 2),
      new materials.Haze(getElementForHaze(element), 1)
    ];
    let otherMaterials = [
      new materials.FlawlessPrism(100),
      new materials.OmegaIAnima(element, 30)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 3));
      arcarumMaterials.push(new materials.VerumProof("wind", 3));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 3));
      arcarumMaterials.push(new materials.VerumProof("earth", 3));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 6));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [SR1]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraStone(5),
      new materials.Astra(element, 5),
      new materials.Idean(summon, 3),
      new materials.Haze(getElementForHaze(element), 3)
    ];
    let otherMaterials = [
      new materials.RainbowPrism(100),
      new materials.Quartz(element, 100)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 8));
      arcarumMaterials.push(new materials.VerumProof("wind", 8));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 8));
      arcarumMaterials.push(new materials.VerumProof("earth", 8));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 16));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [SR2]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraStone(10),
      new materials.Astra(element, 10),
      new materials.Idean(summon, 5),
      new materials.Haze(getElementForHaze(element), 7)
    ];
    let otherMaterials = [new materials.SummonIAnima(element, 30)];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 15));
      arcarumMaterials.push(new materials.VerumProof("wind", 15));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 15));
      arcarumMaterials.push(new materials.VerumProof("earth", 15));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 30));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [SR3]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraStone(15),
      new materials.Astra(element, 15),
      new materials.Idean(summon, 7),
      new materials.Haze(getElementForHaze(element), 16)
    ];
    let otherMaterials = [
      new materials.LegendaryMerit(3),
      new materials.SummonIIAnima(element, 30)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 25));
      arcarumMaterials.push(new materials.VerumProof("wind", 25));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 25));
      arcarumMaterials.push(new materials.VerumProof("earth", 25));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 50));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [SSR3]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraStone(30),
      new materials.Astra(element, 30),
      new materials.Idean(summon, 15),
      new materials.Haze(getElementForHaze(element), 24)
    ];
    let otherMaterials = [
      new materials.SilverCentrum(5),
      new materials.SunlightStone(1)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 40));
      arcarumMaterials.push(new materials.VerumProof("wind", 40));
      otherMaterials.push(new materials.PrimarchAnima("fire", 10));
      otherMaterials.push(new materials.PrimarchAnima("wind", 10));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 40));
      arcarumMaterials.push(new materials.VerumProof("earth", 40));
      otherMaterials.push(new materials.PrimarchAnima("water", 10));
      otherMaterials.push(new materials.PrimarchAnima("earth", 10));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 80));
      otherMaterials.push(new materials.PrimarchAnima(element, 20));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [SSR4]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraStone(45),
      new materials.Astra(element, 45),
      new materials.Idean(summon, 25),
      new materials.Haze(getElementForHaze(element), 32),
      new materials.ArcarumFragment(getElementForFragment(summon), 10)
    ];
    let otherMaterials = [new materials.OmegaIIAnima(element, 10)];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 60));
      arcarumMaterials.push(new materials.VerumProof("wind", 60));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 60));
      arcarumMaterials.push(new materials.VerumProof("earth", 60));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 120));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [SSR5]: (summon, element) => {
    let arcarumMaterials = [
      new materials.ArcarumFragment(getElementForFragment(summon), 20)
    ];
    let otherMaterials = [
      new materials.CoopShowdownItem(element, 100),
      new materials.GenesisFragment(80),
      new materials.PrimevalHorn(10),
      new materials.QuestMaterial(summon, 50)
    ];

    //deal with light and dark corner cases
    if (element === "light") {
      arcarumMaterials.push(new materials.VerumProof("fire", 125));
      arcarumMaterials.push(new materials.VerumProof("wind", 125));
      otherMaterials.push(new materials.TrialFragment("fire", 25));
      otherMaterials.push(new materials.TrialFragment("wind", 25));
    } else if (element === "dark") {
      arcarumMaterials.push(new materials.VerumProof("water", 125));
      arcarumMaterials.push(new materials.VerumProof("earth", 125));
      otherMaterials.push(new materials.TrialFragment("water", 25));
      otherMaterials.push(new materials.TrialFragment("earth", 25));
    } else {
      arcarumMaterials.push(new materials.VerumProof(element, 250));
      otherMaterials.push(new materials.TrialFragment(element, 50));
    }
    return { arcarum: arcarumMaterials, other: otherMaterials };
  },

  [EVOKER]: (summon, element) => {
    let arcarumMaterials = [
      new materials.SephiraEvolite(1),
      materials.SephiraStone(30),
      new materials.Idean(summon, 20),
      new materials.Astra(element, 206)
    ];
    let otherMaterials = [];

    return { arcarum: arcarumMaterials, other: otherMaterials };
  }
};

export const aggregateStepCost = (summon, currentStep, targetStep) => {
  let totalArcarum = new Map();
  let totalOther = new Map();

  for (let step = currentStep + 1; step <= targetStep; step++) {
    let cost = stepCost[step](summon, summonToElement[summon]);
    // console.log(cost.arcarum, cost.other);

    cost.arcarum.forEach(mat => {
      if (totalArcarum.has(mat.name)) {
        // console.log(mat, totalArcarum[mat.name]);
        totalArcarum.get(mat.name).quantity += mat.quantity;
      } else {
        totalArcarum.set(mat.name, mat);
      }
    });

    cost.other.forEach(mat => {
      if (totalOther.has(mat.name)) {
        totalOther.get(mat.name).quantity += mat.quantity;
      } else {
        totalOther.set(mat.name, mat);
      }
    });
  }
  return { arcarum: totalArcarum, other: totalOther };
};

export const aggregateSummonCost = plans => {
  let totalArcarum = new Map();
  let totalOther = new Map();

  plans.forEach(plan => {
    let cost = aggregateStepCost(
      plan.summon,
      plan.currentStep,
      plan.targetStep
    );
    cost.arcarum.forEach(mat => {
      if (totalArcarum.has(mat.name)) {
        // console.log(mat, totalArcarum[mat.name]);
        totalArcarum.get(mat.name).quantity += mat.quantity;
      } else {
        totalArcarum.set(mat.name, mat);
      }
    });
    cost.other.forEach(mat => {
      if (totalOther.has(mat.name)) {
        totalOther.get(mat.name).quantity += mat.quantity;
      } else {
        totalOther.set(mat.name, mat);
      }
    });
  });

  return { arcarum: totalArcarum, other: totalOther };
};
