import { tokenPerBox, ratioHonorToToken, mobInfo } from "./constants.js";

function getTokenForBox(boxIndex) {
  if (boxIndex < 5) {
    return tokenPerBox[boxIndex - 1];
  } else if (boxIndex < 45) {
    return tokenPerBox[4];
  } else if (boxIndex === 45) {
    return tokenPerBox[5];
  } else if (boxIndex < 81) {
    return tokenPerBox[6];
  } else {
    return tokenPerBox[7];
  }
}

function getTotalTokenToBox(boxIndex) {
  let total = 0;
  for (let box = 1; box <= boxIndex; box++) {
    total += getTokenForBox(box);
  }
  return total;
}

function getIncomeForMob(mob, incomeType) {
  switch (incomeType) {
    case "soloHonor":
      return mob.soloHonor;
    case "soloToken":
      return (
        mob.hostToken +
        mob.victoryToken +
        mob.mvpToken +
        mob.soloHonor * ratioHonorToToken
      );
    default:
      return 0;
  }
}

function getRequiredSolo(mob, incomeType, target, currentMeat) {
  let result = {};
  result["num"] = Math.ceil(target / getIncomeForMob(mob, incomeType));
  if (result["num"] < 0) {
    result["num"] = 0;
  }
  result["elixir"] = Math.ceil((mob.AP * result["num"]) / 75);
  if (result["elixir"] < 0) {
    result["elixir"] = 0;
  }
  result["meat"] = result["num"] * mob.meat > 0 ? result["num"] * mob.meat : 0;
  result["hasEnoughMeat"] = currentMeat >= result["meat"];

  return result;
}

function getRequiredSoloWithMeatRefill(
  mobMeat,
  mobHell,
  incomeType,
  target,
  currentMeat
) {
  let result = {};
  result["numMeat"] = Math.ceil(
    (target -
      (currentMeat / mobHell.meat) * getIncomeForMob(mobHell, incomeType)) /
      (getIncomeForMob(mobMeat, incomeType) +
        (mobMeat.meatGain / mobHell.meat) *
          getIncomeForMob(mobHell, incomeType))
  );
  if (result["numMeat"] < 0) {
    result["numMeat"] = 0;
  }
  result["numHell"] =
    result["numMeat"] > 0
      ? Math.floor(
          (currentMeat + result["numMeat"] * mobMeat.meatGain) / mobHell.meat
        )
      : Math.ceil(target / getIncomeForMob(mobHell, incomeType));
  if (result["numHell"] < 0) {
    result["numHell"] = 0;
  }
  result["elixirMeat"] = Math.ceil((mobMeat.AP * result["numMeat"]) / 75);
  result["elixirHell"] = Math.ceil((mobHell.AP * result["numHell"]) / 75);
  if (result["elixirMeat"] < 0) {
    result["elixirMeat"] = 0;
  }
  if (result["elixirHell"] < 0) {
    result["elixirHell"] = 0;
  }
  return result;
}

function getProgressForIncome(data, incomeType) {
  let progress = {};
  let rest = 0;
  switch (incomeType) {
    case "soloHonor":
      progress = {
        total: data.targetHonor,
        completed: data.currentHonor
      };
      rest = progress.total - progress.completed;
      break;
    case "soloToken":
      progress = {
        total: getTotalTokenToBox(data.targetBox),
        completed: {
          fromDrop: data.currentToken + getTotalTokenToBox(data.drewBox),
          fromHonor: Math.floor(data.currentHonor * ratioHonorToToken)
        }
      };
      rest =
        progress.total -
        progress.completed.fromDrop -
        progress.completed.fromHonor;
      break;
    default:
  }
  return [progress, rest];
}

export function calculateNeededSolo(data, incomeType) {
  let [progress, target] = getProgressForIncome(data, incomeType);

  let neededSolos = {};
  for (let mob of Object.keys(mobInfo)) {
    neededSolos[mob] = getRequiredSolo(
      mobInfo[mob],
      incomeType,
      target,
      data.currentMeat
    );
  }
  return [progress, neededSolos];
}

export function calculateNeededSoloWithMeatRefill(data, incomeType) {
  let [progress, target] = getProgressForIncome(data, incomeType);
  let neededSolos = {};

  let estimation = getRequiredSoloWithMeatRefill(
    mobInfo[data.meatChoice],
    mobInfo[data.soloChoice],
    incomeType,
    target,
    data.currentMeat
  );
  console.log(estimation);
  neededSolos[data.meatChoice] = {
    num: estimation.numMeat,
    elixir: estimation.elixirMeat,
    meat: 0
  };
  neededSolos[data.soloChoice] = {
    num: estimation.numHell,
    elixir: estimation.elixirHell,
    meat: estimation.numHell * mobInfo[data.soloChoice].meat
  };

  return [progress, neededSolos];
}
