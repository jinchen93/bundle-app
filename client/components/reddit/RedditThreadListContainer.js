import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RedditThreadList from "./RedditThreadList";
import {
  fetchSubredditThreads,
  receiveSubredditThreads,
  fetchAllSubreddit,
} from "../../actions/reddit_actions";

const mapStateToProps = state => ({
  threads: state.reddit.threads,
});

const mapDispatchToProps = dispatch => ({
  resetThreads: () => dispatch(receiveSubredditThreads([])),
  fetchSubredditThreads: id => dispatch(fetchSubredditThreads(id)),
  fetchAllSubreddit: () => dispatch(fetchAllSubreddit()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditThreadList)
);
