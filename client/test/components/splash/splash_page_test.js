import { renderComponent, expect } from "../../test_helper";
import SplashPage from "../../../components/splash/SplashPage";

describe("SplashPage", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SplashPage, { formType: "signup" });
  });

  it("wraps the page", () => {
    expect(component).to.have.class("splash-page-wrapper");
  });

  it("shows a form", () => {
    expect(component.find(".splash-form-wrapper")).to.exist;
  });
});
