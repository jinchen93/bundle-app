import Request from "superagent";
import { SET_SIDEBAR_TOGGLE, GET_USER_STATUS } from "./actionTypes";

// ========== SIDEBAR ACTIONS ==========
export function toggleSidebar(status) {
  const newStatus = !status;
  return { type: SET_SIDEBAR_TOGGLE, payload: newStatus };
}

export function getUser() {
  return dispatch => {
    Request.get("/api/users").end((error, response) => {
      if (error) {
        console.log("Error occured while fetching user");
      } else {
        dispatch(setUser(response.body))
      }
    });
  };
}

export function setUser(userInfo) {
  return { type: GET_USER_STATUS, payload: userInfo }
}
