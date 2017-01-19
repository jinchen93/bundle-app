import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { fetchSubredditPosts, selectSubreddit } from "../actions";
import Linkify from "react-linkify";
import { Grid, ListGroup, ListGroupItem, Well, Thumbnail, Row, Col } from "react-bootstrap";
import PostTitle from "../components/postTitle";
import PostContent from "../components/postContent";
import "../styles/posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    props.fetchSubredditPosts(props.subredditName);
  }

  render() {
    const { posts } = this.props;
    const handleTitleClick = id => {
      document.querySelector(`.redditPost${id}`).classList.toggle("hidden");
      document.querySelector(`.redditTitle${id}`).classList.toggle("minimizeText");
    };

    return (
      <Grid
        className={
          this.props.sidebarHidden === true
            ? "content-wrapper content-wrapper--expanded"
            : "content-wrapper"
        }
      >
        <Grid fluid={true}>
          {posts.map(post => {
              return (
                <ListGroup key={post.title}>
                  <Linkify>
                    <PostTitle
                      id={post.id}
                      title={post.title}
                      onTitleClick={id => handleTitleClick(id)}
                    />
                    <PostContent
                      id={post.id}
                      title={post.title}
                      content={post.selftext}
                      media={post.media}
                      url={post.url}
                    />
                    <Well bsSize={"small"}>
                      <i className="fa fa-comments" aria-hidden="true"></i>
                    </Well>
                  </Linkify>
                </ListGroup>
              );
            })}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.subredditPosts,
    sidebarHidden: state.sidebarHidden,
    subreddits: state.subreddits
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubredditPosts, selectSubreddit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
