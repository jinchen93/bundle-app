import values from "lodash/values";

export const allSubreddits = state => {
  return values(state.reddit.subreddits);
};
