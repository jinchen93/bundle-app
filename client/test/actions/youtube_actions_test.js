import sinon from "sinon";
import { store, expect } from "../test_helper";
import * as YoutubeAPIUtil from "../../utils/youtube_api_util";
import {
  RECEIVE_YOUTUBE_FOLLOWS,
  RECEIVE_YOUTUBE_VIDEOS,
  RECEIVE_YOUTUBE_CHANNEL,
  DELETE_YOUTUBE_CHANNEL,
  RECEIVE_YOUTUBE_CURRENT_VIDEO,
  LOADING_YOUTUBE_VIDEOS,
  receiveYoutubeFollows,
  receiveYoutubeVideos,
  receiveYoutubeChannel,
  deleteYoutubeChannel,
  fetchYoutubeFollows,
  fetchYoutubeVideos,
  followYoutubeChannel,
  receiveYoutubeCurrentVideo,
  loadingYoutubeVideos,
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

  describe("receiveYoutubeVideos", () => {
    it("has the correct type", () => {
      const action = receiveYoutubeVideos();
      expect(action.type).to.equal(RECEIVE_YOUTUBE_VIDEOS);
    });

    it("has the correct payload", () => {
      const videos = ["video1", "video2"];
      const action = receiveYoutubeVideos(videos);
      expect(action.videos).to.equal(videos);
    });
  });

  describe("receiveYoutubeChannel", () => {
    it("has the correct type", () => {
      const action = receiveYoutubeChannel();
      expect(action.type).to.equal(RECEIVE_YOUTUBE_CHANNEL);
    });

    it("has the correct payload", () => {
      const channel = { id: 1, name: "channel" };
      const action = receiveYoutubeChannel(channel);
      expect(action.channel).to.equal(channel);
    });
  });

  describe("deleteYoutubeChannel", () => {
    it("has the correct type", () => {
      const action = deleteYoutubeChannel();
      expect(action.type).to.equal(DELETE_YOUTUBE_CHANNEL);
    });

    it("has the correct payload", () => {
      const id = 42;
      const action = deleteYoutubeChannel(42);
      expect(action.id).to.equal(id);
    });
  });

  describe("receiveYoutubeCurrentVideo", () => {
    it("has the correct type", () => {
      const action = receiveYoutubeCurrentVideo();
      expect(action.type).to.equal(RECEIVE_YOUTUBE_CURRENT_VIDEO);
    });

    it("has the correct payload", () => {
      const idx = 42;
      const action = receiveYoutubeCurrentVideo(idx);
      expect(action.idx).to.equal(idx);
    });
  });

  describe("loadingYoutubeVideos", () => {
    it("has the correct type", () => {
      const action = loadingYoutubeVideos();
      expect(action.type).to.equal(LOADING_YOUTUBE_VIDEOS);
    });
  });

  // ASYC ACTION CREATORS
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

      it("dispatches RECEIVE_YOUTUBE_FOLLOWS on success", () => {
        fetchStub.returns(Promise.resolve("success"));
        return fetchYoutubeFollows()(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_YOUTUBE_FOLLOWS);
        });
      });
    });

    describe("fetchYoutubeVideos", () => {
      let fetchStub;

      beforeEach(() => {
        fetchStub = sinon.stub(YoutubeAPIUtil, "fetchYoutubeVideos");
        fetchStub.returns(Promise.resolve("success"));
      });

      afterEach(() => {
        YoutubeAPIUtil.fetchYoutubeVideos.restore();
      });

      it("makes an ajax call", () => {
        fetchYoutubeVideos()(store.dispatch);
        expect(YoutubeAPIUtil.fetchYoutubeVideos.calledOnce).to.be.true;
      });

      it("dispatches RECEIVE_YOUTUBE_VIDEOS on success", () => {
        return fetchYoutubeVideos()(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_YOUTUBE_VIDEOS);
        });
      });
    });

    describe("followYoutubeChannel", () => {
      let fetchStub;

      beforeEach(() => {
        fetchStub = sinon.stub(YoutubeAPIUtil, "followYoutubeChannel");
        fetchStub.returns(Promise.resolve("success"));
      });

      afterEach(() => {
        YoutubeAPIUtil.followYoutubeChannel.restore();
      });

      it("makes an ajax call", () => {
        followYoutubeChannel()(store.dispatch);
        expect(YoutubeAPIUtil.followYoutubeChannel.calledOnce).to.be.true;
      });

      it("dispatches RECEIVE_YOUTUBE_CHANNEL on success", () => {
        return followYoutubeChannel()(store.dispatch).then(action => {
          expect(action.type).to.equal(RECEIVE_YOUTUBE_CHANNEL);
        });
      });
    });
  });
});
