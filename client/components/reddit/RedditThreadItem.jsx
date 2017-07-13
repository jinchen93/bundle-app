import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const RedditThreadItem = ({ path, thread }) => {
  console.log(path);
  const date = moment.unix(thread.date).fromNow();
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

  return (
    <div className="reddit-thread-item">
      <div className="thread-data-wrapper">
        <div className="score">
          {thread.comments}
        </div>
        <div className="description">
          <div>
            {renderTitle()}
            <span>
              ({thread.domain})
            </span>
          </div>
          <div className="publisher">
            <Link
              className="comments"
              to={`${path}/${thread.id}/${thread.permaTitle}`}
            >
              {thread.comments} comments
            </Link>
            submitted {date} by {thread.author}
          </div>
        </div>
      </div>

      {thread.thumbnail &&
        <img src={thread.thumbnail} alt={thread.title + " thumbnail"} />}
    </div>
  );
};

export default RedditThreadItem;
