import sinon from "sinon";
import { renderComponent, expect } from "../../test_helper";
import * as actions from "../../../actions/session_actions";
import SessionFormContainer from "../../../components/splash/SessionFormContainer";

describe("SessionFormContainer", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SessionFormContainer);
  });

  it("renders component", () => {
    expect(component).to.exist;
  });

  it("has a form element", () => {
    expect(component.find("form")).to.exist;
  });

  it("renders errors", () => {
    component = renderComponent(SessionFormContainer, null, {
      session: { errors: ["error"] },
    });

    expect(component.find("ul")).to.exist;
  });

  describe("input-group", () => {
    let inputGroups, input;

    beforeEach(() => {
      inputGroups = component.find(".input-group");
      input = component.find("input");
    });

    it("renders onto the DOM", () => {
      expect(inputGroups).to.exist;
    });

    it("renders 2 input groups", () => {
      expect(inputGroups.length).to.equal(2);
    });

    it("shows text in the input area", () => {
      input.simulate("change", "new input value");
      expect(input).to.have.value("new input value");
    });
  });

  describe("signup form", () => {
    beforeEach(() => {
      sinon.stub(actions, "signup").returns(() => Promise.resolve({}));
      component = renderComponent(SessionFormContainer, { formType: "signup" });
    });

    afterEach(() => {
      actions.signup.restore();
    });

    it("renders site name", () => {
      expect(component).to.contain("BundleMe");
    });

    it("dispatches signup action on submit", () => {
      const form = component.find("form");
      form.simulate("submit");
      expect(actions.signup.calledOnce).to.be.true;
    });
  });

  describe("login form", () => {
    beforeEach(() => {
      sinon.stub(actions, "login").returns(() => Promise.resolve({}));
      component = renderComponent(SessionFormContainer, { formType: "login" });
    });

    afterEach(() => {
      actions.login.restore();
    });

    it("renders site name", () => {
      expect(component).to.contain("Log in");
    });

    it("dispatches login action on submit", () => {
      const form = component.find("form");
      form.simulate("submit");
      expect(actions.login.calledOnce).to.be.true;
    });
  });
});
