import React,{useState} from "react";
import { LinkContainer } from "react-router-bootstrap";

import NavBarElement from "../NavBarElement/NavBarElement";
import SignInModal from "../../SignIn/SignInModal";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg nav-padding  bg-primary">
   <div className="container">
   <Navbar.Brand>
      <LinkContainer to="/">
       
          <img
            src={require("../../../assets/img/Lucky_logo.png")}
            alt="Lucky"
          />
      </LinkContainer>
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavBarElement title="Home" hasIcon={false} Link="/"/>
          <NavBarElement title="Online Cashbacks" hasIcon={false} Link="/OnlineCashbacks"/>
          <NavBarElement title="In-store offers" hasIcon={false} Link="/"/>
          <NavBarElement title=" Wallet" hasIcon={false} Link="/"/>
          <Nav.Link className="" onClick={() => toggleModal()}>
          {" "}
          <img
            className="profile-icon"
            src={require("../../../assets/img/profile-user-logged-in.png")}
            alt="Profile"
          />
          Profile
        </Nav.Link>
          <NavDropdown title="EN" id="basic-nav-dropdown">
            <LinkContainer to="/">
              <NavDropdown.Item>AR</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    
   </div>
   <SignInModal show={show} onShowChange={() => toggleModal()}/>
   </Navbar>
 
  //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //   <Navbar.Collapse id="responsive-navbar-nav">
  //     <Nav className="mr-auto">
  //       <Nav.Link href="#features">Features</Nav.Link>
  //       <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //         <NavDropdown.Divider />
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //       </NavDropdown>
  //     </Nav>
  //     <Nav>
  //       <Nav.Link href="#deets">More deets</Nav.Link>
  //       <Nav.Link eventKey={2} href="#memes">
  //         Dank memes
  //       </Nav.Link>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>


);
};

export default NavBar;
