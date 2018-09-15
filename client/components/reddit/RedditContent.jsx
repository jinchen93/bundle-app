// @flow

import React from "react";
import { withRouter } from "react-router-dom";
import RedditThreadListContainer from "./RedditThreadListContainer";
import RedditCommentList from "./RedditCommentList";

const RedditContent = props => (
  <div className="media-content white">
    {props.match.params.threadId ? (
      <RedditCommentList />
    ) : (
      <RedditThreadListContainer />
    )}
  </div>
);

export default withRouter(RedditContent);
