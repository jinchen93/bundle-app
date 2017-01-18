import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { fetchSubredditPosts } from "../actions";
import Linkify from "react-linkify";
import { Grid, ListGroup, ListGroupItem, Image, Thumbnail, Row, Col } from "react-bootstrap";
import "../styles/posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    if (props.subredditName !== undefined) {
      props.fetchSubredditPosts(props.subredditName);
    }
  }

  render() {
    const { posts } = this.props;
    const decodeHTML = html => {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };
    const isImage = url => {
      const extension = url.split(".").pop();
      switch (extension) {
        case "png":
          return true;
        case "jpg":
          return true;
        case "gif":
          return true;
        case "gifv":
          return true;
        default:
          return false;
      }
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
              const postText = post.selftext.split("\n");
              return (
                <ListGroup key={post.title}>
                  <Linkify>
                    <ListGroupItem
                      onClick={() => {
                          document.querySelector(
                            `.redditPost${post.id}`
                          ).classList.toggle("hidden");
                          document.querySelector(
                            `.redditTitle${post.id}`
                          ).classList.toggle("minimizeText");
                        }}
                    >
                      <h3 className={`redditTitle${post.id}`}>{post.title}</h3>
                    </ListGroupItem>
                    <ListGroupItem className={`redditPost${post.id}`}>
                      <h6>{post.url}</h6>
                      {isImage(post.url) === true ? (
                            <Row>
                              <Col sm={12} md={4} className={`thumbnail--${post.id}`}>
                                <Thumbnail
                                  src={post.url}
                                  alt={post.title}
                                  responsive={true}
                                  onClick={
                                    () =>
                                      document.querySelector(
                                        `.thumbnail--${post.id}`
                                      ).classList.toggle("col-md-4")
                                  }
                                />
                              </Col>
                            </Row>
                          ) : ""}
                      {
                        post.media === null
                          ? ""
                          : (
                            <div
                              className="embed-responsive embed-responsive-16by9"
                              dangerouslySetInnerHTML={
                                {
                                  __html: decodeHTML(
                                    post.media.oembed.html.replace(
                                      "embedly-embed",
                                      "embed-responsive-item"
                                    )
                                  )
                                }
                              }
                            />
                          )
                      }
                      {postText.map(line => <text key={line}>{line}<br /></text>)}
                    </ListGroupItem>
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
  return { posts: state.subredditPosts, sidebarHidden: state.sidebarHidden };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSubredditPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
