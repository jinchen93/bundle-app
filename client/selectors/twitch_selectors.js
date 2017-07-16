import values from "lodash/values";

export const allTwitchChannels = state => {
  return values(state.twitch.channels);
};
