import React from "react";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import AppRouter from "./AppRouter";

const Root = ({ store }) =>
  <AppContainer>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </AppContainer>;

export default Root;
