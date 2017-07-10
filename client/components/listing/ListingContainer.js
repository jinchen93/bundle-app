import { connect } from "react-redux";
import Listing from "./Listing";
import { allYoutubeChannels } from "../../selectors/youtube_selectors";
import {
  receiveYoutubeCurrentChannel,
  removeYoutubeChannel,
} from "../../actions/youtube_actions";

const mapStateToProps = state => ({
  youtubeChannels: allYoutubeChannels(state),
  currentChannel: state.youtube.currentChannel,
});

const mapDispatchToProps = dispatch => ({
  receiveYoutubeCurrentChannel: id =>
    dispatch(receiveYoutubeCurrentChannel(id)),
  removeYoutubeChannel: id => dispatch(removeYoutubeChannel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
