import {
  SET_TWITCH_CHANNELS,
  SELECT_TWITCH_CHANNEL,
  ON_TWITCH_INPUT,
  SET_TWITCH_CHANNEL,
} from './actionTypes';

export function twitchChannelsReducer(state = {all: [], current: 0}, action) {
  switch (action.type) {
    case SET_TWITCH_CHANNELS:
      return {...state, all: action.payload};
    case SELECT_TWITCH_CHANNEL:
      return {...state, current: action.payload};
    case SET_TWITCH_CHANNEL:
      return {
        ...state,
        all: state.all.map(channel => {
          if (channel.id === action.payload.id) {
            return action.payload;
          } else {
            return channel;
          }
        }),
      };
    default:
      return state;
  }
}

export function twitchInputReducer(state = '', action) {
  switch (action.type) {
    case ON_TWITCH_INPUT:
      return action.payload;
    default:
      return state;
  }
}
