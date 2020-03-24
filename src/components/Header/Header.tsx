import React from "react";

import NavBar from "../shared/NavBar/NavBar";
import Carousel from "react-bootstrap/Carousel";
import "./Header.scss";

const Header = () => {
  
  return (
    <header className="header ">
      {/* <div className="container"> */}
            {/* <div className="container"> */}

      <NavBar />
      {/* </div> */}
      <div className="container">
        <div className="row">
        {/* p-0 p-lg */}
          <div className="col-12 hero_section ">
            <Carousel >
              <Carousel.Item className="" >
                {/* <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    // <Carousel.Caption>
    //   <h3>First slide label</h3>
    //   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    // </Carousel.Caption> */}
                <p className="sub-title-light">WITH LUCKY APP</p>
                <h1 className="heading-text">
                  Buy food, fashion and electronics for less!
            </h1>
                <div className="row">
                  <div className="col-lg-4 offset-lg-0 col-md-7 offset-md-0 col-10 offset-1">
                    <button type="button" className="btn btn-primary-white btn-lg btn-block ">
                      Check In-store Offers
            </button>
                  </div>

                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <p className="sub-title-light">WITH LUCKY APP</p>
                <h1 className="heading-text">
                Buy food, fashion and electronics for less!
            </h1>
                <div className="row">
                  <div className="col-lg-4 offset-lg-0 col-md-7 offset-md-0 col-10 offset-1">
                    <button type="button" className="btn btn-white btn-lg btn-block ">
                      Check In-store Offers
            </button>
                  </div>

                </div>
              </Carousel.Item>
              <Carousel.Item className="">
                <p className="sub-title-light">WITH LUCKY APP</p>
                <h1 className="heading-text">
                Buy food, fashion and electronics for less!
            </h1>
                <div className="row">
                  <div className="col-lg-4 offset-lg-0 col-md-7 offset-md-0 col-10 offset-1">
                    <button type="button" className="btn btn-primary-white btn-lg btn-block ">
                      Check In-store Offers
            </button>
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
