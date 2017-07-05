import { renderComponent, expect } from "../../test_helper";
import SessionFormContainer from "../../../components/splash/SessionFormContainer";

describe("SessionFormContainer", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SessionFormContainer);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });

  it("renders site name", () => {
    expect(component).to.contain("BundleMe");
  });
});
