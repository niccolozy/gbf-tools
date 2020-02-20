import { tokenPerBox, ratioHonorToToken, mobInfo } from "./constants.js";
import { func } from "prop-types";

function getTokenForBox(boxIndex) {
  if (boxIndex < 5) {
    return tokenPerBox[boxIndex - 1];
  } else if (boxIndex < 45) {
    return tokenPerBox[4];
  } else {
    return tokenPerBox[5];
  }
}

function getTotalTokenToBox(boxIndex) {
  let total = 0;
  for (let box = 1; box <= boxIndex; box++) {
    total += getTokenForBox(box);
  }
  return total;
}

function getSoloTokenForMob(mob) {
  return (
    mob.hostToken +
    mob.victoryToken +
    mob.mvpToken +
    mob.soloHonor * ratioHonorToToken
  );
}

function getRequiredSoloForToken(mob, targetToken, currentMeat) {
  let result = {};
  result["num"] = Math.ceil(targetToken / getSoloTokenForMob(mob));
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

function getRequiredSoloForHonor(mob, targetHonor, currentMeat) {
  let result = {};
  result["num"] = Math.ceil(targetHonor / mob.soloHonor);
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

function getRequiredSolo(mob, target, currentMeat, mode = "token") {
  if (mode === "token") {
    return getRequiredSoloForToken(mob, target, currentMeat);
  } else if (mode === "honor") {
    return getRequiredSoloForHonor(mob, target, currentMeat);
  }
}

function getRequiredSoloWithMeatRefillForToken(
  mobMeat,
  mobHell,
  targetToken,
  currentMeat
) {
  let result = {};
  result["numMeat"] = Math.ceil(
    (targetToken - (currentMeat / mobHell.meat) * getSoloTokenForMob(mobHell)) /
      (getSoloTokenForMob(mobMeat) +
        (mobMeat.meatGain / mobHell.meat) * getSoloTokenForMob(mobHell))
  );
  if (result["numMeat"] < 0) {
    result["numMeat"] = 0;
  }
  result["numHell"] =
    result["numMeat"] > 0
      ? Math.floor(
          (currentMeat + result["numMeat"] * mobMeat.meatGain) / mobHell.meat
        )
      : Math.ceil(targetToken / getSoloTokenForMob(mobHell));
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

function getRequiredSoloWithMeatRefillForHonor(
  mobMeat,
  mobHell,
  targetHornor,
  currentMeat
) {
  let result = {};
  result["numMeat"] = Math.ceil(
    (targetHornor - (currentMeat / mobHell.meat) * mobHell.soloHonor) /
      (mobMeat.soloHonor +
        (mobMeat.meatGain / mobHell.meat) * mobHell.soloHonor)
  );
  if (result["numMeat"] < 0) {
    result["numMeat"] = 0;
  }
  result["numHell"] =
    result["numMeat"] > 0
      ? Math.floor(
          (currentMeat + result["numMeat"] * mobMeat.meatGain) / mobHell.meat
        )
      : Math.ceil(targetHornor / mobHell.soloHonor);
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

function getRequiredSoloWithMeatRefill(
  mobMeat,
  mobHell,
  target,
  currentMeat,
  mode = "token"
) {
  if (mode === "token") {
    return getRequiredSoloWithMeatRefillForToken(
      mobMeat,
      mobHell,
      target,
      currentMeat
    );
  } else if (mode === "honor") {
    return getRequiredSoloWithMeatRefillForHonor(
      mobMeat,
      mobHell,
      target,
      currentMeat
    );
  }
}

function calculateProgress(targetBox, drewBox, currentToken, currentHonor) {
  let progress = {
    requiredToken: getTotalTokenToBox(targetBox),
    currentToken: currentToken,
    drewToken: getTotalTokenToBox(drewBox),
    currentTokenFromHonor: Math.floor(currentHonor * ratioHonorToToken)
  };
  return progress;
}

export function calculateNeededSolo(data, mode = "token") {
  let progress = calculateProgress(
    data.targetBox,
    data.drewBox,
    data.currentToken,
    data.currentHonor
  );
  let restToken =
    progress.requiredToken -
    progress.drewToken -
    progress.currentToken -
    progress.currentTokenFromHonor;

  let neededSolos = {};
  for (let mob of Object.keys(mobInfo)) {
    neededSolos[mob] = getRequiredSolo(
      mobInfo[mob],
      restToken,
      data.currentMeat,
      mode
    );
  }
  return [progress, neededSolos];
}

export function calculateNeededSoloForHonor(data, mode = "honor") {
  let restHonor = data.targetHonor - data.currentHonor;

  let neededSolos = {};
  for (let mob of Object.keys(mobInfo)) {
    neededSolos[mob] = getRequiredSolo(
      mobInfo[mob],
      restHonor,
      data.currentMeat,
      mode
    );
  }
  return [{}, neededSolos];
}

export function calculateNeededSoloWithMeatRefill(data, mode = "token") {
  let progress = calculateProgress(
    data.targetBox,
    data.drewBox,
    data.currentToken,
    data.currentHonor
  );
  let restToken =
    progress.requiredToken -
    progress.drewToken -
    progress.currentToken -
    progress.currentTokenFromHonor;

  let neededSolos = {};

  let estimation = getRequiredSoloWithMeatRefill(
    mobInfo[data.meatChoice],
    mobInfo[data.soloChoice],
    restToken,
    data.currentMeat,
    mode
  );
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

export function calculateNeededSoloWithMeatRefillForHonor(
  data,
  mode = "honor"
) {
  let restHonor = data.targetHonor - data.currentHonor;

  let neededSolos = {};

  let estimation = getRequiredSoloWithMeatRefill(
    mobInfo[data.meatChoice],
    mobInfo[data.soloChoice],
    restHonor,
    data.currentMeat,
    mode
  );
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

  return [{}, neededSolos];
}
