import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RedditThreadList from "./RedditThreadList";
import {
  fetchSubredditThreads,
  fetchAllSubreddit,
} from "../../actions/reddit_actions";

const mapStateToProps = state => ({
  loading: state.loader.redditThreads,
  threads: state.reddit.threads,
});

const mapDispatchToProps = dispatch => ({
  fetchSubredditThreads: id => dispatch(fetchSubredditThreads(id)),
  fetchAllSubreddit: () => dispatch(fetchAllSubreddit()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditThreadList)
);
