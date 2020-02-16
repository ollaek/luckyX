import React from "react";
import Footer from "../shared/Footer/Footer";
//import { LinkContainer } from "react-router-bootstrap";
import NavBar from "../shared/NavBar/NavBar";

import "../MailVerification/MailVerification.scss";

const MailVerification = props => {
  const email = props.match.params.email;

  return (
    <>
      <NavBar />
      <section className="mailVerification">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="mailVerification-img">
                <img src={require("../../assets/img/mail.png")} alt="" />
              </div>
              <h1 className="mailVerification-title">
                We sent an email to:
                <span className="d-block tetx-light">{email}</span>{" "}
              </h1>
              <div className="mailVerification-text">
                <p>
                  We sent you instructions to reset your password and get you{" "}
                  <br></br>back on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};
export default MailVerification;
