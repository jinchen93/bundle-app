import React from "react";
import YoutubeApp from "./youtube/containers/app";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default () => {
  const navbar = <Navbar fixedTop={true}>
    <Nav activeKey={1} bsStyle="pills">
      <NavItem>
        <i className="fa fa-bars hamburger" aria-hidden="true"></i>
      </NavItem>
      <NavItem eventKey={1}>
        Youtube
      </NavItem>
      <NavItem eventKey={2}>
        Reddit
      </NavItem>
      <Navbar.Toggle />
    </Nav>
    <Navbar.Collapse>
      <Nav pullRight={true}>
        <NavItem eventKey={3} href="#">Login</NavItem>
        <NavItem eventKey={4} href="#">Signup</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

  return (
    <div className="wrapper">
      {navbar}
      <YoutubeApp />
    </div>
  );
}
