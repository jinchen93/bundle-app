import React from "react";
import { HashRouter, Route } from "react-router-dom";
import SplashPage from "./splash/SplashPage";

class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route to="/" component={SplashPage} />
      </HashRouter>
    );
  }
}

export default AppRouter;
