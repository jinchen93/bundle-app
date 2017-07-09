import values from "lodash/values";

export const allYoutubeChannels = state => {
  return values(state.youtube.channels);
};
