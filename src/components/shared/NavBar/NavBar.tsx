import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import NavBarElement from "../NavBarElement/NavBarElement";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
// import { View } from 'react-router-bootstrap';

import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  //const token = localStorage.getItem("Token");
  return (
    <div>
      {/* NAVBAR == MOBILE */}

      <div className={"nav-mob"}>
        <div className="user-log user-logIn"></div>
        <Menu right>
          <div className="link-active active">
            {/* <Link className="nav-link" to="/">
            Home
            </Link> */}
             <NavBarElement title="Home" hasIcon={false} Link="/" />

          </div>
          <div className="link-active">
            {/* <Link className="nav-link" to="/OnlineCashbacks">
            Online Cashbacks
            </Link> */}
            <NavBarElement title="Online Cashbacks" hasIcon={false} Link="/OnlineCashbacks" />

          </div>
          <div className="link-active">
          <Link className="nav-link" to="/InStoreOffers">
          In-store offers
            </Link>
          </div>
          <div className="link-active">
          <Link className="nav-link" to="/">
          Wallet
            </Link>
          
          </div>
          <hr className="mt-5"></hr>
          <div className="">
            <img
              src={require("../../../assets/img/svg/Profile-mob.svg")}
              alt="Profile"
              className="profile-mob"
            />
              <Link className="nav-link" to="/">
              Profile
            </Link>
        
          </div>
          <div className="">
            <img
              src={require("../../../assets/img/svg/Globe.svg")}
              alt="Language"
              className="profile-mob"
            />
            <Link className="nav-link" to="/">
            Language
            </Link>
          </div>

          <div className="pl-4rem">
            <Form>
              <div className="mb-3">
                <Form.Check
                  custom
                  inline
                  label="English"
                  type="radio"
                  name="globe"
                  id="radio1"
                  checked
                  readOnly
                />
                <Form.Check
                  custom
                  inline
                  label="Arabic"
                  type="radio"
                  name="globe"
                  id="radio2"
                  readOnly
                />
              </div>
            </Form>
          </div>
          <div className="">
            <a className="nav-link text-red" href="/">
              {" "}
              Log out
            </a>
          </div>
        </Menu>
      </div>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar navbar-expand-md nav-padding  bg-primary"
      >
        <div className="container-md">
          <Navbar.Brand>
            {/* <LinkContainer to="/">
          <img
            src={require("../../../assets/img/Lucky_logo.png")}
            alt="Lucky"
          />
      </LinkContainer> */}
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div className="px-3">
                <NavBarElement title="Home" hasIcon={false} Link="/" />
              </div>
              <div className="px-3">
                <NavBarElement
                  title="Online Cashbacks"
                  hasIcon={false}
                  Link="/OnlineCashbacks"
                />
              </div>
              <div className="px-3">
                <NavBarElement
                  title="In-store offers"
                  hasIcon={false}
                  Link="/InStoreOffers"
                />
              </div>
              <div className="px-3">
                <NavBarElement title="Wallet" hasIcon={false} Link="/Wallet" />
              </div>
              <div className="px-3">
                <LinkContainer to="/SignIn">
                  <Nav.Link className="profile">
                    {" "}
                    <img
                      className="profile-icon"
                      src={require("../../../assets/img/svg/Profile.svg")}
                      alt="Profile"
                    />
                    Profile
                  </Nav.Link>
                </LinkContainer>
              </div>
              <div className="px-3">
                <NavDropdown title="EN" id="basic-nav-dropdown">
                  <LinkContainer to="/SignIn">
                    <NavDropdown.Item>AR</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
