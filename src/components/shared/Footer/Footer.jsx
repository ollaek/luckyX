import React from "react";
import ScrollToTop from "react-scroll-up";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollToTop
        showUnder={160}
        className="scrollToTop"
        style={{
          position: "relative"
        }}
      >
        <span>
          <img
            className="scroll-img"
            src={require("../../../assets/img/svg/scroll_up.svg")}
            alt="Scroll"
          />
        </span>
      </ScrollToTop>

      <div className="footer-row1">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 mb-5 mb-md-0">
              <h3 className="footer-heading ">
                Get free money wherever you buy!
              </h3>
              <p className="footer-text">
                Online and in-store offers on food, fashion, electronics
               & more in 3,000+ stores
              </p>
            </div>
            <div className="col-md-5 col-12 mb-5 mb-md-0">
              <ul className="footer-links">
                <li>
                  <a className="hvr-icon-forward" href="#!">
                    <img
                      className="hvr-icon"
                      src={require("../../../assets/img/svg/footer-arrow.svg")}
                      alt="right-arrow"
                    />{" "}
                    Online Cashbacks
                  </a>
                </li>
                <li>
                  <a className="hvr-icon-forward" href="#!">
                    <img
                      className="hvr-icon"
                      src={require("../../../assets/img/svg/footer-arrow.svg")}
                      alt="right-arrow"
                    />{" "}
                    In-store Offers
                  </a>
                </li>
                <li>
                  <a className="hvr-icon-forward" href="#!">
                    <img
                      className="hvr-icon"
                      src={require("../../../assets/img/svg/footer-arrow.svg")}
                      alt="right-arrow"
                    />{" "}
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row pt-0 pt-md-4">
            <div className="col-lg-7 col-12 mb-5 mb-md-0">
              <div className="footer-text">
                Find us:{" "}
                <a href="!#" className="mx-1" tooltip="Instagram">
                  <img
                    src={require("../../../assets/img/svg/Instagram.svg")}
                    alt="Instagram"
                  />
                </a>
                <a href="!#" className="mx-1" tooltip="Facebook">
                  <img
                    src={require("../../../assets/img/svg/Facebook.svg")}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <p className="footer-text mb-3 text-center-sm">Get the app</p>
              <div className=" row ">
                {/* col-12 col-md-4 */}
                <div className="col-12 col-lg">
                  <button className="btn btn-white footer-btn">
                    <img
                      src={require("../../../assets/img/svg/apple.svg")}
                      alt="Apple Store"
                    />
                    <div>
                      <span className="font-light">Download on </span>
                      <p>Apple Store</p>
                    </div>
                  </button>
                </div>
                {/* col-12 col-md-4 */}
                <div className="col-12 col-lg">
                  <button className="btn btn-white footer-btn">
                    <img
                      src={require("../../../assets/img/svg/android.svg")}
                      alt="Google Play"
                    />
                    <div>
                      <span className="font-light">Download on </span>
                      <p>Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <p>© 2020 Lucky App All rights reserved.</p>
            </div>
            <div className="col-12 col-lg-5">
              <p>Terms of Service | Privacy Policy | FAQs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;