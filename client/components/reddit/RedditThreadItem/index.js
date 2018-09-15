import React from 'react';
import { unix } from 'moment';
import { Link } from 'react-router-dom';

const RedditThreadItem = ({ allSubreddit, expanded, path, thread }) => {
  const {
    date,
    comments: numComments,
    id,
    permaTitle,
    self,
    title,
    url,
    thumbnail,
    score,
    domain,
    author,
    subreddit,
  } = thread;

  const authorMeta = `submitted ${unix(date).fromNow()} by ${author}`;

  return (
    <div className="reddit-thread-item">
      <div className="thread-data-wrapper">
        <div className="score">{score}</div>
        <div className="description">
          <div>
            {self ? (
              <Link
                className="title"
                to={`${path}/${id}/${permaTitle}`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : (
              <a
                href={url}
                target="__blank"
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            <span>({domain})</span>
          </div>
          <div className="publisher">
            {expanded ? (
              <p className="comments">{numComments} comments</p>
            ) : (
              <Link className="comments" to={`${path}/${id}/${permaTitle}`}>
                {numComments} comments
              </Link>
            )}
            {authorMeta}
            {allSubreddit && ` to /r/${subreddit}`}
          </div>
        </div>
      </div>

      {thumbnail && (
        <div className="image-wrapper">
          <img src={thumbnail} alt={title + ' thumbnail'} />
        </div>
      )}
    </div>
  );
};

export default RedditThreadItem;
