import React from "react";
import YoutubeApp from "./youtube/containers/app";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default () => {
  const navbar = <Navbar fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Youtube</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
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
