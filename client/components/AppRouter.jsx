import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import SplashPage from "./splash/SplashPage";
import HomePageContainer from "./home/HomePageContainer";

const AppRouter = props => {
  const renderLoggedIn = () => {
    return (
      <div data-test="logged-in">
        <Switch>
          <Route path="/:mode/:id?" component={HomePageContainer} />
          <Redirect to="/youtube" />
        </Switch>
      </div>
    );
  };

  const renderLoggedOut = () => {
    return (
      <div data-test="logged-out">
        <Route exact path="/" render={() => <SplashPage formType="signup" />} />
        <Route
          exact
          path="/login"
          render={() => <SplashPage formType="login" />}
        />
      </div>
    );
  };

  return props.loggedIn ? renderLoggedIn() : renderLoggedOut();
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

export default withRouter(connect(mapStateToProps)(AppRouter));
