import { connect } from "react-redux";
import TwitchTopStreams from "./TwitchTopStreams.jsx";
import { fetchTopStreams } from "../../actions/twitch_actions";

const mapStateToProps = state => ({
  loading: state.loader.twitchTopStreams,
  topStreams: state.twitch.topStreams,
});

const mapDispatchToProps = dispatch => ({
  fetchTopStreams: () => dispatch(fetchTopStreams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitchTopStreams);
