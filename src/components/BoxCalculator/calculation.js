import { tokenPerBox, ratioHonorToToken, mobInfo } from "./constants.js";

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

function getRequiredSolo(mob, targetToken) {
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
  return result;
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

export function calculateNeededSolo(data) {
  console.log(data.targetBox, data.currentToken);
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
    neededSolos[mob] = getRequiredSolo(mobInfo[mob], restToken);
  }
  return [progress, neededSolos];
}
