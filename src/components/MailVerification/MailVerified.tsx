import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";
import { useUserState } from "../shared/SocialLogin/Hook";

import "../MailVerification/MailVerification.scss";

const MailVerified = props => {
  const { verifyEmail } = useUserState();
  const userId = props.match.params.id;
  useEffect(() => {
    if (userId) {
      verifyEmail(userId);
    }
  }, [userId, verifyEmail]);
  return (
    <>
      <NavBar />
      <section className="mailVerification">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 offset-lg-4 col-md-6 offset-md-3">
              <div className="mailVerification-img">
                <img src={require("../../assets/img/mail.png")} alt="" />
              </div>
              <h1 className="mailVerification-title">Email verified!</h1>
              <Link to="/SignIn" className="btn btn-primary btn-block">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MailVerified;
