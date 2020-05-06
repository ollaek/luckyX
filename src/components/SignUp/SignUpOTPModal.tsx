import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import PinInput from "react-pin-input";
import "../Cashout/Cashout.scss";
import "../Cashout/CashoutErrorModal/CashoutErrorModal.scss";

import { useAccountState } from "../Cashout/accountHook";
import { useUserState } from "../shared/SocialLogin/Hook";

const SignUpOTPModal = (props: any) => {
  const { errorMSG, resendOTPByEmail, otpWaitingTime } = useAccountState();
  const { signUp } = useUserState();
  const [otp, setOtp] = useState("");
  const [goNext, setGoNext] = useState(false);
  const [error, setError] = useState("");
  const [waitingTime, setWaitingTime] = useState(0);

  var localStorageValues = JSON.parse(
    localStorage.getItem("registerationValues")
  );

  useEffect(
    () => {
      if (otpWaitingTime > 0) {
        setWaitingTime(otpWaitingTime);
      }
    },
    // eslint-disable-next-line
    [otpWaitingTime]
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
  const handleClose = () => props.setShow(false);

  const onSubmit = () => {
    if (otp.length === 6) {
      let user = {
        FullName: localStorageValues.name,
        Email: localStorageValues.email,
        Password: localStorageValues.password,
        ConfirmPassword: localStorageValues.passwordConfirm,
        ConfirmationOtp: otp
      };

      signUp(user).then((res: any) => {
        if (res.payload.result){
          localStorage.setItem("signupDone", "true");
          props.history.push(`/MailVerification/${user.Email}`)
        }
        if(res.payload.error){
        if (res.payload.error.response) {
          setError(res.payload.error.response.data.Errors[0].toString());
        }}
      });
    } else {
      setError("Please enter valid code");
    }
  };
  return (
    <>
      <div >
        <Modal
          className="cashout-error-modal"
          animation={true}
          show={props.show}
          onHide={handleClose}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="step2">
              <h4 className="h4-text">Enter the x-digit code that we sent</h4>
              {/* OTP container */}
              <div>
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
                 
                </form>
                <div className="error error-message text-center mb-3">{error}</div>
                  <div className="error error-message text-center mb-3">{errorMSG}</div>
              </div>
              <div className="step2-footer">
                <p className="link-text">
                  Didn’t you receive the code?
                  <button
                    className="btn-link link-blue"
                    disabled={waitingTime > 0 ? true : false}
                    onClick={() => resendOTPByEmail(props.email)}
                  >
                    Resend Code {" "}
                    {waitingTime > 0 && waitingTime}
                  </button>
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="col-md-6 col-12"
              variant="primary"
              disabled={!goNext}
              onClick={onSubmit} 
            >
              Continue
            </Button>
            <Button
              className="col-md-6 col-12  link-blue"
              variant="link"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SignUpOTPModal;
