import { SET_SIDEBAR_TOGGLE } from "./actionTypes";

export function sidebarReducer(state = false, action) {
  switch (action.type) {
    case SET_SIDEBAR_TOGGLE:
      return action.payload;
    default:
      return state;
  }
}
