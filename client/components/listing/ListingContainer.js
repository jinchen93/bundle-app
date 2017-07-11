import { connect } from "react-redux";
import Listing from "./Listing";
import { receiveMode } from "../../actions/mode_actions";
import { allYoutubeChannels } from "../../selectors/youtube_selectors";
import { allSubreddits } from "../../selectors/reddit_selectors";
import {
  receiveYoutubeCurrentChannel,
  removeYoutubeChannel,
} from "../../actions/youtube_actions";

const mapStateToProps = state => ({
  mode: state.mode,
  youtubeChannels: allYoutubeChannels(state),
  subreddits: allSubreddits(state),
  currentChannel: state.youtube.currentChannel,
});

const mapDispatchToProps = dispatch => ({
  receiveMode: mode => dispatch(receiveMode(mode)),
  receiveYoutubeCurrentChannel: id =>
    dispatch(receiveYoutubeCurrentChannel(id)),
  removeYoutubeChannel: id => dispatch(removeYoutubeChannel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
