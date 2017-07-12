import React from "react";
import RedditThread from "./RedditThread";

class RedditContent extends React.Component {
  constructor(props) {
    super(props);
    this.renderThreads = this.renderThreads.bind(this);
  }

  componentDidMount() {
    this.fetchNewThreads();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSubreddit !== this.props.currentSubreddit) {
      this.fetchNewThreads();
    }
  }

  fetchNewThreads() {
    if (this.props.currentSubreddit) {
      this.props.fetchSubredditThreads(this.props.currentSubreddit);
    }
  }

  renderThreads() {
    if (this.props.threads.length) {
      return (
        <div className="reddit-content-wrapper">
          {this.props.threads.map(thread =>
            <RedditThread key={thread.id} thread={thread} />
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="media-content">
        {this.renderThreads()}
      </div>
    );
  }
}

export default RedditContent;
