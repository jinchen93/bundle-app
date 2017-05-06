import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import {
  fetchSubredditPosts,
  selectSubreddit,
  fetchPostComments,
} from "../actions";
import ContentWrapper from "../../app/components/contentWrapper";
import { Grid } from "react-bootstrap";
import Post from "./post";
import "../styles/posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchSubredditPosts(this.props.subredditName, this.props.sortBy);
  }

  render() {
    return (
      <ContentWrapper>
        <Grid fluid={true}>
          {this.props.posts.map(post => {
            return (
              <Post
                key={post.title}
                id={post.id}
                title={post.title}
                selftext={post.selftext}
                media={post.media}
                url={post.url}
                permalink={post.permalink}
                preview={post.preview}
              />
            );
          })}
        </Grid>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.subredditPosts,
    sidebarHidden: state.sidebarHidden,
    subreddits: state.subreddits,
    sortBy: state.sortBy,
    navbarToggle: state.navbarToggle,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchSubredditPosts, selectSubreddit, fetchPostComments },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
