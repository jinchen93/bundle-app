import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { videosReducer, usernameInputReducer, channelsReducer } from "./youtube/reducers";
import { sidebarReducer } from "./reducers";
import { subredditsReducer, subredditInputReducer } from "./reddit/reducers";

export const rootReducer = combineReducers({
  sidebarHidden: sidebarReducer,
  videos: videosReducer,
  usernameInput: usernameInputReducer,
  channels: channelsReducer,
  form: formReducer,
  subreddits: subredditsReducer,
  subredditInput: subredditInputReducer
});
