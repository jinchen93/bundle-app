import { connect } from "react-redux";
import Media from "./Media";
import { receiveYoutubeCurrentVideo } from "../../actions/youtube_actions";

const mapStateToProps = state => ({
  mode: state.mode,
  videos: state.youtube.videos,
  currentChannel: state.youtube.currentChannel,
  currentVideo: state.youtube.currentVideo,
});

const mapDispatchToProps = dispatch => ({
  receiveYoutubeCurrentVideo: idx => dispatch(receiveYoutubeCurrentVideo(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
