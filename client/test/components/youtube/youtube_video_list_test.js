import { renderComponent, expect } from "../../test_helper";
import YoutubeVideoList from "../../../components/youtube/YoutubeVideoList";

describe("YoutubeVideoList", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(YoutubeVideoList, { videos: [] });
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
