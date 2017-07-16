import { connect } from "react-redux";
import TwitchStream from "./TwitchStream.jsx";

const mapStateToProps = state => ({
  twitch: state.twitch,
});

export default connect(mapStateToProps)(TwitchStream);
