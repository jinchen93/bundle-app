import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TwitchStream from "./TwitchStream.jsx";
import { fetchStream } from "../../actions/twitch_actions";

const mapStateToProps = state => ({
  loading: state.loader.twitchStream,
  stream: state.twitch.stream,
});

const mapDispatchToProps = dispatch => ({
  fetchStream: name => dispatch(fetchStream(name)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TwitchStream)
);
