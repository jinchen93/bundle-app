import React from "react";
import RedditThreadItem from "./RedditThreadItem";

const RedditThreadList = props => {
  if (props.threads.length) {
    return (
      <div className="reddit-content-wrapper">
        {props.threads.map(thread =>
          <RedditThreadItem path={props.path} key={thread.id} thread={thread} />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default RedditThreadList;
