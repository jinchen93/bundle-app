import { RECEIVE_TWITCH_FOLLOWS } from "../actions/twitch_actions";

export const _nullState = {
  channels: [],
  videos: [],
  current: null,
};

const twitchReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TWITCH_FOLLOWS:
      return { channels: action.channels, current: null };
    default:
      return state;
  }
};

export default twitchReducer;
