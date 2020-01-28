import React from "react";

import { Modal, Button } from "react-bootstrap";

const SignInModal = ({show , onShowChange}) => {

    return (
        <Modal show={show} onHide={onShowChange} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onShowChange}>
            Close
          </Button>
          <Button variant="primary" onClick={onShowChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );

};

export default SignInModal;