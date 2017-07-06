import Request from "superagent";
require("superagent-csrf")(Request);
import {
  SET_SUBREDDIT_POSTS,
  SET_SUBREDDITS,
  ON_SUBREDDIT_INPUT,
  SELECT_SUBREDDIT,
  SET_SUBREDDIT_SORT,
} from "./actionTypes";

export function addSubreddit(subreddit, csrf_token) {
  return dispatch => {
    const newSubreddit = { subreddit: subreddit };
    Request.post("/api/subreddits")
      .csrf(csrf_token)
      .send(newSubreddit)
      .end(() => dispatch(fetchSubreddits()));
  };
}

export function fetchSubreddits() {
  return dispatch => {
    Request.get("/api/subreddits").end((error, response) => {
      if (error) {
        console.log(
          "An error occurred while fetching subreddits from database"
        );
      } else {
        dispatch(setSubreddits(response.body));
      }
    });
  };
}

export function setSubreddits(subreddits) {
  return { type: SET_SUBREDDITS, payload: subreddits };
}

export function deleteAllSubreddits(csrf_token) {
  return dispatch => {
    Request.delete("/api/subreddits")
      .csrf(csrf_token)
      .end((error, response) => {
        if (error) {
          console.log(
            "An error occured while deleting all subreddits from database"
          );
        } else {
          dispatch(fetchSubreddits());
        }
      });
  };
}

export function deleteSubreddit(id, csrf_token) {
  return dispatch => {
    Request.delete(`/api/subreddits/${id}`)
      .csrf(csrf_token)
      .end((error, response) => {
        if (error) {
          console.log(
            "An error occured while trying to delete subreddit from database"
          );
        } else {
          dispatch(fetchSubreddits());
        }
      });
  };
}

export function selectSubreddit(position) {
  return { type: SELECT_SUBREDDIT, payload: position };
}

// --------- SUBREDDIT POSTS --------- //
export function fetchSubredditPosts(subreddit, time) {
  return dispatch => {
    Request.get(
      `https://www.reddit.com/r/${subreddit}/top.json?t=${time}`
    ).end((err, res) => {
      const fetchedData = res.body.data.children;
      const postsData = fetchedData.map(post => {
        const postData = post.data;
        return {
          permalink: postData.permalink,
          preview: postData.preview,
          selftext: postData.selftext,
          title: postData.title,
          url: postData.url,
          media: postData.media,
          id: postData.id,
        };
      });
      dispatch(setSubredditPosts(postsData));
    });
  };
}

export function setSubredditPosts(data) {
  return { type: SET_SUBREDDIT_POSTS, payload: data };
}

export function onSubredditInput(event) {
  return { type: ON_SUBREDDIT_INPUT, payload: event };
}

// --------- SUBREDDIT POST COMMENTS --------- //
export function fetchPostComments(permalink) {
  const url = `www.reddit.com${permalink}.json`;
  console.log(url);
  Request.get(url).end((error, response) => {
    const fetchedData = JSON.parse(response.text).data.children;
    console.log(fetchedData);
  });
}

// --------- SUBREDDIT POST SORT --------- //
export function setSortBy(time) {
  return { type: SET_SUBREDDIT_SORT, payload: time };
}
