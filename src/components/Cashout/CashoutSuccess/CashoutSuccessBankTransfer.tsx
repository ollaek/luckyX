import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Form } from "react-bootstrap";
import "./CashoutSuccess.scss";

const CashoutSuccess = () => {
  return (
    <>
      {/* SECTION === Continue shopping======================================================== */}

      <section className="cashout-success">
        <div className="cashout-success-img">
          <img
            src={require("../../../assets/img/cashout_success_img.png")}
            alt="Cashout Success"
          />
        </div>
        <h2 className="h2-text">Cashout successful! </h2>
        <h2 className="h2-text text-normal">
          You just cashout EGP 50 succesfully
        </h2>
        <div className="cashout-success-text">
          <p>Request can take up to X (configurable) days for processing”</p>
        </div>
        <div className="bank-details">
          <p className="text-bold">
            You will receive the money in this bank account:
          </p>
          <ul>
            <li>Bank: Bank Name</li>
            <li>Sort/branch code: 34756</li>
            <li>IBAN: 5454647474894</li>
            <li>Bank swift code: SGBHFT</li>
          </ul>
        </div>
        <div className="col-md-5 m-auto">
          <button className="btn btn-block btn-primary" type="button">
            Continue shopping
          </button>
        </div>
      </section>

      {/* SECTION === Continue to Cashout======================================================== */}
      {/* <section className="cashout-success">
        <div className="cashout-success-img">
          <img
            src={require("../../../assets/img/cashout_success_img.png")}
            alt="Cashout Success"
          />
        </div>
        <h2 className="h2-text">Cashout successful! </h2>
        <h2 className="h2-text text-normal mb-5">
          Your funds have been added successfully to your Lucky wallet
        </h2>
        <div className="col-md-5 m-auto">
          <button className="btn btn-block btn-primary" type="button">
            Continue to Cashout
          </button>
        </div>
      </section>*/}
    </>
  );
};
export default CashoutSuccess;
