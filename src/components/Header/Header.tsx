import React from "react";

import NavBar from "../shared/NavBar/NavBar";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({history}) => {
  return (
    <header className="header ">
      <NavBar history={history}/>
      <div className="container">
        <div className="row">
          <div className="col-12 hero_section ">
            <Carousel>
              <Carousel.Item className="slide1">
                <div className="flex-end">
                  <p className="sub-title-light">WITH LUCKY APP</p>
                  <h1 className="heading-text">
                    Buy food, fashion and electronics for less!
                  </h1>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <Link to="/OnlineCashbacks">
                        <button
                          type="button"
                          className="btn btn-primary-white btn-lg btn-block "
                        >
                          Check online cashbacks
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="slide2">
                <div className="flex-end">
                  <p className="sub-title-light">WITH LUCKY APP</p>
                  <h1 className="heading-text">
                    Earn cashback on your online purchases
                  </h1>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <Link to="/OnlineCashbacks">
                        <button
                          type="button"
                          className="btn btn-primary-white btn-lg btn-block "
                        >
                          Check online cashbacks
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="slide3">
                <div className="flex-end">
                  <div>
                    <p className="sub-title-light">WITH LUCKY APP</p>
                    <h1 className="heading-text">
                      Get free money wherever you buy!
                    </h1>
                    <p className="sub-title-light mb-2rem">
                      Online and in-store offers in more than<br></br>{" "}
                      <strong>3,000 stores</strong>.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <Link to="/InStoreOffers">
                          <button
                            type="button"
                            className="btn btn-primary-white btn-lg btn-block "
                          >
                           Check In-Store offers
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
