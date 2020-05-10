// import React from "react";
import React, { useRef } from "react";

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

import { useAccountState } from "./accountHook";
import "./Cashout.scss";
import Stepper, {
  Step,
  StepperContext,
  StepperController
} from "react-material-stepper";
import Loader from "../shared/Loader/Loader";

const Cashout = ({history}) => {
  const stepperControllerRef = useRef<StepperController>();
  const { isLoading, verifyOTP, resendOTP, errorMSG, success } = useAccountState();

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
    step1: true,
    step2: true,
    step3: true,
    step4: true
  };
  return (
    <div>
      <NavBar history={history}/>

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
                                  verifyOTP={(number, otp) =>
                                    verifyOTP(number, otp)
                                  }
                                  errorMSG={errorMSG}
                                  success={success}
                                />
                              </Step>
                            )
                          }
                        </StepperContext.Consumer>
                        <StepperContext.Consumer>
                          {stepperContext =>
                            stepperContext.getData(STEP2, initial).step3 && (
                              <Step
                                stepId={STEP3}
                                title="Step Three"
                                data={initial}
                              >
                                <Step3 />
                              </Step>
                            )
                          }
                        </StepperContext.Consumer>
                        <StepperContext.Consumer>
                          {stepperContext =>
                            stepperContext.getData(STEP3, initial).step4 && (
                              <Step
                                stepId={STEP4}
                                title="Step four"
                                data={initial}
                              >
                                <Step4 />
                              </Step>
                            )
                          }
                        </StepperContext.Consumer>
                      </Stepper>
                    </div>
                    <div className="cashout-success"></div>
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
