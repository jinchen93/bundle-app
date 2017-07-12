import { connect } from "react-redux";
import HomePage from "./HomePage";
import { receiveMode } from "../../actions/mode_actions";
import { fetchYoutubeFollows } from "../../actions/youtube_actions";
import { fetchRedditFollows } from "../../actions/reddit_actions";
import { fetchTwitchFollows } from "../../actions/twitch_actions";

const mapStateToProps = state => ({
  mode: state.mode,
});

const mapDispatchToProps = dispatch => ({
  receiveMode: mode => dispatch(receiveMode(mode)),
  fetchYoutubeFollows: () => dispatch(fetchYoutubeFollows()),
  fetchRedditFollows: () => dispatch(fetchRedditFollows()),
  fetchTwitchFollows: () => dispatch(fetchTwitchFollows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
