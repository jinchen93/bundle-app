import React from "react";
import RedditThreadItem from "./RedditThreadItem";

class RedditThreadList extends React.Component {
  componentWillUnmount() {
    this.props.resetThreads();
  }

  componentDidMount() {
    this.fetchNewThreads();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchNewThreads();
    }
  }

  fetchNewThreads() {
    if (this.props.match.params.id) {
      this.props.fetchSubredditThreads(this.props.match.params.id);
    }
  }

  render() {
    if (this.props.threads.length) {
      return (
        <div className="reddit-content-wrapper">
          {this.props.threads.map(thread =>
            <RedditThreadItem
              path={this.props.path}
              key={thread.id}
              thread={thread}
            />
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RedditThreadList;
