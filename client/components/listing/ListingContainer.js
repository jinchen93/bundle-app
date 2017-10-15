// @flow

import { connect } from "react-redux";
import Listing from "./Listing";
import { withRouter } from "react-router-dom";
import { allYoutubeChannels } from "../../selectors/youtube_selectors";
import { allSubreddits } from "../../selectors/reddit_selectors";
import { allTwitchChannels } from "../../selectors/twitch_selectors";
import { removeYoutubeChannel } from "../../actions/youtube_actions";
import { removeSubreddit } from "../../actions/reddit_actions";
import { removeTwitchChannel } from "../../actions/twitch_actions";

const mapStateToProps = state => ({
  youtubeChannels: allYoutubeChannels(state),
  subreddits: allSubreddits(state),
  twitchChannels: allTwitchChannels(state),
});

const mapDispatchToProps = dispatch => ({
  removeYoutubeChannel: id => dispatch(removeYoutubeChannel(id)),
  removeSubreddit: id => dispatch(removeSubreddit(id)),
  removeTwitchChannel: id => dispatch(removeTwitchChannel(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Listing)
);
