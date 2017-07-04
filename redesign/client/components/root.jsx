import React from "react";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const Root = ({ store }) =>
  <AppContainer>
    <Provider store={store}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </Provider>
  </AppContainer>;

export default Root;
