import {
  SET_SUBREDDIT_POSTS,
  SET_SUBREDDITS,
  ON_SUBREDDIT_INPUT,
  SELECT_SUBREDDIT
} from "./actionTypes";

export function subredditsReducer(state = { all: [ "" ], current: 0 }, action) {
  switch (action.type) {
    case SET_SUBREDDITS:
      return { ...state, all: action.payload };
    case SELECT_SUBREDDIT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}

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

export function subredditInputReducer(state = "", action) {
  switch (action.type) {
    case ON_SUBREDDIT_INPUT:
      return action.payload;
    default:
      return state;
  }
}
