import React, { Component } from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import { signup } from "../../actions";
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";
import SubmitButton from "./submitButton";
import MainContainer from "../mainContainer";
import FormBlock from "./formBlock";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.submitForm = this.submitForm.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.signup(
      {
        user: {
          username: this.state.username,
          password: this.state.password,
        },
      },
      this.props.user.csrf_token
    );
  }

  render() {
    return (
      <MainContainer navbarToggle={this.props.navbarToggle}>
        <FormBlock>
          <Row><h2>Sign Up</h2></Row>
          <form onSubmit={this.submitForm}>
            <UsernameInput
              onUsernameInput={this.update("username")}
              usernameVal={this.state.username}
            />
            <PasswordInput
              onPasswordInput={this.update("password")}
              passwordVal={this.state.password}
            />
            <SubmitButton />
          </form>
        </FormBlock>
      </MainContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    navbarToggle: state.navbarToggle,
    user: state.user,
  };
}

export default connect(mapStateToProps, { signup })(Signup);
