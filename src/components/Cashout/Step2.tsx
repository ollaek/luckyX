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
import { STEP3 } from "./Step3";

export const STEP2 = "step-two";

const Step2 = ({ resendOTP, verifyOTP }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [goNext, setGoNext] = useState(false);
  const { resolve, getData, goAt } = React.useContext(StepperContext);

  const data = getData(STEP2);
  const [waitingTime, setWaitingTime] = useState(60);
  localStorage.setItem("IsJustMerged", "false");
   
   if(localStorage.getItem("IsMerged") === "true"){
     goAt(STEP3);
   }

   
   useEffect(
    () => {
      if (data.step2.newTime > 0){
        setWaitingTime(data.step2.newTime);
      }
    },
    // eslint-disable-next-line
    [data.step2.newTime]
  );
  useEffect(
    () => {
      setTimeout(() => {
        if (waitingTime > 0) setWaitingTime(waitingTime - 1);
      }, 1000);
    },
    // eslint-disable-next-line
    [waitingTime]
  );

  const callbackResolve = () => {
    resolve(data);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (otp.length === 6) {
      verifyOTP(data.step2.mobile, otp, callbackResolve).then((res: any) => {
        if(res.payload.error.response){
          setError(res.payload.error.response.data.Errors[0].toString());
        }
      });
    } else {
      setError("Please enter valid code");
    }
  };

  const onResend = () => {
    resendOTP(data.step2.mobile).then(res => {
      if (res.payload.result) {
        const newTime = res.payload.result.Data;
        setWaitingTime(newTime);
      } else {
        if(res.payload.error.response){
          setError(res.payload.error.response.data.Errors[0].toString());
        }else{
          window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
        }
      }
    });
  };

  const back = () => goAt(STEP1);

  return (
    <StepperContent
      onSubmit={onSubmit}
      actions={
        <React.Fragment>
          <div className="item1">
            <StepperAction
              className="link-grey text-bold btn-link"
              type="button"
              onClick={back}
            >
              <img
                className="mr-3"
                src={require("../../assets/img/svg/back-arrow.svg")}
                alt="back-arrow"
              />
              Back
            </StepperAction>
          </div>
          <div className="item2">
            <Link to="/Home" className="link-blue">
              Cancel
            </Link>
          </div>
          <div className="item3">
            <StepperAction
              align="right"
              type="submit"
              className="btn btn-block btn-primary"
              disabled={!goNext}
            >
              Continue
            </StepperAction>
          </div>
        
        </React.Fragment>
      }
    >
      <>
      <div className="row">
   <div className="col-12">
     <p className="current_step-text">   Cashout <span >- Step 02/03</span></p>
   </div>
      </div>
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
            onChange={(value, index) => {
              if (value.length === 6) {
                setGoNext(true);
              } else {
                setGoNext(false);
              }
            }}
            type="numeric"
            onComplete={(value, index) => {
              setOtp(value);
            }}
          />
          <div style={{ color: "#FF585F" }}>{error}</div>
        </form>
        <div className="step2-footer">
          <p className="link-text">
            Didn’t you receive the code?
            <button
              disabled={waitingTime > 0 ? true : false}
              className="btn-link link-blue"
              onClick={() => onResend()}
            >
              Resend Code{" "}
              {waitingTime > 0 && waitingTime}
            </button>
          </p>
        </div>
      </div>
      </>
      <Modal show={show} setShow={val => setShow(val)} />
    </StepperContent>
  );
};
export default Step2;
