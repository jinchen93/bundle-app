import { expect } from "../test_helper";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  FETCHING_SESSION,
  receiveCurrentUser,
  receiveErrors,
  clearErrors,
  fetchingSession,
} from "../../actions/session_actions";

describe("session actions", () => {
  describe("receiveCurrentUser", () => {
    it("has the correct type", () => {
      const action = receiveCurrentUser();
      expect(action.type).to.equal(RECEIVE_CURRENT_USER);
    });

    it("has the correct payload", () => {
      const user = { id: 1, username: "guest" };
      const action = receiveCurrentUser(user);
      expect(action.session.currentUser).to.equal(user);
    });
  });

  describe("receiveErrors", () => {
    it("has the correct type", () => {
      const action = receiveErrors();
      expect(action.type).to.equal(RECEIVE_ERRORS);
    });

    it("has the correct payload", () => {
      const errors = ["Error1", "Error2"];
      const action = receiveErrors(errors);
      expect(action.session.errors).to.equal(errors);
    });
  });

  describe("clearErrors", () => {
    it("has the correct type", () => {
      const action = clearErrors();
      expect(action.type).to.equal(CLEAR_ERRORS);
    });
  });

  describe("fetchingSession", () => {
    it("has the correct type", () => {
      const action = fetchingSession();
      expect(action.type).to.equal(FETCHING_SESSION);
    });
  });
});
