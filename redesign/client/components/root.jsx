import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const Root = ({ store }) =>
  <AppContainer>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </AppContainer>;

export default Root;
