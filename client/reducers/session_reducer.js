import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
} from "../actions/session_actions";
import merge from "lodash/merge";

const _nullState = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.session);
    case RECEIVE_ERRORS:
      return merge({}, action.session);
    case CLEAR_ERRORS:
      const oldState = merge({}, state);
      oldState.errors = [];
      return oldState;
    default:
      return state;
  }
};

export default sessionReducer;
