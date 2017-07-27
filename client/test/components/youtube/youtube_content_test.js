import { renderComponent, expect, initializeAPITests } from "../../test_helper";
import YoutubeContentContainer from "../../../components/youtube/YoutubeContentContainer";

describe("YoutubeContent", () => {
  let component;

  initializeAPITests();

  describe("loading state", () => {
    beforeEach(() => {
      component = renderComponent(YoutubeContentContainer, { loading: true });
    });
    it("renders", () => {
      expect(component).to.exist;
    });
  });

  describe("embed display", () => {
    beforeEach(() => {
      component = renderComponent(YoutubeContentContainer, {
        match: { params: { id: 1 } },
      });
    });

    it("renders", () => {
      expect(component).to.exist;
    });

    it("has the correct class", () => {
      expect(component).to.have.class("media-content");
    });
  });

  describe("most popular display", () => {
    beforeEach(() => {
      component = renderComponent(YoutubeContentContainer, { loading: false });
    });

    it("renders", () => {
      expect(component).to.exist;
    });

    it("has the correct class", () => {
      expect(component).to.have.class("media-content");
    });
  });
});
