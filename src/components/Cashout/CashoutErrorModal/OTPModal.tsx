import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./CashoutErrorModal.scss";

const OTPModal = (props: any) => {
 

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
            <h4 className="h4-text">
              You entered a wrong code multiple times, please try again in 12
              hours 
            </h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="col-md-6 col-12"
            variant="primary"
            onClick={handleClose}
          >
            OK
          </Button>
        </Modal.Footer>
        </Modal>
      </div>
    </>
  );
  
};
export default OTPModal;
