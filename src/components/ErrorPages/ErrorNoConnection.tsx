import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "./ErrorPages.scss";
import { Link } from "react-router-dom";
const ErrorNoConnection = ({history}) => {
  return (
    <>
      <NavBar history={history}/>
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="big-text">OPS!</h1>
              <h2 className="h2-text">Slow or no internet connection</h2>
              <div className="links">
                <div>
                  <Link to="" className="link-blue hvr-icon-forward">
                    <img
                      className="hvr-icon"
                      src={require("../../assets/img/svg/Right-arrow.svg")}
                      alt="Right-arrow"
                    />
                   Try Again
                  </Link>
                </div>
               
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-3">
                <img className="d-none d-md-block"
                  src={require("../../assets/img/error_img2.png")}
                  alt="Error Page No Internet Connection"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ErrorNoConnection;
