import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RedditThreadList from "./RedditThreadList";

import {
  fetchSubredditThreads,
  receiveSubredditThreads,
} from "../../actions/reddit_actions";

const mapStateToProps = state => ({
  threads: state.reddit.threads,
});

const mapDispatchToProps = dispatch => ({
  resetThreads: () => dispatch(receiveSubredditThreads([])),
  fetchSubredditThreads: id => dispatch(fetchSubredditThreads(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditThreadList)
);
