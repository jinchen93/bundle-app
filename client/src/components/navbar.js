import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router";

import { Navbar } from "react-bootstrap";
import { toggleSidebar } from "../actions";

class AppNavBar extends Component {
  render() {
    return (
      <Navbar fluid={true} className="appbar" fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img className="nav-brand-logo" src="bundle.svg" alt="Bundle logo" />
            </Link>
            <Link to="/">
              <span className="nav-brand-text">
                Bundle!
              </span>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <ul className="nav nav-pills navbar-nav">
          <li
            role="presentation"
            onClick={() => this.props.toggleSidebar(this.props.sidebarHidden)}
          >
            <a>
              <i className="fa fa-bars hamburger" aria-hidden="true"></i>
            </a>
          </li>
          <li role="presentation" className={this.props.path === "/youtube" ? "active" : ""}>
            <Link to="/youtube">
              Youtube
            </Link>
          </li>
        </ul>
      </Navbar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

function mapStateToProps(state) {
  return { sidebarHidden: state.sidebarHidden };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar)
