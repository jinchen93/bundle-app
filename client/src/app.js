import React from "react";
import YoutubeApp from "./youtube/containers/app";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default () => {
  const navbar = <Navbar fixedTop={true}>
    <Nav activeKey={1} bsStyle="pills">
      <NavItem>
        <i className="fa fa-bars hamburger" aria-hidden="true"></i>
      </NavItem>
      <NavItem eventKey={1}>
        Youtube
      </NavItem>
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav pullRight={true}>
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
