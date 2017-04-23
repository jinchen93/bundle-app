import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../styles/form.css";
import {
  Jumbotron,
  Grid,
  Row,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import { login } from "../actions";
import { browserHistory } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.username !== this.props.user.username) {
      browserHistory.push("/");
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div
        className={`main__container ${this.props.navbarToggle === true ? "main__container--toggled" : ""}`}
      >
        <Jumbotron className="form">
          <Grid>
            <Row>
              <h2>Login</h2>
            </Row>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.login(
                  {
                    user: {
                      username: this.state.username,
                      password: this.state.password
                    }
                  },
                  this.props.user.csrf_token
                );
              }}
            >
              <Row>
                <FormControl
                  id="user-input"
                  type="text"
                  placeholder="Username"
                  onChange={this.update("username")}
                  value={this.state.username}
                />
              </Row>
              <Row>
                <FormControl
                  id="user-input"
                  type="password"
                  placeholder="Password"
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </Row>
              <Row>
                <Button block={true} type="submit" className="form-submit">
                  Submit
                </Button>
              </Row>
            </form>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navbarToggle: state.navbarToggle,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
