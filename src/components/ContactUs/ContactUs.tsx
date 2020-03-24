import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";
import ContactUsInfo from "./ContactUsInfo";
import ContactUsSuccess from "./ContactUsSuccess";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto">
              {/* <ContactUsInfo /> */}
              <ContactUsSuccess />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
