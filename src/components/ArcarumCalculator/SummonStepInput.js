import React from "react";
import ArcarumStepInput from "./ArcarumStepInput"
import propTypes from "prop-types";

const stepChoices = [
  "未获得",
  "SR0突",
  "SR1突",
  "SR2突",
  "SR3突",
  "SSR3突",
  "SSR4突",
  "SSR5突",
  "贤者"
];

export default function SummonStepInput({ trackedSummons, onStepChange }) {
  return (
    <ArcarumStepInput
      title="转世召唤石进度"
      trackedItem={trackedSummons}
      stepChoices={stepChoices}
      fieldnames={{current:"current", target:"target"}}
      onStepChange={onStepChange}
    />
  );
}

SummonStepInput.propTypes ={
  trackedSummons: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
