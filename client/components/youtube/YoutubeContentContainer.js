import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import YoutubeContent from "./YoutubeContent";
import {
  fetchYoutubeVideos,
  receiveYoutubeCurrentVideo,
} from "../../actions/youtube_actions";

const mapStateToProps = (state, ownProps) => ({
  videos: state.youtube.videos,
  currentChannel: ownProps.match.params.id,
  currentVideo: state.youtube.currentVideo,
});

const mapDispatchToProps = dispatch => ({
  fetchYoutubeVideos: id => dispatch(fetchYoutubeVideos(id)),
  receiveYoutubeCurrentVideo: idx => dispatch(receiveYoutubeCurrentVideo(idx)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(YoutubeContent)
);
