import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Form } from "react-bootstrap";

import "../Cashout.scss";

const CashoutAman = () => {
  return (
    <div>
   <div className="text-center">
        <Form>
          <p className="text-muted">PLEASE FILL THE FORM TO CASH OUT</p>
          <h4 className="h4-text">How much do you want to cashout?</h4>
          <Form.Group controlId="formGridZip">
            <Form.Control
              type=""
              className="cashout-amount"
              placeholder="EGP 0.00"
            />
            <Form.Text className="text-muted text-bold ">
              CURRENT WALLET BALANCE: EGP X
            </Form.Text>
          </Form.Group>
          <p className="text-muted">
            You can cashout EGP X each month by bank transfer or Aman
          </p>
        </Form>
      </div>
     
    </div>
     );
};
export default CashoutAman;
