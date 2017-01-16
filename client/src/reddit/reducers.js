import { SET_SUBREDDIT } from "./actionTypes";

export function subredditReducer(state = [], action) {
  switch (action.type) {
    case SET_SUBREDDIT:
      return action.payload;
    default:
      return state;
  }
}
