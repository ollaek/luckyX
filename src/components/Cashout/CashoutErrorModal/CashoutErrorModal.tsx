import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CashoutErrorModal.scss";

const CashoutErrorModal = (props:any) => {
  
  // return (
  //   <div className="cashout-error-modal">
  //     <Modal size="sm" animation={true}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Register and get EGP 50 Bonus!</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>Hiiiiiiiiiii Modal</Modal.Body>
  //       {/* <Modal.Footer>
  //         <Button variant="secondary" onClick={onShowChange}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={onShowChange}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer> */}
  //     </Modal>
  //   </div>
  // );

  const handleClose = () => props.setShow(false);
  

  const renderMobileModal = () => {
    return (
      <>
        <Modal.Body>
          <div>
            <h4 className="h4-text">
              A Lucky account is already registered with this number.
            </h4>
            <h4 className="h4-text text-normal">
              Please confirm that this is the Lucky account you want to use
            </h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="col-md-6 col-12"
            variant="primary"
            onClick={handleClose}
          >
            Save Changes
          </Button>
          <Button
            className="col-md-6 col-12"
            variant="link"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </>
    );
  };

  const renderOTPModal = () => {
    return (
      <>
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
      </>
    );
  };

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
          {props.modalType === 'mobile' ? renderMobileModal : null}
          {props.modalType === 'OTP' ? renderOTPModal : null} 
         </Modal>
      </div>
    </>
  );
};
export default CashoutErrorModal;
