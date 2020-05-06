import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";
import ContactUsSuccess from "./ContactUsSuccess";


import "./ContactUs.scss";

const ContactUs = ({ history }) => {
  
  return (
    <>
      <NavBar history={history} />
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
