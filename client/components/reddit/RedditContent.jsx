import React from "react";
import { withRouter } from "react-router-dom";
import RedditThreadListContainer from "./RedditThreadListContainer";
import RedditCommentList from "./RedditCommentList";

class RedditContent extends React.Component {
  render() {
    return (
      <div className="media-content">
        {this.props.match.params.threadId
          ? <RedditCommentList />
          : <RedditThreadListContainer />}
      </div>
    );
  }
}

export default withRouter(RedditContent);
