import React, { Component } from "react";
import { connect } from "react-redux";
import Subreddits from "./subreddits";
import Posts from "./posts";
import { fetchSubreddits } from "../actions";

class RedditApp extends Component {
  componentDidMount() {
    this.props.fetchSubreddits();
  }

  render() {
    const { subreddits } = this.props;
    if (subreddits.all[0] === "") {
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
  return { subreddits: state.subreddits };
}

export default connect(mapStateToProps, { fetchSubreddits })(RedditApp);
