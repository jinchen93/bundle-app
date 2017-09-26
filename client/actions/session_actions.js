// @flow

import * as SessionAPIUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const FETCHING_SESSION = "FETCHING_SESSION";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = (user: Object) => (dispatch: Function) => {
  dispatch(fetchingSession());
  return SessionAPIUtil.login(user).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveCurrentUser(res));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => (dispatch: Function) => {
  dispatch(fetchingSession());
  return SessionAPIUtil.logout().then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = (user: ?Object) => (dispatch: Function) => {
  dispatch(fetchingSession());
  return SessionAPIUtil.signup(user).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveCurrentUser(res));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const receiveCurrentUser = (currentUser: ?Object) => ({
  type: RECEIVE_CURRENT_USER,
  session: { currentUser, errors: [] },
});

export const receiveErrors = (errors: Array<string>) => ({
  type: RECEIVE_ERRORS,
  session: { currentUser: null, errors },
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchingSession = () => ({
  type: FETCHING_SESSION,
});
