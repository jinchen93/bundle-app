// @flow

import React from "react";
import { withRouter } from "react-router-dom";
import RedditThreadList from "./RedditThreadList";
import RedditCommentList from "./RedditCommentList";

const RedditContent = props => (
  <div className="media-content white">
    {props.match.params.threadId ? (
      <RedditCommentList />
    ) : (
      <RedditThreadList />
    )}
  </div>
);

export default withRouter(RedditContent);
