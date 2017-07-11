import * as YoutubeAPIUtil from "../utils/youtube_api_util";

export const RECEIVE_YOUTUBE_FOLLOWS = "RECEIVE_YOUTUBE_FOLLOWS";
export const RECEIVE_YOUTUBE_VIDEOS = "RECEIVE_YOUTUBE_VIDEOS";
export const RECEIVE_YOUTUBE_CURRENT_CHANNEL =
  "RECEIVE_YOUTUBE_CURRENT_CHANNEL";
export const RECEIVE_YOUTUBE_CURRENT_VIDEO = "RECEIVE_YOUTUBE_CURRENT_VIDEO";
export const RECEIVE_YOUTUBE_CHANNEL = "RECEIVE_YOUTUBE_CHANNEL";
export const DELETE_YOUTUBE_CHANNEL = "DELETE_YOUTUBE_CHANNEL";

export const fetchYoutubeFollows = () => dispatch =>
  YoutubeAPIUtil.fetchYoutubeFollows().then(channels =>
    dispatch(receiveYoutubeFollows(channels))
  );

export const fetchYoutubeVideos = id => dispatch =>
  YoutubeAPIUtil.fetchYoutubeVideos(id).then(videos =>
    dispatch(receiveYoutubeVideos(videos))
  );

export const followYoutubeChannel = name => dispatch =>
  YoutubeAPIUtil.followYoutubeChannel(name).then(channel =>
    dispatch(receiveYoutubeChannel(channel))
  );

export const removeYoutubeChannel = id => dispatch =>
  YoutubeAPIUtil.removeYoutubeChannel(id).then(id =>
    dispatch(deleteYoutubeChannel(id))
  );

export const receiveYoutubeFollows = channels => ({
  type: RECEIVE_YOUTUBE_FOLLOWS,
  channels,
});

export const receiveYoutubeCurrentChannel = id => ({
  type: RECEIVE_YOUTUBE_CURRENT_CHANNEL,
  id,
});

export const receiveYoutubeVideos = videos => ({
  type: RECEIVE_YOUTUBE_VIDEOS,
  videos,
});

export const receiveYoutubeChannel = channel => ({
  type: RECEIVE_YOUTUBE_CHANNEL,
  channel,
});

export const deleteYoutubeChannel = id => ({
  type: DELETE_YOUTUBE_CHANNEL,
  id,
});

export const receiveYoutubeCurrentVideo = idx => ({
  type: RECEIVE_YOUTUBE_CURRENT_VIDEO,
  idx,
});
