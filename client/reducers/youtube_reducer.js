import {
  RECEIVE_YOUTUBE_FOLLOWS,
  RECEIVE_YOUTUBE_VIDEOS,
  RECEIVE_YOUTUBE_CURRENT,
  RECEIVE_YOUTUBE_CHANNEL,
} from "../actions/youtube_actions";

export const _nullState = {
  channels: [],
  videos: [],
  current: null,
};

const youtubeReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_YOUTUBE_FOLLOWS:
      const current = Object.keys(action.channels)[0];
      return { ...state, channels: action.channels, current };
    case RECEIVE_YOUTUBE_CURRENT:
      return { ...state, current: action.current };
    case RECEIVE_YOUTUBE_VIDEOS:
      return { ...state, videos: action.videos };
    case RECEIVE_YOUTUBE_CHANNEL:
      const newChannels = {
        ...state.channels,
        [action.channel.id]: action.channel,
      };
      return { ...state, channels: newChannels };
    default:
      return state;
  }
};

export default youtubeReducer;
