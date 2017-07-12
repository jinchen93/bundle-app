import { connect } from "react-redux";
import RedditContent from "./RedditContent";
import { fetchSubredditThreads } from "../../actions/reddit_actions";

const mapStateToProps = state => ({
  threads: state.reddit.threads,
  currentSubreddit: state.reddit.currentSubreddit,
});

const mapDispatchToProps = dispatch => ({
  fetchSubredditThreads: id => dispatch(fetchSubredditThreads(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RedditContent);
