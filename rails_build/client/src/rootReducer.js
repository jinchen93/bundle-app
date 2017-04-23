import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { videosReducer, usernameInputReducer, channelsReducer } from "./youtube/reducers";
import { sidebarReducer, userReducer } from "./app/reducers";
import {
  subredditsReducer,
  subredditInputReducer,
  subredditPostsReducer,
  sortByReducer
} from "./reddit/reducers";

export const rootReducer = combineReducers({
  sidebarHidden: sidebarReducer,
  videos: videosReducer,
  usernameInput: usernameInputReducer,
  channels: channelsReducer,
  form: formReducer,
  subreddits: subredditsReducer,
  subredditInput: subredditInputReducer,
  subredditPosts: subredditPostsReducer,
  sortBy: sortByReducer,
  user: userReducer
});
