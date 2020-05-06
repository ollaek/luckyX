import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "../MailVerification/MailVerification.scss";
import { Link } from "react-router-dom";

const MailVerification = props => {
  const email = props.match.params.email;
  return (
    <>
      <NavBar history={props.history}/>
      <section className="mailVerification">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="mailVerification-img">
                <img src={require("../../assets/img/mail.png")} alt="" />
              </div>
              <h1 className="mailVerification-title">
                Please verify your email
              </h1>
              <div className="mailVerification-text">
                <p>
                  We have sent you an email with a link to:
                  <br />
                  <strong>{email}</strong>
                  <br />
                  Check your inbox and press the link to finish your
                  registration.
                </p>
                <p>Check your spam folder too :)</p>
              </div>
              {/* <LinkContainer to="/SignUp"> */}
                <Link to="/SignUp" className="btn btn-block btn-primary" type="button">
                  Edit registration details
                </Link>
              {/* </LinkContainer> */}
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};

export default MailVerification;
