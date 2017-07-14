import React from "react";
import RedditComment from "./RedditComment";

class RedditCommentList extends React.Component {
  componentDidMount() {
    this.props.fetchRedditComments(this.props.match.params.threadId);
  }

  componentWillUnmount() {
    this.props.resetComments();
  }

  render() {
    if (this.props.comments.length) {
      return (
        <div className="reddit-comment-list-container">
          {this.props.comments.map(comment =>
            <RedditComment
              topComment
              alternateColor={false}
              key={comment.id}
              comment={comment}
            />
          )}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default RedditCommentList;
