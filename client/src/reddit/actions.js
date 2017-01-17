import Request from "superagent";
import { SET_SUBREDDIT_POSTS, SET_SUBREDDITS } from "./actionTypes";

export function addSubreddit(subreddit) {
  return dispatch => {
    Request.post("/api/subreddits").send(subreddit).end(() => dispatch(fetchSubreddits));
  };
}

export function fetchSubreddits() {
  return dispatch => {
    Request.get("/api/subreddits").end((error, response) => {
      if (error) {
        console.log("An error occurred while fetching subreddits from database");
      } else {
        dispatch(setSubreddits(response.body));
      }
    });
  };
}

export function setSubreddits(subreddits) {
  return { type: SET_SUBREDDITS, payload: subreddits };
}

// --------- SUBREDDIT POSTS --------- //
export function fetchSubredditPosts(subreddit) {
  return dispatch => {
    Request.get(`https://www.reddit.com/r/${subreddit}/top/.json`).end((err, res) => {
      const fetchedData = JSON.parse(res.text).data.children;
      const postsData = fetchedData.map(post => {
        const postData = post.data;
        return {
          permalink: postData.permalink,
          selftext: postData.selftext,
          title: postData.title,
          url: postData.url,
          media: postData.media
        };
      });
      dispatch(setSubredditPosts(postsData));
    });
  };
}

export function setSubredditPosts(data) {
  return { type: SET_SUBREDDIT_POSTS, payload: data };
}
