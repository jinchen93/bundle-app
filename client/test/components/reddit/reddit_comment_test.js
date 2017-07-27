import { renderComponent, expect } from "../../test_helper";
import RedditComment from "../../../components/reddit/RedditComment";

describe("RedditComment", () => {
  let component;
  beforeEach(() => {
    component = renderComponent(RedditComment, { comment: { body: "body" } });
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
