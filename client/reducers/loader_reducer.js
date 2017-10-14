// @flow

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
import {
  LOADING_TWITCH_TOP_STREAMS,
  RECEIVE_TWITCH_TOP_STREAMS,
  LOADING_TWITCH_STREAM,
  RECEIVE_TWITCH_STREAM,
} from "../actions/twitch_actions";

export const _nullState = {
  youtubeVideos: false,
  redditThreads: false,
  redditComments: false,
  twitchTopStreams: false,
  twitchStream: false,
};

const loaderReducer = (state: Object = _nullState, action: Object) => {
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
    case LOADING_TWITCH_TOP_STREAMS:
      return { ...state, twitchTopStreams: true };
    case RECEIVE_TWITCH_TOP_STREAMS:
      return { ...state, twitchTopStreams: false };
    case LOADING_TWITCH_STREAM:
      return { ...state, twitchStream: true };
    case RECEIVE_TWITCH_STREAM:
      return { ...state, twitchStream: false };
    default:
      return state;
  }
};

export default loaderReducer;
