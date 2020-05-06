import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import NavBarElement from "../NavBarElement/NavBarElement";
import { Navbar, Nav, Form } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";

import "../NavBar/NavBar.scss";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const NavBar = (props: any) => {
  let query = useQuery();

  //const token = localStorage.getItem("Token");
  return (
    <div>
      {/* NAVBAR == MOBILE */}
      <div className={"nav-mob"}>
        <Menu right>
          <div className="link-active ">
            <NavBarElement title="Home" hasIcon={false} Link="/Home" />
          </div>
          <div className="link-active">
            <NavBarElement
              title="Online Cashbacks"
              hasIcon={false}
              Link="/OnlineCashbacks"
            />
          </div>
          <div className="link-active">
            <NavBarElement
              title="In-store offers"
              hasIcon={false}
              Link="/InStoreOffers"
            />
          </div>
          <div className="link-active">
            <NavBarElement title="Wallet" hasIcon={false} Link="/Wallet" />
          </div>
          <hr className="mt-5"></hr>
          <div className="profile-link">
            <NavBarElement title="Profile" hasIcon={false} Link="/Profile" />
          </div>
          {/* <div className="lang-div">
            <div className="nav-link">Language</div>
          </div> */}

          {/* <div className="pl-4rem">
            <Form>
              <div className="mb-3 d-flex">
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
          </div> */}
          <div className="">
            {localStorage.getItem("Token") && (
              <button
                className="btn nav-link link-blue"
                onClick={() => {
                  localStorage.clear();
                  window.location.assign(`${process.env.PUBLIC_URL}/Home`);
                }}
              >
                {" "}
                Log out
              </button>
            )}
          </div>
        </Menu>
      </div>
      {/* NAVBAR == WEB */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar nav-padding  bg-primary"
      >
        <div className="container-md">
          <LinkContainer to="/Home">
            <Navbar.Brand></Navbar.Brand>
          </LinkContainer>
          <div className="search-container-mob">
          <Formik
                  initialValues={{
                    searchTerm: ""
                  }}
                  onSubmit={values => {
                    if (values.searchTerm !== "") {
                      props.history.push(
                        `/OnlineCashbacks?id=${
                          query.get("id") ? query.get("id") : ""
                        }&searchTerm=${values.searchTerm}`
                      );
                    }
                  }}
                >
                  {props => {
                    const {
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit
                    } = props;
                    return (
                      <Form noValidate role="form" onSubmit={handleSubmit}>
                        <div className="search-container">
                          <input
                            name="searchTerm"
                            placeholder="Search"
                            className="form-control search-input"
                            value={values.searchTerm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <button type="submit" className="search-icon btn btn-link p-0 m-0">
                              <img
                                src={require("../../../assets/img/svg/search_icon.svg")}
                                alt="search icon"
                              />
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
            {localStorage.getItem("Token") ? (
              <div className="user-log user-logIn">
                <img
                  className="search-icon"
                  src={require("../../../assets/img/svg/Logged_in.svg")}
                  alt="search icon"
                />
              </div>
            ) : (
              <div className="user-log user-logOut">
                <img
                  className="search-icon"
                  src={require("../../../assets/img/svg/Logged_out.svg")}
                  alt="search icon"
                />
              </div>
            )}
          </div>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div className="px-xl-3 px-lg-2">
                <Formik
                  initialValues={{
                    searchTerm: ""
                  }}
                  onSubmit={values => {
                    if (values.searchTerm !== "") {
                      props.history.push(
                        `/OnlineCashbacks?id=${
                          query.get("id") ? query.get("id") : ""
                        }&searchTerm=${values.searchTerm}`
                      );
                    }
                  }}
                >
                  {props => {
                    const {
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit
                    } = props;
                    return (
                      <Form noValidate role="form" onSubmit={handleSubmit}>
                        <div className="search-container">
                          <input
                            name="searchTerm"
                            placeholder="Search"
                            className="form-control search-input"
                            value={values.searchTerm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <button type="submit" className="search-icon btn btn-link p-0 m-0">
                              <img
                                src={require("../../../assets/img/svg/search_icon.svg")}
                                alt="search icon"
                              />
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>

              <div className="px-xl-3 px-lg-2">
                <NavBarElement title="Home" hasIcon={false} Link="/Home" />
              </div>
              <div className="px-xl-3 px-lg-2">
                <NavBarElement
                  title="Online Cashbacks"
                  hasIcon={false}
                  Link="/OnlineCashbacks"
                />
              </div>
              <div className="px-xl-3 px-lg-2">
                <NavBarElement
                  title="In-store offers"
                  hasIcon={false}
                  Link="/InStoreOffers"
                />
              </div>
              <div className="px-xl-3 px-lg-2">
                <NavBarElement title="Wallet" hasIcon={false} Link="/Wallet" />
              </div>
              <div className="px-xl-3 px-lg-2">
                <LinkContainer to="/Profile">
                  <Nav.Link className="profile">
                    {" "}
                    {localStorage.getItem("Token") ? (
                      <img
                        className="profile-icon"
                        src={require("../../../assets/img/svg/Logged_in.svg")}
                        alt="Profile"
                      />
                    ) : (
                      <img
                        className="profile-icon"
                        src={require("../../../assets/img/svg/Logged_out.svg")}
                        alt="Profile"
                      />
                    )}
                    Profile
                  </Nav.Link>
                </LinkContainer>
              </div>
              {/* <div className="px-xl-3 px-lg-2">
                <NavDropdown title="EN" id="basic-nav-dropdown">
                  <LinkContainer to="/SignIn">
                    <NavDropdown.Item>AR</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
