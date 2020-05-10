import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { useAccountState } from "../Cashout/accountHook";

import "../Cashout/CashoutErrorModal/CashoutErrorModal.scss";

const SignUpConfirmationModal = (props: any) => {
  const { errorMSG, resendOTPByEmail, success } = useAccountState();
  useEffect(
    () => {
      if (success === "Y") {
        handleClose();
        props.setShowOTP(true);
      }
    },
    // eslint-disable-next-line
    [success]
  );
  const handleClose = () => props.setShow(false);

  return (
    <>
      <div>
        <Modal
          className="cashout-error-modal"
          animation={true}
          show={props.show}
          onHide={handleClose}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div>
              <h4 className="h4-text mb-4">
                This mail is already registered in the Lucky app, are sure you
                want to use this email?
              </h4>
              <h4 className="h4-text text-normal">
                Please note that your password in lucky app will be override
                with this password
              </h4>
              <div className="error error-message text-center">{errorMSG}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="col-md-6 col-12"
              variant="primary"
              onClick={() => {
                resendOTPByEmail(props.email);
              }}
            >
              Continue
            </Button>
            <Button
              className="col-md-6 col-12 link-blue"
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

export default SignUpConfirmationModal;
