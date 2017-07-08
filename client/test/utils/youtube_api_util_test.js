import sinon from "sinon";
import { expect } from "../test_helper";
import * as YoutubeAPIUtil from "../../utils/youtube_api_util";

describe("Youtube API Util", () => {
  beforeEach(() => {
    global.$ = sinon.stub();
    global.$.ajax = sinon.stub().returns("promise");
  });

  afterEach(() => {
    global.$.reset();
  });

  describe("fetchYoutubeFollows", () => {
    it("makes AJAX request and returns a promise", () => {
      const result = YoutubeAPIUtil.fetchYoutubeFollows();
      expect($.ajax.calledOnce).to.be.true;
      expect(result).to.equal("promise");
    });
  });
});
