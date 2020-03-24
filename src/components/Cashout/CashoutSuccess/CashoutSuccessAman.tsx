import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Form } from "react-bootstrap";
import "./CashoutSuccess.scss";

const CashoutSuccess = () => {
  return (
    <>
      <section className="cashout-success">
        <div className="cashout-success-img">
          <img
            src={require("../../../assets/img/cashout_success_img.png")}
            alt="Cashout Success"
          />
        </div>
        <h2 className="h2-text">Cashout successful! </h2>
        <h2 className="h2-text text-normal">
          Request has been successfully submitted
        </h2>
        <div className="cashout-success-text">
          <p>
            Request is under processing and this could take up to <br></br>X
            (configurable) working days
          </p>
          <p>Don’t forget to check your email for updates</p>
        </div>
        <div className="col-md-5 m-auto">
          <button className="btn btn-block btn-primary" type="button">
            Continue shopping
          </button>
        </div>
      </section>
    </>
  );
};
export default CashoutSuccess;
