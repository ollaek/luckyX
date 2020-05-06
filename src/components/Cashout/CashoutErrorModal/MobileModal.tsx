import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./CashoutErrorModal.scss";

const MobileModal = (props: any) => {
 

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
              onClick={props.mergeAccounts}
            >
              Confirm
            </Button>
            <Button
              className="col-md-6 col-12"
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
export default MobileModal;
