import AppRouter from "../../components/AppRouter";
import sinon from "sinon";
import { initializeAPITests, renderComponent, expect } from "../test_helper";

describe("AppRouter", () => {
  initializeAPITests();

  it("renders", () => {
    let component = renderComponent(AppRouter);
    expect(component).to.exist;
  });

  it("renders logged out router", () => {
    let state = { session: { currentUser: null, errors: [] } };
    let component = renderComponent(AppRouter, null, state);
    expect(component).to.have.attr("data-test", "logged-out");
  });
});
