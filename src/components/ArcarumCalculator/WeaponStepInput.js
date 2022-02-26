import React from "react";
import ArcarumStepInput from "./ArcarumStepInput"
import propTypes from "prop-types";

const stepChoices = [
  "未获得",
  "SSR0突",
  "SSR1突",
  "SSR2突",
  "SSR3突",
  "SSR终突"
];

export default function WeaponStepInput({ trackedWeapons, onStepChange }) {
  return (
    <ArcarumStepInput
      title="贤者武器进度"
      trackedItem={trackedWeapons}
      stepChoices={stepChoices}
      fieldnames={{current:"weaponCurrent", target:"weaponTarget"}}
      onStepChange={onStepChange}
    />
  );
}

WeaponStepInput.propTypes ={
  trackedWeapons: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
