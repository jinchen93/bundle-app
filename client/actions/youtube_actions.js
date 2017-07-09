import * as YoutubeAPIUtil from "../utils/youtube_api_util";

export const RECEIVE_YOUTUBE_FOLLOWS = "RECEIVE_YOUTUBE_FOLLOWS";
export const RECEIVE_YOUTUBE_VIDEOS = "RECEIVE_YOUTUBE_VIDEOS";
export const RECEIVE_YOUTUBE_CURRENT = "RECEIVE_YOUTUBE_CURRENT";

export const fetchYoutubeFollows = () => dispatch =>
  YoutubeAPIUtil.fetchYoutubeFollows().then(channels =>
    dispatch(receiveYoutubeFollows(channels))
  );

export const fetchYoutubeVideos = id => dispatch =>
  YoutubeAPIUtil.fetchYoutubeVideos(id).then(videos =>
    dispatch(receiveYoutubeVideos(videos))
  );

export const receiveYoutubeFollows = channels => ({
  type: RECEIVE_YOUTUBE_FOLLOWS,
  channels,
});

export const receiveYoutubeCurrent = current => ({
  type: RECEIVE_YOUTUBE_CURRENT,
  current,
});

export const receiveYoutubeVideos = videos => ({
  type: RECEIVE_YOUTUBE_VIDEOS,
  videos,
});
