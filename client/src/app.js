import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import YoutubeApp from "./youtube/containers/app";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { toggleSidebar } from "./actions";

class App extends Component {
  render() {
    const navbar = (
      <Navbar fluid={true} className="appbar" fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img className="nav-brand-logo" src="bundle.svg" alt="Bundle logo" />
            </a>
            <a href="/">
              <span className="nav-brand-text">
                Bundle!
              </span>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav activeKey={1} bsStyle="pills">
          <NavItem onClick={() => this.props.toggleSidebar(this.props.sidebarHidden)}>
            <i className="fa fa-bars hamburger" aria-hidden="true"></i>
          </NavItem>
          <NavItem eventKey={1}>
            Youtube
          </NavItem>
        </Nav>
      </Navbar>
    );

    return (
      <div className="wrapper">
        {navbar}
        <YoutubeApp />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

function mapStateToProps(state) {
  return { sidebarHidden: state.sidebarHidden };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
