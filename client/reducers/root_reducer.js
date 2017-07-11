import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import youtubeReducer from "./youtube_reducer";
import redditReducer from "./reddit_reducer";
import twitchReducer from "./twitch_reducer";
import modeReducer from "./mode_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  youtube: youtubeReducer,
  reddit: redditReducer,
  twitch: twitchReducer,
  mode: modeReducer,
});

export default rootReducer;
