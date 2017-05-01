import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import "../styles/main.css";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <div
        className={`main__container ${this.props.navbarToggle === true ? "main__container--toggled" : ""}`}
      >
        <Jumbotron className="main__container__header">
          <h1>Welcome to Bundle!</h1>
          <br />
          <h4>
            Bundle! merges all of your favorite sites together into one clean app.
          </h4>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={1} />
            <Col md={3} className="main__container__logo">
              <Link to="/youtube">
                <img
                  className="main-logos__image youtube-image"
                  src="Youtube-Logo.png"
                  alt="Youtube logo"
                />
              </Link>
            </Col>
            <Col md={3} className="main__container__logo reddit-logo">
              <Link to="/reddit">
                <img
                  className="main-logos__image reddit-image"
                  src="Reddit-Logo.png"
                  alt="Reddit logo"
                />
              </Link>
            </Col>
            <Col md={3} className="main__container__logo twitch-logo">
              <Link to="/twitch">
                <img
                  className="main-logos__image twitch-image"
                  src="Twitch-Logo.png"
                  alt="Twitch logo"
                />
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navbarToggle: state.navbarToggle
  };
}

export default connect(mapStateToProps)(Main);
