import * as TwitchAPIUtil from "../utils/twitch_api_util";

export const RECEIVE_TWITCH_FOLLOWS = "RECEIVE_TWITCH_FOLLOWS";
export const DELETE_TWITCH_CHANNEL = "DELETE_TWITCH_CHANNEL";
export const RECEIVE_TWITCH_TOP_STREAMS = "RECEIVE_TWITCH_TOP_STREAMS";
export const LOADING_TWITCH_TOP_STREAMS = "LOADING_TWITCH_TOP_STREAMS";

export const receiveTwitchFollows = channels => ({
  type: RECEIVE_TWITCH_FOLLOWS,
  channels,
});

export const deleteTwitchChannel = id => ({
  type: DELETE_TWITCH_CHANNEL,
  id,
});

export const receiveTopStreams = streams => ({
  type: RECEIVE_TWITCH_TOP_STREAMS,
  streams,
});

export const loadingTopStreams = () => ({
  type: LOADING_TWITCH_TOP_STREAMS,
});

export const fetchTwitchFollows = () => dispatch =>
  TwitchAPIUtil.fetchTwitchFollows().then(channels =>
    dispatch(receiveTwitchFollows(channels))
  );

export const removeTwitchChannel = () => dispatch =>
  TwitchAPIUtil.removeTwitchChannel(id).then(id =>
    dispatch(deleteTwitchChannel(id))
  );

export const fetchTopStreams = () => dispatch => {
  dispatch(loadingTopStreams());
  return TwitchAPIUtil.fetchTopStreams().then(streams =>
    dispatch(receiveTopStreams(streams))
  );
};
