import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router";

import { Navbar, Nav } from "react-bootstrap";
import { logout, toggleSidebar, toggleNavbar } from "../actions";
import { browserHistory } from "react-router";

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashLoginSuccess: false,
      flashLogoutSuccess: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    // csrf token conditional prevents loginSuccess from triggering on initial
    // rendering of the page.
    if (
      nextProps.user.username !== this.props.user.username &&
      this.props.user.csrf_token
    ) {
      browserHistory.push("/");
      if (this.props.user.username === "Guest") {
        this.loginSuccess();
      } else {
        this.logoutSuccess();
      }
    }
  }

  logoutSuccess() {
    this.setState({ flashLogoutSuccess: true });
    setTimeout(() => {
      this.setState({ flashLogoutSuccess: false });
    }, 3000);
  }

  loginSuccess() {
    this.setState({ flashLoginSuccess: true });
    setTimeout(() => {
      this.setState({ flashLoginSuccess: false });
    }, 3000);
  }

  render() {
    const renderLogin = () => {
      return (
        <ul className="nav nav-pills">
          <li id="username">
            <div>
              Hi {this.props.user.username}
            </div>
          </li>
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
        <ul active="" className="nav nav-pills">
          <li id="username">
            <div>
              Hi {this.props.user.username}
            </div>
          </li>
          <li role="presentation">
            <Link
              onClick={() => {
                this.props.logout(this.props.user.csrf_token);
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      );
    };

    const flashLogin = () => {
      if (this.state.flashLoginSuccess) {
        return (
          <div
            className="flash login"
            onClick={() => this.setState({ flashLoginSuccess: false })}
          >
            Login successful!
          </div>
        );
      }
    };

    const flashLogout = () => {
      if (this.state.flashLogoutSuccess) {
        return (
          <div
            className="flash logout"
            onClick={() => this.setState({ flashLogoutSuccess: false })}
          >
            Logout successful!
          </div>
        );
      }
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
          <Nav pullRight={true}>

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
                <img
                  className="navbar-logo"
                  src="Youtube-Logo.png"
                  alt="Youtube logo"
                />
                Youtube
              </Link>
            </li>
            <li
              role="presentation"
              className={this.props.path === "/reddit" ? "active" : ""}
            >
              <Link to="/reddit">
                <img
                  className="navbar-logo"
                  src="Reddit-Logo.png"
                  alt="Reddit logo"
                />
                Reddit
              </Link>
            </li>
            <li
              role="presentation"
              className={this.props.path === "/twitch" ? "active" : ""}
            >
              <Link to="/twitch">
                <img
                  className="navbar-logo"
                  src="Twitch-Logo.png"
                  alt="Twitch logo"
                />
                Twitch
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
        {flashLogin()}
        {flashLogout()}
      </Navbar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSidebar,
      toggleNavbar,
      logout,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);
