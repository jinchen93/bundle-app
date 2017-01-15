import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { videosReducer, usernameInputReducer, channelsReducer } from "./youtube/reducers";
import { sidebarReducer } from "./reducers";

export const rootReducer = combineReducers({
  sidebarHidden: sidebarReducer,
  videos: videosReducer,
  usernameInput: usernameInputReducer,
  channels: channelsReducer,
  form: formReducer
});
