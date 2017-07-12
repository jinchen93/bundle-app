import { connect } from "react-redux";
import YoutubeContent from "./YoutubeContent";
import {
  fetchYoutubeVideos,
  receiveYoutubeCurrentVideo,
} from "../../actions/youtube_actions";

const mapStateToProps = state => ({
  videos: state.youtube.videos,
  currentChannel: state.youtube.currentChannel,
  currentVideo: state.youtube.currentVideo,
});

const mapDispatchToProps = dispatch => ({
  fetchYoutubeVideos: id => dispatch(fetchYoutubeVideos(id)),
  receiveYoutubeCurrentVideo: idx => dispatch(receiveYoutubeCurrentVideo(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeContent);
