import React, { Component } from "react";
import { Link } from "react-router";
import "../styles/main.css";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class Main extends Component {
  render () {
    return (
      <div className="main__container">
        <Jumbotron className="main__container__header">
          <h1>Welcome to Bundle!</h1>
          <br />
          <h4>
            Bundle! merges all of your favorite sites together into one clean app.
          </h4>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={12} className="main__container__logo">
              <Link to="/youtube">
                <img className="main-logos__image" src="Youtube-Logo.png" alt="Youtube logo" />
              </Link>
            </Col>
            <Col md={12} className="main__container__logo reddit-logo">
              <Link to="/reddit">
                <img className="main-logos__image" src="Reddit-Logo.png" alt="Reddit logo" />
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main
