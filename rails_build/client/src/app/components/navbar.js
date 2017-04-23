import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import { logout, toggleSidebar, toggleNavbar } from "../actions";
import { browserHistory } from "react-router";

class AppNavBar extends Component {
  render() {
    const renderLogin = () => {
      return (
        <ul className="nav nav-pills">
          <li role="presentation">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li role="presentation">
            <Link to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      );
    };

    const renderLogout = () => {
      return (
        <ul className="nav nav-pills">
          <li role="presentation">
            <Link
              onClick={() => {
                this.props.logout(this.props.user.csrf_token);
                browserHistory.push("/");
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      );
    };

    return (
      <Navbar fluid={true} className="appbar" fixedTop={true} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="nav-brand-logo"
                src="bundle.svg"
                alt="Bundle logo"
              />
            </Link>
            <Link to="/">
              <span className="nav-brand-text">
                Bundle!
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <a
              className="nav-brand-hamburger"
              onClick={() => this.props.toggleSidebar(this.props.sidebarHidden)}
            >
              <i className="fa fa-bars hamburger" aria-hidden="true" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => this.props.toggleNavbar(this.props.navbarToggle)}
          />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.props.user.username === "Guest"
              ? renderLogin()
              : renderLogout()}
          </Nav>
          <ul className="nav nav-pills navbar-nav">
            <li
              role="presentation"
              className={this.props.path === "/youtube" ? "active" : ""}
            >
              <Link to="/youtube">
                Youtube
              </Link>
            </li>
            <li
              role="presentation"
              className={this.props.path === "/reddit" ? "active" : ""}
            >
              <Link to="/reddit">
                Reddit
              </Link>
            </li>
          </ul>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar, toggleNavbar, logout }, dispatch);
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);
