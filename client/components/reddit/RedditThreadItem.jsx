import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const RedditThreadItem = ({ allSubreddit, self, path, thread }) => {
  const date = moment.unix(thread.date).fromNow();

  const renderComments = () => {
    if (self) {
      return (
        <p className="comments">
          {thread.comments} comments
        </p>
      );
    } else {
      return (
        <Link
          className="comments"
          to={`${path}/${thread.id}/${thread.permaTitle}`}
        >
          {thread.comments} comments
        </Link>
      );
    }
  };

  const renderTitle = () => {
    if (thread.self) {
      return (
        <Link
          className="title"
          to={`${path}/${thread.id}/${thread.permaTitle}`}
          dangerouslySetInnerHTML={{ __html: thread.title }}
        />
      );
    } else {
      return (
        <a
          href={thread.url}
          target="__blank"
          className="title"
          dangerouslySetInnerHTML={{ __html: thread.title }}
        />
      );
    }
  };

  const renderImage = () => {
    return (
      <div className="image-wrapper">
        <img src={thread.thumbnail} alt={thread.title + " thumbnail"} />
      </div>
    );
  };

  return (
    <div className="reddit-thread-item">
      <div className="thread-data-wrapper">
        <div className="score">
          {thread.score}
        </div>
        <div className="description">
          <div>
            {renderTitle()}
            <span>
              ({thread.domain})
            </span>
          </div>
          <div className="publisher">
            {renderComments()}
            submitted {date} by {thread.author}
            {allSubreddit && ` to /r/${thread.subreddit}`}
          </div>
        </div>
      </div>

      {thread.thumbnail && renderImage()}
    </div>
  );
};

export default RedditThreadItem;
