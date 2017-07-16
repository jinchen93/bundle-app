import {
  RECEIVE_TWITCH_FOLLOWS,
  DELETE_TWITCH_CHANNEL,
  RECEIVE_TWITCH_TOP_STREAMS,
} from "../actions/twitch_actions";

export const _nullState = {
  channels: {},
  stream: null,
  topStreams: [],
};

const twitchReducer = (state = _nullState, action) => {
  let newChannels;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TWITCH_FOLLOWS:
      return { channels: action.channels, current: null };
    case DELETE_TWITCH_CHANNEL:
      newChannels = { ...state.channels };
      delete newChannels[action.id];
      return { ...state, channels: newChannels };
    case RECEIVE_TWITCH_TOP_STREAMS:
      return { ...state, topStreams: action.streams };
    default:
      return state;
  }
};

export default twitchReducer;
