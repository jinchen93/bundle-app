import { renderComponent, expect } from "../../test_helper";
import TwitchStreamItem from "../../../components/twitch/TwitchStreamItem.jsx";

describe("TwitchStreamItem", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TwitchStreamItem, { stream: {} });
  });

  it("renders", () => {
    expect(component).to.exist;
  });
});
