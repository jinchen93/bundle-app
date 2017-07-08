import { renderComponent, expect } from "../../test_helper";
import HomePageContainer from "../../../components/home/HomePageContainer";

describe("HomePageContainer", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HomePageContainer);
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
