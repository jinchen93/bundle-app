import { SET_SIDEBAR_TOGGLE, SELECT_CHANNEL } from './actionTypes';
import { CHANNELS } from './constants';

export const sidebar = (state = false, action) => {
  switch (action.type) {
    case SET_SIDEBAR_TOGGLE:
      return (!state);
    default:
      return state;
  }
};

export const channels = (state = CHANNELS) => {
  return state;
};

export const channel = (state = CHANNELS[0], action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
};