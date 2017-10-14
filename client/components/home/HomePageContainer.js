// @flow

import { connect } from "react-redux";
import HomePage from "./HomePage";
import { fetchYoutubeFollows } from "../../actions/youtube_actions";
import { fetchRedditFollows } from "../../actions/reddit_actions";
import { fetchTwitchFollows } from "../../actions/twitch_actions";

const mapDispatchToProps = dispatch => ({
  fetchYoutubeFollows: () => dispatch(fetchYoutubeFollows()),
  fetchRedditFollows: () => dispatch(fetchRedditFollows()),
  fetchTwitchFollows: () => dispatch(fetchTwitchFollows()),
});

export default connect(null, mapDispatchToProps)(HomePage);
