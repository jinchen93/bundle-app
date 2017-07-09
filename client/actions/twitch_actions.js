import * as TwitchAPIUtil from "../utils/twitch_api_util";

export const RECEIVE_TWITCH_FOLLOWS = "RECEIVE_TWITCH_FOLLOWS";

export const fetchTwitchFollows = () => dispatch =>
  TwitchAPIUtil.fetchTwitchFollows().then(channels =>
    dispatch(receiveTwitchFollows(channels))
  );

export const receiveTwitchFollows = channels => ({
  type: RECEIVE_TWITCH_FOLLOWS,
  channels,
});
