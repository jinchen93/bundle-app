import { connect } from "react-redux";
import Listing from "./Listing";
import { withRouter } from "react-router-dom";
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
  youtubeChannels: allYoutubeChannels(state),
  subreddits: allSubreddits(state),
});

const mapDispatchToProps = dispatch => ({
  receiveYoutubeCurrentChannel: id =>
    dispatch(receiveYoutubeCurrentChannel(id)),
  removeYoutubeChannel: id => dispatch(removeYoutubeChannel(id)),
  removeSubreddit: id => dispatch(removeSubreddit(id)),
  receiveCurrentSubreddit: id => dispatch(receiveCurrentSubreddit(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Listing)
);
