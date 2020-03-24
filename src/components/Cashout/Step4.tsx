import React from "react";
import "./Cashout.scss";
import {
  StepperAction,
  StepperContent,
  StepperContext
} from "react-material-stepper";
import { STEP3 } from "./Step3";
import { Link } from "react-router-dom";
export const STEP4 = "step-four";

const Step4 = () => {
  const { resolve, getData, updateStep, goAt } = React.useContext(
    StepperContext
  );

  const data = getData(STEP4);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    resolve(data);
  };

  const back = () => goAt(STEP3);

  const toggle = (step: string) => () => {
    updateStep(STEP4, {
      data: {
        ...data,
        [step]: !data[step]
      }
    });
  };
  return (
    <StepperContent
      onSubmit={onSubmit}
      actions={
        <React.Fragment>
          <StepperAction type="button" onClick={back}>
            Back
          </StepperAction>
          <Link to="/">Cancel</Link>
          <StepperAction align="right" type="submit">
            Continue
          </StepperAction>
        </React.Fragment>
      }
    >
      <div className="step4">
        <h3 className="h3-text">Bank transfer Terms & Conditions:</h3>
        <ul>
          <li>Minimum amount = EGP X (configurable)</li>
          <li>
            You can cash out by voucher or bank transfer only the funds earned
            as web cashbacks
          </li>
          <li>Request can take up to X (configurable) days for processing</li>
        </ul>
      </div>
    </StepperContent>
  );
};
export default Step4;
