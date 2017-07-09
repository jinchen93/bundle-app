import { expect } from "../test_helper";
import youtubeReducer, { _nullState } from "../../reducers/youtube_reducer";
import { RECEIVE_YOUTUBE_FOLLOWS } from "../../actions/youtube_actions";

describe("Youtube Reducer", () => {
  it("handles action with unknown type", () => {
    expect(youtubeReducer(undefined, {})).to.eql(_nullState);
  });

  it("handles action with type RECEIVE_YOUTUBE_FOLLOWS", () => {
    const channels = ["channel1", "channel2"];
    const action = {
      type: RECEIVE_YOUTUBE_FOLLOWS,
      channels,
    };
    expect(youtubeReducer(undefined, action).channels).to.eql(channels);
  });
});
