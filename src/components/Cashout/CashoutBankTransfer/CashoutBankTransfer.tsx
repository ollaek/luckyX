import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Form } from "react-bootstrap";

import "../Cashout.scss";

const CashoutBankTransfer = () => {
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
      <div>
        <Form role="form" noValidate>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="fullName" type="text" placeholder="John" />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bankName">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control type="text" placeholder="E.g. HSBC" />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="accountHolderAddress">
            <Form.Label>Account Holder Address</Form.Label>
            <Form.Control
              name="accountHolderAddress"
              type="text"
              placeholder="E.g. 306 Corniche el Nil"
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="branchName">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control
              name="branchName"
              type="text"
              placeholder="E.g. HSCB Bank Egypt S.A.E."
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bankAddress">
            <Form.Label>Bank Address</Form.Label>
            <Form.Control
              name="bankAddress"
              type="text"
              placeholder="E.g. 987665"
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="accountNumber">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              name="accountNumber"
              type="number"
              placeholder="E.g. 0938373636353"
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="SWIFTCode">
            <Form.Label>SWIFT Code</Form.Label>
            <Form.Control
              name="SWIFTCode"
              type="number"
              placeholder="E.g. 987665"
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="IBAN">
            <Form.Label>IBAN</Form.Label>
            <Form.Control
              name="IBAN"
              type="number"
              placeholder="E.g. 0938373636353"
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default CashoutBankTransfer;
