import sinon from "sinon";
import { expect } from "../test_helper";
import { signup, login, logout } from "../../utils/session_api_util";

describe("Session API Util", () => {
  beforeEach(() => {
    global.$.ajax = sinon.stub().returns("promise");
  });

  describe("signup", () => {
    it("makes AJAX request and returns a promise", () => {
      const result = signup("user");
      expect($.ajax.calledOnce).to.be.true;
      expect(result).to.equal("promise");
    });
  });

  describe("login", () => {
    it("makes AJAX request and returns a promise", () => {
      const result = login("user");
      expect($.ajax.calledOnce).to.be.true;
      expect(result).to.equal("promise");
    });
  });

  describe("logout", () => {
    it("makes AJAX request and returns a promise", () => {
      const result = logout();
      expect($.ajax.calledOnce).to.be.true;
      expect(result).to.equal("promise");
    });
  });
});
