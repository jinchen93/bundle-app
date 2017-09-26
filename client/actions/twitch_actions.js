// @flow

import * as TwitchAPIUtil from "../utils/twitch_api_util";

export const RECEIVE_TWITCH_FOLLOWS = "RECEIVE_TWITCH_FOLLOWS";
export const RECEIVE_TWITCH_CHANNEL = "RECEIVE_TWITCH_CHANNEL";
export const DELETE_TWITCH_CHANNEL = "DELETE_TWITCH_CHANNEL";
export const RECEIVE_TWITCH_TOP_STREAMS = "RECEIVE_TWITCH_TOP_STREAMS";
export const LOADING_TWITCH_TOP_STREAMS = "LOADING_TWITCH_TOP_STREAMS";
export const RECEIVE_TWITCH_STREAM = "RECEIVE_TWITCH_STREAM";
export const LOADING_TWITCH_STREAM = "LOADING_TWITCH_STREAM";

export const receiveTwitchFollows = (channels: Object) => ({
  type: RECEIVE_TWITCH_FOLLOWS,
  channels,
});

export const receiveTwitchChannel = (channel: Object) => ({
  type: RECEIVE_TWITCH_CHANNEL,
  channel,
});

export const deleteTwitchChannel = (id: number) => ({
  type: DELETE_TWITCH_CHANNEL,
  id,
});

export const receiveTopStreams = (streams: Array<Object>) => ({
  type: RECEIVE_TWITCH_TOP_STREAMS,
  streams,
});

export const loadingTopStreams = () => ({
  type: LOADING_TWITCH_TOP_STREAMS,
});

export const receiveTwitchStream = (stream: Object) => ({
  type: RECEIVE_TWITCH_STREAM,
  stream,
});

export const loadingTwitchStream = () => ({
  type: LOADING_TWITCH_STREAM,
});

export const fetchTwitchFollows = () => (dispatch: Function) =>
  TwitchAPIUtil.fetchTwitchFollows().then(channels =>
    dispatch(receiveTwitchFollows(channels))
  );

export const followTwitchChannel = (name: string) => (dispatch: Function) =>
  TwitchAPIUtil.followTwitchChannel(name).then(channel =>
    dispatch(receiveTwitchChannel(channel))
  );

export const removeTwitchChannel = (id: number) => (dispatch: Function) =>
  TwitchAPIUtil.removeTwitchChannel(id).then(id =>
    dispatch(deleteTwitchChannel(id))
  );

export const fetchTopStreams = () => (dispatch: Function) => {
  dispatch(loadingTopStreams());
  return TwitchAPIUtil.fetchTopStreams().then(streams =>
    dispatch(receiveTopStreams(streams))
  );
};

export const fetchStream = (name: string) => (dispatch: Function) => {
  dispatch(loadingTwitchStream());
  return TwitchAPIUtil.fetchStream(name).then(stream =>
    dispatch(receiveTwitchStream(stream))
  );
};
