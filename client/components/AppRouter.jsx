import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import SplashPage from "./splash/SplashPage";
import HomePageContainer from "./home/HomePageContainer";

class AppRouter extends React.Component {
  componentDidUpdate() {
    console.log("update");
  }

  renderLoggedIn() {
    return (
      <div>
        <Route exact path="/" component={HomePageContainer} />
      </div>
    );
  }

  renderLoggedOut() {
    return (
      <div>
        <Route exact path="/" component={SplashPage} />
      </div>
    );
  }

  render() {
    return this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut();
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

export default connect(mapStateToProps)(AppRouter);
