import sinon from "sinon";
import { initializeAPITests, renderComponent, expect } from "../../test_helper";
import RedditThreadList from "../../../components/reddit/RedditThreadList";

describe("RedditThreadList", () => {
  let component;

  initializeAPITests();

  it("renders the loading state", () => {
    component = renderComponent(RedditThreadList, {
      loading: true,
      match: { params: {} },
      fetchAllSubreddit: sinon.stub,
    });

    expect(component).to.exist;
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
