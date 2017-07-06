import { renderComponent, expect } from "../../test_helper";
import SwitchFormButton from "../../../components/splash/SwitchFormButton";

describe("SwitchFormButton", () => {
  let component;

  describe("signup button", () => {
    beforeEach(() => {
      component = renderComponent(SwitchFormButton, { formType: "signup" });
    });

    it("renders", () => {
      expect(component).to.exist;
    });

    it("redirects to /login", () => {
      expect(component).to.have.attr("href", "/login");
    });
  });

  describe("login button", () => {
    beforeEach(() => {
      component = renderComponent(SwitchFormButton, { formType: "login" });
    });

    it("renders", () => {
      expect(component).to.exist;
    });

    it("redirects to /", () => {
      expect(component).to.have.attr("href", "/");
    });
  });
});
