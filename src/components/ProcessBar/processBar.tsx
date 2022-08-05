import React, { memo } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { IEventResponse } from "../types";
import { CircleIndexProcess, TextProcess } from "./styles";
import "./processBar.scss";

const steps = [
  {
    status: "1",
  },
  {
    status: "2",
  },
];

const textProcess = (index: number) => {
  switch (index) {
    case 0:
      return "Tickets";
    case 1:
      return "Checkout";
  }
};

export interface IProgressBarComponentProps {
  transfer?: number;
  evenInfo?: IEventResponse;
}

const ProgressBarComponent = (props: IProgressBarComponentProps) => {
  const { transfer = 1, evenInfo } = props;

  const getStepPosition = () => {
    if (transfer === 1) {
      return 0.5;
    } else {
      return 1;
    }
  };

  return (
    <ProgressBar
      height={2}
      percent={100 * getStepPosition()}
      filledBackground={evenInfo?.primaryColor || "#EA5284"}
      unfilledBackground={evenInfo?.secondColor || "#FFFFFF"}
    >
      {steps.map((item, index) => {
        return (
          <Step
            key={item.status}
            position={100 * getStepPosition()}
            transition="scale"
          >
            {({ accomplished }) => (
              <>
                <CircleIndexProcess accomplished={accomplished}>
                  {index + 1}
                </CircleIndexProcess>
                <TextProcess accomplished={accomplished} color="white">
                  {textProcess(index)}
                </TextProcess>
              </>
            )}
          </Step>
        );
      })}
    </ProgressBar>
  );
};

export default memo(ProgressBarComponent);
