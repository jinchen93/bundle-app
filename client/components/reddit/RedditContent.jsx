import React from "react";
import { withRouter } from "react-router-dom";
import RedditThreadListContainer from "./RedditThreadListContainer";
import RedditCommentListContainer from "./RedditCommentListContainer";

const RedditContent = props =>
  <div className="media-content white">
    {props.match.params.threadId
      ? <RedditCommentListContainer />
      : <RedditThreadListContainer />}
  </div>;

export default withRouter(RedditContent);
