// @flow

import {
  RECEIVE_TWITCH_FOLLOWS,
  RECEIVE_TWITCH_CHANNEL,
  DELETE_TWITCH_CHANNEL,
  RECEIVE_TWITCH_TOP_STREAMS,
  RECEIVE_TWITCH_STREAM,
} from "../actions/twitch_actions";

export const _nullState = {
  channels: {},
  stream: null,
  topStreams: [],
};

const twitchReducer = (state: Object = _nullState, action: Object) => {
  let newChannels;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TWITCH_FOLLOWS:
      return { ...state, channels: action.channels };
    case RECEIVE_TWITCH_CHANNEL:
      newChannels = { ...state.channels, [action.channel.id]: action.channel };
      return { ...state, channels: newChannels };
    case DELETE_TWITCH_CHANNEL:
      newChannels = { ...state.channels };
      delete newChannels[action.id];
      return { ...state, channels: newChannels };
    case RECEIVE_TWITCH_TOP_STREAMS:
      return { ...state, topStreams: action.streams };
    case RECEIVE_TWITCH_STREAM:
      return { ...state, stream: action.stream };
    default:
      return state;
  }
};

export default twitchReducer;
