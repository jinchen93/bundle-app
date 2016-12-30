import { 
  SET_SIDEBAR_TOGGLE,
  SET_CHANNELS,
  SELECT_CHANNEL,
  SELECT_VIDEO,
  SET_VIDEOS,
  ADD_CHANNEL,
  ON_USERNAME_INPUT
} from './actionTypes';
import { CHANNELS } from './constants';

export const sidebar = (state = false, action) => {
  switch (action.type) {
    case SET_SIDEBAR_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};

export const channels = (state = CHANNELS, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      return action.payload;
    case ADD_CHANNEL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const channel = (state = 0, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
};

export const video = (state = 0, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

export const videos = (state = [], action) => {
  switch(action.type) {
    case SET_VIDEOS:
      return action.payload;
    default:
      return state;
  }
};

export const usernameInput = (state = '', action) => {
  switch(action.type) {
    case ON_USERNAME_INPUT:
      return action.payload;
    default:
      return state;
  }
};