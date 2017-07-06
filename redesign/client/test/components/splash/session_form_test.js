import { renderComponent, expect } from "../../test_helper";
import SessionFormContainer from "../../../components/splash/SessionFormContainer";

describe("SessionFormContainer", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SessionFormContainer);
  });

  it("renders component", () => {
    expect(component).to.exist;
  });

  it("renders site name", () => {
    expect(component).to.contain("BundleMe");
  });

  it("has a form element", () => {
    expect(component.find("form")).to.exist;
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
});
