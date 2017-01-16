import Request from "superagent";
import { SET_SUBREDDIT } from "./actionTypes";

export function fetchSubreddit(subreddit) {
  return dispatch => {
    Request.get(`https://www.reddit.com/r/${subreddit}/top/.json`).end((err, res) => {
      dispatch(setSubreddits(JSON.parse(res.text).data.children));
    });
  };
}

export function setSubreddits(data) {
  return { type: SET_SUBREDDIT, payload: data };
}
