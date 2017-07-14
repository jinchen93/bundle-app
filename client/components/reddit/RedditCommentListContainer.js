import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RedditCommentList from "./RedditCommentList";
import {
  fetchRedditComments,
  receiveRedditComments,
} from "../../actions/reddit_actions";

const mapStateToProps = state => ({
  thread: state.reddit.comments.thread,
  comments: state.reddit.comments.comments,
});

const mapDispatchToProps = dispatch => ({
  resetComments: () => dispatch(receiveRedditComments([])),
  fetchRedditComments: id => dispatch(fetchRedditComments(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditCommentList)
);
