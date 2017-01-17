import { SET_SUBREDDIT_POSTS, SET_SUBREDDITS } from "./actionTypes";

export function subredditPostsReducer(
  state = [ { permalink: "", selftext: "", title: "", url: "", mediaEmbed: "" } ],
  action
) {
  switch (action.type) {
    case SET_SUBREDDIT_POSTS:
      return action.payload;
    default:
      return state;
  }
}

export function subredditsReducer(state = [], action) {
  switch (action.type) {
    case SET_SUBREDDITS:
      return action.payload;
    default:
      return state;
  }
}
