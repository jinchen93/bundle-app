import React, { Component } from "react";
import { connect } from "react-redux";
import Subreddits from "./subreddits";
import Posts from "./posts";

class RedditApp extends Component {
  render() {
    const { subreddits, subredditPosts } = this.props;
    if (subreddits.all.length === 0) {
      return <Subreddits />;
    } else {
      return (
        <div className="wrapper">
          <Subreddits />
          <Posts subredditName={subreddits.all[subreddits.current].subreddit} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { subreddits: state.subreddits, subredditPosts: state.subredditPosts };
}

export default connect(mapStateToProps)(RedditApp)
