import * as RedditAPIUtil from "../utils/reddit_api_util";

export const RECEIVE_REDDIT_FOLLOWS = "RECEIVE_REDDIT_FOLLOWS";
export const RECEIVE_SUBREDDIT_THREADS = "RECEIVE_SUBREDDIT_THREADS";
export const RECEIVE_CURRENT_SUBREDDIT = "RECEIVE_REDDIT_CURRENT";
export const RECEIVE_SUBREDDIT = "RECEIVE_SUBREDDIT";
export const DELETE_SUBREDDIT = "DELETE_SUBREDDIT";

export const fetchRedditFollows = () => dispatch =>
  RedditAPIUtil.fetchRedditFollows().then(subreddits =>
    dispatch(receiveRedditFollows(subreddits))
  );

export const fetchSubredditThreads = id => dispatch =>
  RedditAPIUtil.fetchSubredditThreads(id).then(threads =>
    dispatch(receiveSubredditThreads(threads))
  );

export const followSubreddit = name => dispatch =>
  RedditAPIUtil.followSubreddit(name).then(subreddit =>
    dispatch(receiveSubreddit(subreddit))
  );

export const removeSubreddit = id => dispatch =>
  RedditAPIUtil.removeSubreddit(id).then(id => dispatch(deleteSubreddit(id)));

export const receiveRedditFollows = subreddits => ({
  type: RECEIVE_REDDIT_FOLLOWS,
  subreddits,
});

export const receiveCurrentSubreddit = id => ({
  type: RECEIVE_CURRENT_SUBREDDIT,
  id,
});

export const receiveSubredditThreads = threads => ({
  type: RECEIVE_SUBREDDIT_THREADS,
  threads,
});

export const receiveSubreddit = subreddit => ({
  type: RECEIVE_SUBREDDIT,
  subreddit,
});

export const deleteSubreddit = id => ({
  type: DELETE_SUBREDDIT,
  id,
});
