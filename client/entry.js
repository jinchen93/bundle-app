import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
require("./styles/index.scss");

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  ReactDOM.render(<Root store={store} />, root);

  if (module.hot) {
    module.hot.accept("./components/Root", () => {
      /*eslint-disable no-unused-vars*/
      const NextApp = require("./components/Root").default;
      /*eslint-enable no-unused-vars*/

      ReactDOM.render(<Root store={store} />, root);
    });
  }
});
