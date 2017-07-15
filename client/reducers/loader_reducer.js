import {
  LOADING_YOUTUBE_VIDEOS,
  RECEIVE_YOUTUBE_VIDEOS,
} from "../actions/youtube_actions";
import {
  LOADING_REDDIT_THREADS,
  LOADING_REDDIT_COMMENTS,
  RECEIVE_SUBREDDIT_THREADS,
  RECEIVE_REDDIT_COMMENTS,
} from "../actions/reddit_actions";

export const _nullState = {
  youtubeVideos: false,
  redditThreads: false,
  redditComments: false,
};

const loaderReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOADING_YOUTUBE_VIDEOS:
      return { ...state, youtubeVideos: true };
    case RECEIVE_YOUTUBE_VIDEOS:
      return { ...state, youtubeVideos: false };
    case LOADING_REDDIT_THREADS:
      return { ...state, redditThreads: true };
    case RECEIVE_SUBREDDIT_THREADS:
      return { ...state, redditThreads: false };
    case LOADING_REDDIT_COMMENTS:
      return { ...state, redditComments: true };
    case RECEIVE_REDDIT_COMMENTS:
      return { ...state, redditComments: false };
    default:
      return state;
  }
};

export default loaderReducer;
