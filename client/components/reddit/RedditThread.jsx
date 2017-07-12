import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const RedditThread = ({ thread }) => {
  const date = moment.unix(thread.date).fromNow();
  const renderTitle = () => {
    if (thread.self) {
      return (
        <Link
          className="title"
          to={`/reddit/comments/${thread.id}/${thread.permaTitle}`}
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
          {renderTitle()}
          <div className="publisher">
            submitted {date} by {thread.author}
          </div>
        </div>
      </div>

      {thread.thumbnail &&
        <img src={thread.thumbnail} alt={thread.title + " thumbnail"} />}
    </div>
  );
};

export default RedditThread;
