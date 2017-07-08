import sinon from "sinon";
import { store, expect } from "../test_helper";
import * as YoutubeAPIUtil from "../../utils/youtube_api_util";
import {
  RECEIVE_YOUTUBE_FOLLOWS,
  fetchYoutubeFollows,
  receiveYoutubeFollows,
} from "../../actions/youtube_actions";

describe("Youtube Actions", () => {
  describe("receiveYoutubeFollows", () => {
    it("has the correct type", () => {
      const action = receiveYoutubeFollows();
      expect(action.type).to.equal(RECEIVE_YOUTUBE_FOLLOWS);
    });

    it("has the correct payload", () => {
      const channels = ["channel1", "channel2"];
      const action = receiveYoutubeFollows(channels);
      expect(action.channels).to.equal(channels);
    });
  });

  describe("async thunk actions", () => {
    describe("fetchYoutubeFollows", () => {
      let fetchStub;

      beforeEach(() => {
        fetchStub = sinon.stub(YoutubeAPIUtil, "fetchYoutubeFollows");
      });

      afterEach(() => {
        YoutubeAPIUtil.fetchYoutubeFollows.restore();
      });

      it("makes an ajax call", () => {
        fetchStub.returns(Promise.resolve("success"));
        fetchYoutubeFollows()(store.dispatch);
        expect(YoutubeAPIUtil.fetchYoutubeFollows.calledOnce).to.be.true;
      });

      it("dispatches RECEIVE_YOUTUBE_FOLLOWS on sucess", () => {
        fetchStub.returns(Promise.resolve("success"));
        return fetchYoutubeFollows()(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_YOUTUBE_FOLLOWS);
        });
      });
    });
  });
});
