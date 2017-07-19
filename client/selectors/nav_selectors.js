import { allTwitchChannels } from "../selectors/twitch_selectors";

export const getName = (state, props) => {
  const { mode, id } = props.match.params;
  if (mode === "youtube") {
    return getYoutubeTitle(state, id);
  } else if (mode === "reddit") {
    return getRedditTitle(state, id);
  } else if (mode === "twitch") {
    return getTwitchTitle(state, id);
  }

  return "";
};

const getYoutubeTitle = (state, id) => {
  const hasChannels = Boolean(Object.keys(state.youtube.channels).length);
  if (hasChannels) {
    if (state.youtube.channels[id]) {
      return state.youtube.channels[id].name;
    }
  }
  return "Trending";
};

const getRedditTitle = (state, id) => {
  const hasSubreddits = Boolean(Object.keys(state.reddit.subreddits).length);
  if (hasSubreddits) {
    if (state.reddit.subreddits[id]) {
      return state.reddit.subreddits[id].name;
    }
  }
  return "All";
};

const getTwitchTitle = (state, id) => {
  const hasChannels = Boolean(Object.keys(state.twitch.channels).length);
  if (hasChannels) {
    const channels = allTwitchChannels(state);
    if (id) {
      let channel = channels.find(channel => channel.idName === id);
      if (channel) {
        return channel.name;
      } else {
        channel = state.twitch.topStreams.find(channel => channel.name === id);
        return channel ? channel.displayName : "Top Channels";
      }
    }
  }
  return "Top Channels";
};
