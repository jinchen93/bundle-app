import sinon from "sinon";
import * as SessionAPIUtil from "../../utils/session_api_util";
import { expect, store } from "../test_helper";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  FETCHING_SESSION,
  receiveCurrentUser,
  receiveErrors,
  clearErrors,
  fetchingSession,
  login,
  signup,
  logout,
} from "../../actions/session_actions";

describe("Session Actions", () => {
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

  describe("async thunk actions", () => {
    const user = {};

    describe("login", () => {
      let loginStub;
      beforeEach(() => {
        loginStub = sinon.stub(SessionAPIUtil, "login");
      });

      afterEach(() => {
        SessionAPIUtil.login.restore();
      });

      it("makes an ajax call", () => {
        loginStub.returns(Promise.resolve("success"));
        login(user)(store.dispatch);
        expect(SessionAPIUtil.login.calledOnce).to.be.true;
      });

      it("dispatches RECEIVE_CURRENT_USER on success", () => {
        loginStub.returns(Promise.resolve("success"));
        return login(user)(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_CURRENT_USER);
        });
      });

      it("dispatches RECEIVE_ERRORS on error", () => {
        loginStub.returns(Promise.reject("error"));
        return login(user)(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_ERRORS);
        });
      });
    });

    describe("signup", () => {
      let signupStub;
      beforeEach(() => {
        signupStub = sinon.stub(SessionAPIUtil, "signup");
      });

      afterEach(() => {
        SessionAPIUtil.signup.restore();
      });

      it("makes an ajax call", () => {
        signupStub.returns(Promise.resolve("success"));
        signup(user)(store.dispatch);
        expect(SessionAPIUtil.signup.calledOnce).to.be.true;
      });

      it("dispatches RECEIVE_CURRENT_USER on success", () => {
        signupStub.returns(Promise.resolve("success"));
        return signup(user)(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_CURRENT_USER);
        });
      });

      it("dispatches RECEIVE_ERRORS on error", () => {
        signupStub.returns(Promise.reject("error"));
        return signup(user)(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_ERRORS);
        });
      });
    });

    describe("logout", () => {
      let logoutStub;

      beforeEach(() => {
        logoutStub = sinon.stub(SessionAPIUtil, "logout");
      });

      afterEach(() => {
        SessionAPIUtil.logout.restore();
      });

      it("makes an ajax call", () => {
        logoutStub.returns(Promise.resolve("success"));
        logout(user)(store.dispatch);
        expect(SessionAPIUtil.logout.calledOnce).to.be.true;
      });

      it("dispatches RECEIVE_CURRENT_USER on success", () => {
        logoutStub.returns(Promise.resolve("success"));
        return logout(user)(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_CURRENT_USER);
        });
      });
    });
  });
});
