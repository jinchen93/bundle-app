import React from "react";
import RedditThreadList from "./RedditThreadList";
import RedditCommentList from "./RedditCommentList";

class RedditContent extends React.Component {
  componentDidMount() {
    this.fetchNewThreads();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchNewThreads();
    }
  }

  componentWillUnmount() {
    this.props.resetThreads();
  }

  fetchNewThreads() {
    if (this.props.match.params.id) {
      this.props.fetchSubredditThreads(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className="media-content">
        <RedditThreadList
          path={this.props.location.pathname}
          threads={this.props.threads}
        />
        <RedditCommentList />
      </div>
    );
  }
}

export default RedditContent;
