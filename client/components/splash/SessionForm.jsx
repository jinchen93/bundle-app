import React from "react";
import { redirectTo } from "../../utils/router_util";

const defaultState = { username: "", password: "" };

class SessionForm extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formType } = this.props;

    if (formType === "signup") {
      this.props.signup(this.state).then(() => redirectTo("/", this.props));
    } else if (formType === "login") {
      this.props.login(this.state).then(() => redirectTo("/", this.props));
    }
  }

  handleDemoLogin() {
    this.props.loginDemo().then(() => redirectTo("/", this.props));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="splash-form-wrapper">
        {this.renderHeader(formType)}
        {this.renderErrors()}
        {this.renderForm(formType)}
      </div>
    );
  }

  renderHeader(formType) {
    if (formType === "signup") {
      return <h4>Welcome to BundleMe!</h4>;
    } else if (formType === "login") {
      return <h4>Log in to see more</h4>;
    }
  }

  renderErrors() {
    const { errors } = this.props;

    if (errors.length) {
      return (
        <ul>
          {errors.map((error, idx) =>
            <li key={`error-${idx}`}>
              {error}
            </li>
          )}
        </ul>
      );
    } else {
      return null;
    }
  }

  renderForm(formType) {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <div className="focus-bar" />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder={
              formType === "signup" ? "Create a password" : "Password"
            }
          />
          <div className="focus-bar" />
        </div>
        <button>SUBMIT</button>
        <div className="demo" onClick={this.handleDemoLogin}>
          TRY A DEMO
        </div>
        <a className="github" href="https://github.com/jinchen93/bundle-app">
          Made by Jin Chen
        </a>
      </form>
    );
  }
}

export default SessionForm;
