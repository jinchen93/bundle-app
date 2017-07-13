import React from "react";

class RedditCommentList extends React.Component {
  componentDidMount() {
    this.props.fetchRedditComments(this.props.match.params.threadId);
  }

  render() {
    return <div>Hi</div>;
  }
}

export default RedditCommentList;
