import React from "react";
import { withRouter } from "react-router-dom";
import RedditThreadListContainer from "./RedditThreadListContainer";
import RedditCommentListContainer from "./RedditCommentListContainer";

class RedditContent extends React.Component {
  render() {
    return (
      <div className="media-content">
        {this.props.match.params.threadId
          ? <RedditCommentListContainer />
          : <RedditThreadListContainer />}
      </div>
    );
  }
}

export default withRouter(RedditContent);
