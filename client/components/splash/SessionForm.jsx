import React from "react";
const defaultState = { username: "", password: "" };

class SessionForm extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push("/"));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="splash-form-wrapper">
        <h3>Welcome to BundleMe!</h3>
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
              placeholder="Create a password"
            />
            <div className="focus-bar" />
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
