// @flow

import * as YoutubeAPIUtil from "../utils/youtube_api_util";

export const RECEIVE_YOUTUBE_FOLLOWS = "RECEIVE_YOUTUBE_FOLLOWS";
export const RECEIVE_YOUTUBE_VIDEOS = "RECEIVE_YOUTUBE_VIDEOS";
export const RECEIVE_YOUTUBE_CURRENT_VIDEO = "RECEIVE_YOUTUBE_CURRENT_VIDEO";
export const RECEIVE_YOUTUBE_CHANNEL = "RECEIVE_YOUTUBE_CHANNEL";
export const DELETE_YOUTUBE_CHANNEL = "DELETE_YOUTUBE_CHANNEL";
export const LOADING_YOUTUBE_VIDEOS = "LOADING_YOUTUBE_VIDEOS";

export const receiveYoutubeFollows = (channels: Array<Object>) => ({
  type: RECEIVE_YOUTUBE_FOLLOWS,
  channels,
});

export const receiveYoutubeVideos = (videos: Array<Object>) => ({
  type: RECEIVE_YOUTUBE_VIDEOS,
  videos,
});

export const receiveYoutubeChannel = (channel: Object) => ({
  type: RECEIVE_YOUTUBE_CHANNEL,
  channel,
});

export const deleteYoutubeChannel = (id: number) => ({
  type: DELETE_YOUTUBE_CHANNEL,
  id,
});

export const receiveYoutubeCurrentVideo = (idx: number) => ({
  type: RECEIVE_YOUTUBE_CURRENT_VIDEO,
  idx,
});

export const loadingYoutubeVideos = () => ({
  type: LOADING_YOUTUBE_VIDEOS,
});

export const fetchYoutubeFollows = () => (dispatch: Function) =>
  YoutubeAPIUtil.fetchYoutubeFollows().then(channels =>
    dispatch(receiveYoutubeFollows(channels))
  );

export const fetchYoutubeVideos = (id: number) => (dispatch: Function) => {
  dispatch(loadingYoutubeVideos());
  return YoutubeAPIUtil.fetchYoutubeVideos(id).then(videos =>
    dispatch(receiveYoutubeVideos(videos))
  );
};

export const followYoutubeChannel = (name: string) => (dispatch: Function) =>
  YoutubeAPIUtil.followYoutubeChannel(name).then(channel =>
    dispatch(receiveYoutubeChannel(channel))
  );

export const removeYoutubeChannel = (id: number) => (dispatch: Function) =>
  YoutubeAPIUtil.removeYoutubeChannel(id).then(id =>
    dispatch(deleteYoutubeChannel(id))
  );

export const fetchYoutubeMostPopular = () => (dispatch: Function) => {
  dispatch(loadingYoutubeVideos());
  return YoutubeAPIUtil.fetchYoutubeMostPopular().then(videos =>
    dispatch(receiveYoutubeVideos(videos))
  );
};
