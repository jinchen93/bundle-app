import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Router, browserHistory } from "react-router";

import "./app/styles/style.css";
import routes from "./routes";
import { rootReducer } from "./rootReducer";
import { fetchChannelsUsernames } from "./youtube/actions";
import { fetchSubreddits } from "./reddit/actions";
import { getUser } from "./app/actions";

const middleware = [ReduxThunk];

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middleware));
}

store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector(".root")
);
