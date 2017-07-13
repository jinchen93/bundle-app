import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import youtubeReducer from "./youtube_reducer";
import redditReducer from "./reddit_reducer";
import twitchReducer from "./twitch_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  youtube: youtubeReducer,
  reddit: redditReducer,
  twitch: twitchReducer,
});

export default rootReducer;
