import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import youtubeReducer from "./youtube_reducer";
import redditReducer from "./reddit_reducer";
import twitchReducer from "./twitch_reducer";
import loaderReducer from "./loader_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  youtube: youtubeReducer,
  reddit: redditReducer,
  twitch: twitchReducer,
  loader: loaderReducer,
});

export default rootReducer;
