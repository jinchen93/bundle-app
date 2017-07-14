import React from "react";
import RedditThreadBody from "./RedditThreadBody";
import RedditComment from "./RedditComment";
import RedditThreadItem from "./RedditThreadItem";

class RedditCommentList extends React.Component {
  componentDidMount() {
    this.props.fetchRedditComments(this.props.match.params.threadId);
  }

  componentWillUnmount() {
    this.props.resetComments();
  }

  render() {
    if (this.props.comments) {
      return (
        <div className="reddit-comment-list-container">
          <div className="reddit-content-wrapper">
            <div className="thread-post">
              <RedditThreadItem
                allSubreddit={this.props.match.params.channelName === "all"}
                self
                thread={this.props.thread}
              />
              {this.props.thread.body &&
                <RedditThreadBody body={this.props.thread.body} />}
            </div>
            {this.props.comments.map(comment =>
              <RedditComment
                topComment
                alternateColor={false}
                key={comment.id}
                comment={comment}
              />
            )}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default RedditCommentList;
