import { connect } from "react-redux";
import Media from "./Media";

const mapStateToProps = state => ({
  videos: state.youtube.videos,
});

export default connect(mapStateToProps)(Media);
