import {
  SET_TWITCH_CHANNELS,
  SELECT_TWITCH_CHANNEL,
  ON_TWITCH_INPUT,
} from './actionTypes';

export function twitchChannelsReducer(state = {all: [], current: 0}, action) {
  switch (action.type) {
    case SET_TWITCH_CHANNELS:
      return {...state, all: action.payload};
    case SELECT_TWITCH_CHANNEL:
      return {...state, current: action.payload};
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
