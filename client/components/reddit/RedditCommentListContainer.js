import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RedditCommentList from "./RedditCommentList";
import { fetchRedditComments } from "../../actions/reddit_actions";

const mapDispatchToProps = dispatch => ({
  fetchRedditComments: id => dispatch(fetchRedditComments(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(RedditCommentList));
