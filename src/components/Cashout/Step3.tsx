import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CashoutBankTransfer from "./CashoutBankTransfer/CashoutBankTransfer";
import CashoutAman from "./CashoutAman/CashoutAman";
import {
  StepperAction,
  StepperContent,
  StepperContext
} from "react-material-stepper";
import "./Cashout.scss";
import { STEP2 } from "./Step2";

export const STEP3 = "step-three";

const Step3 = () => {
  const { resolve, getData, updateStep, goAt } = React.useContext(
    StepperContext
  );

  const data = getData(STEP3);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    resolve(data);
  };

  const back = () => goAt(STEP2);

  const toggle = (step: string) => () => {
    updateStep(STEP3, {
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
      <div className="step3">
        <div className="step3-header flex-center">
          <div>
            <div className="img-bg mr-3">
              <img
                src={require("../../assets/img/phone-payment-banner.png")}
                alt="Phone"
              />
            </div>
          </div>
          <div>
            <p className="text-gray">Use the money in your wallet </p>
            <h3 className="h3-text">Pay with Lucky App and get free money!</h3>
            <div className="d-flex align-items-center">
              <p>Download the app</p>
              <Link to="/SignIn">
                <img
                  src={require("../../assets/img/svg/apple-black.svg")}
                  alt="Apple Store"
                />
              </Link>
              <Link to="/SignIn">
                <img
                  src={require("../../assets/img/svg/android-black.svg")}
                  alt="Google Play"
                />
              </Link>
            </div>
          </div>
        </div>
        <h4 className="h4-text">Select cashout method</h4>
        <div className="tabs">
          <Tabs defaultActiveKey="Bank transfer" id="cashoutMethod">
            <Tab eventKey="Bank transfer" title="Bank transfer">
              <CashoutBankTransfer />
            </Tab>
            <Tab eventKey="Aman" title="Aman">
              <CashoutAman />
            </Tab>
          </Tabs>
          <form></form>
        </div>
      </div>
    </StepperContent>
  );
};
export default Step3;
