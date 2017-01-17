import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { fetchSubredditPosts } from "../actions";
import { Grid, Row, Col, Well } from "react-bootstrap";

class Posts extends Component {
  constructor(props) {
    super(props);
    if (props.subredditName !== undefined) {
      props.fetchSubredditPosts(props.subredditName);
    }
  }

  render() {
    const { posts } = this.props;
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
                <Row key={post.title}>
                  <Col xsOffset={1} xs={10}>
                    <Well>
                      <h4>{post.title}</h4>
                      <a href={post.url}>{post.url}</a>
                      <h6>{post.selftext}</h6>
                    </Well>
                  </Col>
                </Row>
              );
            })}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.subredditPosts, sidebarHidden: state.sidebarHidden };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubredditPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
