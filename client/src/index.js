import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Router, browserHistory } from "react-router";

import "./styles/style.css";
import routes from "./routes";
import { rootReducer } from "./rootReducer";
import { fetchChannelsUsernames } from "./youtube/actions";
import { fetchSubreddits } from "./reddit/actions";

const middleware = [ ReduxThunk ];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

store.dispatch(fetchChannelsUsernames());
store.dispatch(fetchSubreddits());

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  ),
  document.querySelector(".root")
);
