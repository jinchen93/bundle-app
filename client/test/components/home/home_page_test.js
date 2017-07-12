import { initializeAPITests, renderComponent, expect } from "../../test_helper";
import HomePageContainer from "../../../components/home/HomePageContainer";

describe("HomePageContainer", () => {
  let component;

  initializeAPITests();

  beforeEach(() => {
    component = renderComponent(HomePageContainer, {
      match: { params: { mode: "" } },
    });
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
