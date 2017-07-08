import * as YoutubeAPIUtil from "../utils/youtube_api_util";

export const RECEIVE_YOUTUBE_FOLLOWS = "RECEIVE_YOUTUBE_FOLLOWS";

export const fetchYoutubeFollows = () => dispatch =>
  YoutubeAPIUtil.fetchYoutubeFollows().then(channels =>
    dispatch(receiveYoutubeFollows(channels))
  );

export const receiveYoutubeFollows = channels => ({
  type: RECEIVE_YOUTUBE_FOLLOWS,
  channels,
});
