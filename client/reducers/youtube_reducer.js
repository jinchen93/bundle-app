// @flow

import {
  RECEIVE_YOUTUBE_FOLLOWS,
  RECEIVE_YOUTUBE_VIDEOS,
  RECEIVE_YOUTUBE_CHANNEL,
  DELETE_YOUTUBE_CHANNEL,
  RECEIVE_YOUTUBE_CURRENT_VIDEO,
} from "../actions/youtube_actions";

export const _nullState = {
  channels: {},
  videos: [],
};

const youtubeReducer = (state: Object = _nullState, action: Object) => {
  let newChannels;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_YOUTUBE_FOLLOWS:
      const currentChannel = Object.keys(action.channels)[0];
      return { ...state, channels: action.channels, currentChannel };
    case RECEIVE_YOUTUBE_CURRENT_VIDEO:
      return { ...state, currentVideo: action.idx };
    case RECEIVE_YOUTUBE_VIDEOS:
      return { ...state, videos: action.videos };
    case RECEIVE_YOUTUBE_CHANNEL:
      newChannels = {
        ...state.channels,
        [action.channel.id]: action.channel,
      };
      return { ...state, channels: newChannels };
    case DELETE_YOUTUBE_CHANNEL:
      newChannels = { ...state.channels };
      delete newChannels[action.id];
      return { ...state, channels: newChannels };
    default:
      return state;
  }
};

export default youtubeReducer;
