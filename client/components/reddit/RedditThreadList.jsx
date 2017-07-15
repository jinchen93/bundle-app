import React from "react";
import RedditThreadItem from "./RedditThreadItem";
import Loader from "../loader/Loader";

class RedditThreadList extends React.Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.fetchNewThreads();
    } else {
      this.props.fetchAllSubreddit();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchNewThreads();
      if (!this.props.match.params.id) {
        this.props.fetchAllSubreddit();
      }
    }
  }

  fetchNewThreads() {
    if (this.props.match.params.id) {
      this.props.fetchSubredditThreads(this.props.match.params.id);
    }
  }

  render() {
    if (this.props.loading) {
      return <Loader type="reddit" />;
    }

    if (this.props.threads.length) {
      return (
        <div className="reddit-content-wrapper">
          {this.props.threads.map(thread =>
            <RedditThreadItem
              allSubreddit={!Boolean(this.props.match.params.id)}
              path={
                this.props.match.params.id
                  ? this.props.location.pathname
                  : "/reddit/r/all"
              }
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
