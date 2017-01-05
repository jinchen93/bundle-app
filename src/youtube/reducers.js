import { 
  SET_SIDEBAR_TOGGLE,
  SET_CHANNELS,
  SELECT_CHANNEL,
  SELECT_VIDEO,
  SET_VIDEOS,
  ADD_CHANNEL,
  ON_USERNAME_INPUT
} from './actionTypes';

export function channels(state = { all: [], current: 0 }, action) {
  switch (action.type) {
    case SET_CHANNELS:
      return { ...state, asd: action.payload }
    case SELECT_CHANNEL:
      return { ...state, current: action.payload }
    case ADD_CHANNEL:
      return { ...state, all: [...state.all, action.payload] }
    default:
      return state;
  }
}

export const sidebar = (state = false, action) => {
  switch (action.type) {
    case SET_SIDEBAR_TOGGLE:
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