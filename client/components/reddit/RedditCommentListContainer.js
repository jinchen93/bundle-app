// @flow

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import RedditCommentList from "./RedditCommentList";
import { fetchRedditComments } from "../../actions/reddit_actions";

const mapStateToProps = ({
  reddit: {
    comments: {
      thread,
      comments,
    }
  },
  loader: {
    redditComments: loading,
  },
}) => ({
  thread,
  comments,
  loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchRedditComments }, dispatch)

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditCommentList)
);
