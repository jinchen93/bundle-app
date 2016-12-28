import { SET_SIDEBAR_TOGGLE } from './actionTypes';

export const sidebar = (state = true, action) => {
  switch (action.type) {
    case SET_SIDEBAR_TOGGLE:
      return (!state);
    default:
      return state;
  }
};