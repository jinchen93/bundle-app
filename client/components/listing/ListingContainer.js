import { connect } from "react-redux";
import Listing from "./Listing";
import { allYoutubeChannels } from "../../selectors/youtube_selectors";
import {
  receiveYoutubeCurrent,
  removeYoutubeChannel,
} from "../../actions/youtube_actions";

const mapStateToProps = state => ({
  youtubeChannels: allYoutubeChannels(state),
  currentChannel: state.youtube.current,
});

const mapDispatchToProps = dispatch => ({
  receiveYoutubeCurrent: id => dispatch(receiveYoutubeCurrent(id)),
  removeYoutubeChannel: id => dispatch(removeYoutubeChannel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
