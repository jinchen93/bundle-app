import { connect } from "react-redux";
import Listing from "./Listing";
import { receiveMode } from "../../actions/mode_actions";
import { allYoutubeChannels } from "../../selectors/youtube_selectors";
import { allSubreddits } from "../../selectors/reddit_selectors";
import {
  receiveYoutubeCurrentChannel,
  removeYoutubeChannel,
} from "../../actions/youtube_actions";
import {
  removeSubreddit,
  receiveCurrentSubreddit,
} from "../../actions/reddit_actions";

const mapStateToProps = state => ({
  mode: state.mode,
  youtubeChannels: allYoutubeChannels(state),
  subreddits: allSubreddits(state),
  currentChannel: state.youtube.currentChannel,
  currentSubreddit: state.reddit.currentSubreddit,
});

const mapDispatchToProps = dispatch => ({
  receiveMode: mode => dispatch(receiveMode(mode)),
  receiveYoutubeCurrentChannel: id =>
    dispatch(receiveYoutubeCurrentChannel(id)),
  removeYoutubeChannel: id => dispatch(removeYoutubeChannel(id)),
  removeSubreddit: id => dispatch(removeSubreddit(id)),
  receiveCurrentSubreddit: id => dispatch(receiveCurrentSubreddit(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
