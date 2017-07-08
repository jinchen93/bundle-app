import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import youtubeReducer from "./youtube_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  youtube: youtubeReducer,
});

export default rootReducer;
