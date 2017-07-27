import { renderComponent, expect } from "../../test_helper";
import YoutubeVideoListItem from "../../../components/youtube/YoutubeVideoListItem";

describe("YoutubeVideoListItem", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(YoutubeVideoListItem, {
      video: {
        snippet: {
          publishedAt: "date",
          thumbnails: { medium: "url" },
          description: "description",
        },
      },
    });
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
