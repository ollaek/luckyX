import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Nav } from "react-bootstrap";

type NavBarElementProps = {
  title: string;
  hasIcon: boolean;
  IconClass?: string;
  Icon?: string;
  Link: string;
};

const NavBarElement = (navProps: NavBarElementProps) => {
  let item;
  if (navProps.hasIcon) {
    item = (
      <LinkContainer to={navProps.Link}>
        <Nav.Link className="" >
          {" "}
          <img
            className={navProps.IconClass}
            src={navProps.Icon}
            alt={navProps.title}
          />
          {navProps.title}
        </Nav.Link>
      </LinkContainer>
    );
  } else {
    item = (
      <LinkContainer to={navProps.Link}>
        <Nav.Link >{navProps.title}</Nav.Link>
      </LinkContainer>
    );
  }

  return <>{item}</>;
};

export default NavBarElement;
