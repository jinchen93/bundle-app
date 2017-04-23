import Request from "superagent";
require("superagent-csrf")(Request);
import {
  SET_SIDEBAR_TOGGLE,
  SET_NAVBAR_TOGGLE,
  GET_USER_STATUS,
  SIGNUP
} from "./actionTypes";

// ========== SIDEBAR ACTIONS ==========
export function toggleSidebar(status) {
  const newStatus = !status;
  return { type: SET_SIDEBAR_TOGGLE, payload: newStatus };
}

export function toggleNavbar(status) {
  const newStatus = !status;
  return { type: SET_NAVBAR_TOGGLE, payload: newStatus };
}

export function getUser() {
  return dispatch => {
    Request.get("/api/users").end((error, response) => {
      if (error) {
        console.log("Error occured while fetching user");
      } else {
        dispatch(setUser(response.body));
      }
    });
  };
}

export function setUser(userInfo) {
  return { type: GET_USER_STATUS, payload: userInfo };
}

export function signup(params, csrf_token) {
  return dispatch => {
    console.log(params);
    console.log(csrf_token);
    Request.post("/api/users")
      .csrf(csrf_token)
      .send(params)
      .end((error, response) => {
        if (error) {
          console.log(error);
        } else {
          dispatch(login(params, csrf_token));
        }
      });
  };
}

export function login(params, csrf_token) {
  return dispatch => {
    Request.post("/api/session")
      .csrf(csrf_token)
      .send(params)
      .end((error, response) => {
        if (error) {
          console.log(error);
        } else {
          dispatch(getUser());
        }
      });
  };
}

export function logout(csrf_token) {
  return dispatch => {
    dispatch(
      login({ user: { username: "Guest", password: "password" } }, csrf_token)
    );
  };
}
