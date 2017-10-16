// @flow

import React from "react";
import Loader from "../loader/Loader";
import RedditThreadBody from "./RedditThreadBody";
import RedditComment from "./RedditComment";
import RedditThreadItem from "./RedditThreadItem";

type Props = {
  match: Object,
  fetchRedditComments: Function,
  thread: Object,
  comments: Array<Object>,
};

class RedditCommentList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchRedditComments(this.props.match.params.threadId);
  }

  render() {
    if (this.props.loading) {
      return <Loader type="reddit" />;
    }

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
              {this.props.thread.body && (
                <RedditThreadBody body={this.props.thread.body} />
              )}
            </div>
            {this.props.comments.map(comment => (
              <RedditComment
                topComment
                alternateColor={false}
                key={comment.id}
                comment={comment}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RedditCommentList;
