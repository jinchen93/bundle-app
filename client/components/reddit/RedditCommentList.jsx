// @flow

import React, { PureComponent } from "react";
import Loader from "../loader/Loader";
import RedditThreadBody from "./RedditThreadBody";
import RedditComment from "./RedditComment";
import RedditThreadItem from "./RedditThreadItem";

type Props = {
  match: Object,
  fetchRedditComments: Function,
  thread: Object,
  comments: Array<Object>,
  loading: Boolean,
  comment: Object,
};

class RedditCommentList extends PureComponent<Props> {
  componentDidMount() {
    const {
      fetchRedditComments,
      match: { params: { threadId } },
    } = this.props;

    fetchRedditComments(threadId);
  }

  render() {
    const {
      match: { params: { channelName } },
      loading,
      comments,
      thread,
    } = this.props;

    if (loading) return <Loader type="reddit" />;
    if (!comments) return null;
    return (
      <div className="reddit-comment-list-container">
        <div className="reddit-content-wrapper">
          <div className="thread-post">
            <RedditThreadItem
              allSubreddit={channelName === "all"}
              self
              thread={thread}
            />
            {thread.body && (
              <RedditThreadBody body={thread.body} />
            )}
          </div>
          {comments.map(comment => (
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
  }
}

export default RedditCommentList;
