// import React from "react";
import React, { useRef, useState, useEffect } from "react";

//import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";
import {
  Step1,
  STEP1,
  Step2,
  STEP2,
  Step3,
  STEP3,
  Step4,
  STEP4
} from "./Steps";

//import CashoutSuccessAman from "./CashoutSuccess/CashoutSuccessAman";
//import CashoutSuccessBankTransfer from "./CashoutSuccess/CashoutSuccessBankTransfer";
import { useAccountState } from "./Hook";
import "./Cashout.scss";
import Stepper, {
  Step,
  StepperContext,
  StepperController
} from "react-material-stepper";
import Loader from "../shared/Loader/Loader";
import Modal from "./CashoutErrorModal/CashoutErrorModal";

const Cashout = ({history}) => {
  const stepperControllerRef = useRef<StepperController>();
  const { isLoading, verifyOTP, resendOTP, errorMSG } = useAccountState();
  const [mobile, setMobile] = useState("");
  debugger;

  const onComplete = (stepId: string) => {
    setTimeout(() => {
      alert(`completed ${stepId}`);
    }, 1000);
  };
  const onResolve = (stepId: any) => {
    const controller = stepperControllerRef.current;
    const steps = controller.getSteps();

    if (steps.length && steps.every(step => step.completed)) {
      onComplete(stepId);
    }
  };

  const initial = {
    step1: num => setMobile(num),
    step2: { mobile },
    step3: true,
    step4: true,
  };
  return (
    <div>
      <NavBar />

      <div className="sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cashout">
                <div className="row">
                  <div className="col-md-7 m-auto">
                    <div className="cashout-steps">
                      <Stepper
                        contextRef={stepperControllerRef}
                        initialStep={STEP1}
                        onResolve={onResolve}
                      >
                        <Step stepId={STEP1} data={initial} title="Step One">
                          <Step1 />
                        </Step>
                        <StepperContext.Consumer>
                          {stepperContext =>
                            stepperContext.getData(STEP1, initial).step2 && (
                              <Step
                                stepId={STEP2}
                                title="Step Two"
                                data={initial}
                              >
                                <Step2
                                  resendOTP={number => resendOTP(number)}
                                  verifyOTP={(number, otp, callback) =>
                                    verifyOTP(number, otp, callback)
                                  }
                                  errorMSG={errorMSG}
                                />
                              </Step>
                            )
                          }
                        </StepperContext.Consumer>
                        <StepperContext.Consumer>
                          {stepperContext =>
                            stepperContext.getData(STEP2, initial).step3 && (
                              <Step stepId={STEP3} title="Step Three">
                                <Step3 />
                              </Step>
                            )
                          }
                        </StepperContext.Consumer>
                        <StepperContext.Consumer>
                          {stepperContext =>
                            stepperContext.getData(STEP3, initial).step4 && (
                              <Step stepId={STEP4} title="Step four">
                                <Step4 />
                              </Step>
                            )
                          }
                        </StepperContext.Consumer>
                      </Stepper>
                    </div>
                    <div className="cashout-success">
                      {/* <CashoutSuccessAman /> */}
                      {/* <CashoutSuccessBankTransfer /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isLoading && <Loader />}
    </div>
  );
};

export default Cashout;