import { RECEIVE_YOUTUBE_FOLLOWS } from "../actions/youtube_actions";

export const _nullState = {
  channels: [],
  videos: [],
};

const youtubeReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_YOUTUBE_FOLLOWS:
      return { channels: action.channels, videos: [] };
    default:
      return state;
  }
};

export default youtubeReducer;
