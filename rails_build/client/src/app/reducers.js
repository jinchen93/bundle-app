import {
  SET_SIDEBAR_TOGGLE,
  SET_NAVBAR_TOGGLE,
  GET_USER_STATUS
} from "./actionTypes";

const defaultUserState = { csrf_token: null, username: null };

export function sidebarReducer(state = false, action) {
  switch (action.type) {
    case SET_SIDEBAR_TOGGLE:
      return action.payload;
    default:
      return state;
  }
}

export function navbarReducer(state = false, action) {
  switch (action.type) {
    case SET_NAVBAR_TOGGLE:
      return action.payload;
    default:
      return state;
  }
}

export function userReducer(state = defaultUserState, action) {
  switch (action.type) {
    case GET_USER_STATUS:
      return action.payload;
    default:
      return state;
  }
}
