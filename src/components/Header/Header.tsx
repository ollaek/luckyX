import React from "react";

import NavBar from "../shared/NavBar/NavBar";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header ">
      {/* <div className="container"> */}
        <NavBar />
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col-12 hero_section">
            <p className="sub-title-light">WITH LUCKY APP</p>
            <h1 className="heading-text">
              Buy food, fashion and electronics for less!
            </h1>
            <button type="button" className="btn btn-white btn-lg">
              Check In-store Offers
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
