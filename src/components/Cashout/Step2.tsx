import React, { useState, useEffect } from "react";
import PinInput from "react-pin-input";
import { Link } from "react-router-dom";

import "./Cashout.scss";
import {
  StepperAction,
  StepperContent,
  StepperContext
} from "react-material-stepper";
import { STEP1 } from "./Step1";
import Modal from "./CashoutErrorModal/OTPModal";

export const STEP2 = "step-two";

const Step2 = ({ resendOTP, verifyOTP, errorMSG }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [tries, setTries] = useState(0);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const { resolve, getData, updateStep, goAt } = React.useContext(
    StepperContext
  );

  const data = getData(STEP2);

  alert(errorMSG);
  const callbackResolve = () => {
    resolve(data);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    debugger;
    
    if (otp.length === 6) {
      verifyOTP(data.step2.mobile, otp, callbackResolve);
    } else {
      setTries(tries + 1);
      setError("Please enter valid code");
    }
  };

  const back = () => goAt(STEP1);

  const toggle = (step: string) => () => {
    updateStep(STEP2, {
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
          <div className="py-3 col-md-4">
            <StepperAction type="button" onClick={back}>
              Back
            </StepperAction>
            <Link to="/">Cancel</Link>
            <StepperAction
              align="right"
              type="submit"
              className="btn btn-block btn-primary"
            >
              Continue
            </StepperAction>
          </div>
        </React.Fragment>
      }
    >
      <div className="step2">
        <h4 className="h4-text">
          By entering the confirmation code sent to mobile number{" "}
          {data.step2.mobile}, you confirm that this is the number you want to
          use for your Lucky wallet.
        </h4>
        <form>
          <PinInput
            length={6}
            initialValue=""
            onChange={(value, index) => {}}
            type="numeric"
            onComplete={(value, index) => {
              setOtp(value);
            }}
          />
          <div style={{ color: "#FF585F" }}>{error}</div>
          <div style={{ color: "#FF585F" }}>error : {errorMSG}</div>
        </form>
        <div className="step2-footer">
          <p className="link-text">
            Didn’t you receive the code? Resend Code ?
            <button
              className="link-red"
              onClick={() => resendOTP(data.step2.mobile)}
            >
              Resend Code
            </button>
          </p>
        </div>
      </div>
      <Modal show={show} setShow={val => setShow(val)} />
    </StepperContent>
  );
};
export default Step2;
