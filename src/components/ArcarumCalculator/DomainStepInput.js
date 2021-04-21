import React from "react";
import ArcarumStepInput from "./ArcarumStepInput"
import propTypes from "prop-types";

const stepChoices = [
  "未解锁",
  "解锁1格",
  "解锁2格",
  "解锁3格",
  "解锁4格"
];

export default function DomainStepInput({ trackedEvoker, onStepChange }) {
  return (
    <ArcarumStepInput
      title="贤者领域进度"
      trackedItem={trackedEvoker}
      stepChoices={stepChoices}
      fieldnames={{current:"domainCurrent", target:"domainTarget"}}
      onStepChange={onStepChange}
    />
  );
}

DomainStepInput.propTypes ={
    trackedEvoker: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
