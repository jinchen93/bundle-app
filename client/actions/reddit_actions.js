// @flow

import * as RedditAPIUtil from "../utils/reddit_api_util";

export const RECEIVE_REDDIT_FOLLOWS: string = "RECEIVE_REDDIT_FOLLOWS";
export const RECEIVE_SUBREDDIT_THREADS: string = "RECEIVE_SUBREDDIT_THREADS";
export const RECEIVE_REDDIT_COMMENTS: string = "RECEIVE_REDDIT_COMMENTS";
export const RECEIVE_SUBREDDIT: string = "RECEIVE_SUBREDDIT";
export const DELETE_SUBREDDIT: string = "DELETE_SUBREDDIT";
export const LOADING_REDDIT_THREADS: string = "LOADING_REDDIT_THREADS";
export const LOADING_REDDIT_COMMENTS: string = "LOADING_REDDIT_COMMENTS";

export const receiveRedditFollows = (subreddits: Object) => ({
  type: RECEIVE_REDDIT_FOLLOWS,
  subreddits,
});

export const receiveSubredditThreads = (threads: Array<Object>) => ({
  type: RECEIVE_SUBREDDIT_THREADS,
  threads,
});

export const receiveRedditComments = (comments: Object) => ({
  type: RECEIVE_REDDIT_COMMENTS,
  comments,
});

export const receiveSubreddit = (subreddit: Object) => ({
  type: RECEIVE_SUBREDDIT,
  subreddit,
});

export const deleteSubreddit = (id: number) => ({
  type: DELETE_SUBREDDIT,
  id,
});

export const loadingRedditThreads = () => ({
  type: LOADING_REDDIT_THREADS,
});

export const loadingRedditComments = () => ({
  type: LOADING_REDDIT_COMMENTS,
});

export const fetchRedditFollows = () => (dispatch: Function) =>
  RedditAPIUtil.fetchRedditFollows().then(subreddits =>
    dispatch(receiveRedditFollows(subreddits))
  );

export const fetchSubredditThreads = (id: number) => (dispatch: Function) => {
  dispatch(loadingRedditThreads());
  return RedditAPIUtil.fetchSubredditThreads(id).then(threads =>
    dispatch(receiveSubredditThreads(threads))
  );
};

export const fetchRedditComments = (id: number) => (dispatch: Function) => {
  dispatch(loadingRedditComments());
  return RedditAPIUtil.fetchRedditComments(id).then(comments =>
    dispatch(receiveRedditComments(comments))
  );
};

export const followSubreddit = (name: string) => (dispatch: Function) =>
  RedditAPIUtil.followSubreddit(name).then(subreddit =>
    dispatch(receiveSubreddit(subreddit))
  );

export const removeSubreddit = (id: number) => (dispatch: Function) =>
  RedditAPIUtil.removeSubreddit(id).then(id => dispatch(deleteSubreddit(id)));

export const fetchAllSubreddit = () => (dispatch: Function) => {
  dispatch(loadingRedditThreads());
  return RedditAPIUtil.fetchAllSubreddit().then(threads =>
    dispatch(receiveSubredditThreads(threads))
  );
};
