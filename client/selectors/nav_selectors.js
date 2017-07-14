export const getName = (state, props) => {
  const { mode, id } = props.match.params;
  if (mode === "reddit") {
    const hasSubreddits = Boolean(Object.keys(state.reddit.subreddits).length);
    if (hasSubreddits) {
      if (state.reddit.subreddits[id]) {
        return state.reddit.subreddits[id].name;
      } else {
        return "All";
      }
    }
  } else if (mode === "youtube") {
    const hasChannels = Boolean(Object.keys(state.youtube.channels).length);
    if (hasChannels) {
      return id ? state.youtube.channels[id].name : "Trending";
    }
  }

  return "";
};
