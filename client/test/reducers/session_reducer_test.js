import { expect } from "../test_helper";
import sessionReducer, { _nullState } from "../../reducers/session_reducer";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
} from "../../actions/session_actions";

describe("Session Reducer", () => {
  it("handles action with unknown type", () => {
    expect(sessionReducer(undefined, {})).to.eql(_nullState);
  });

  it("handles action of type RECEIVE_CURRENT_USER", () => {
    const session = {
      currentUser: { id: 1, username: "guest" },
      errors: [],
    };
    const action = {
      type: RECEIVE_CURRENT_USER,
      session,
    };
    expect(sessionReducer({}, action)).to.eql(session);
  });

  it("handles action of type RECEIVE_ERRORS", () => {
    const session = {
      currentUser: null,
      errors: ["Error"],
    };
    const action = {
      type: RECEIVE_ERRORS,
      session,
    };
    expect(sessionReducer({}, action)).to.eql(session);
  });

  it("handles action of type CLEAR_ERRORS", () => {
    const session = {
      currentUser: null,
      errors: ["Error"],
    };
    const action = {
      type: CLEAR_ERRORS,
    };
    expect(sessionReducer(session, action).errors).to.eql([]);
  });
});
