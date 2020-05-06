import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "./ErrorPages.scss";
import { Link } from "react-router-dom";
const Error404 = ({history}) => {
  return (
    <>
      <NavBar history={history}/>
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="big-text">404</h1>
              <h2 className="h2-text">Ooops! There is nothing here</h2>
              <div className="links">
                <div>
                  <Link to="/Home" className="link-blue hvr-icon-forward">
                    <img
                      className="hvr-icon"
                      src={require("../../assets/img/svg/Right-arrow.svg")}
                      alt="Right-arrow"
                    />
                    Visit Homepage
                  </Link>
                </div>
                <div>
                  <button onClick={() => history.goBack()} className="link-blue hvr-icon-back">
                    <img
                      className="hvr-icon"
                      src={require("../../assets/img/svg/Left-arrow.svg")}
                      alt="Left-arrow"
                    />
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-3">
                <img className="d-none d-md-block"
                  src={require("../../assets/img/error_img.png")}
                  alt="Error Page 404"
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
export default Error404;
