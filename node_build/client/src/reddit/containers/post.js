import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import PostContent from "../components/postContent";
import PostComments from "./postComments";
import "../styles/post.css";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { visibilityFilter: true };
  }

  render() {
    const { id, title, selftext, media, url, permalink, preview } = this.props;
    const handleTitleClick = () => {
      const newVisibilityFilter = !this.state.visibilityFilter;
      this.setState({ visibilityFilter: newVisibilityFilter });
    };

    if (this.state.visibilityFilter === true) {
      return (
        <ListGroup className="reddit-post-expanded">
          <ListGroupItem onClick={() => handleTitleClick()} className="reddit-post-title">
            {title}
          </ListGroupItem>
          <PostContent
            id={id}
            title={title}
            content={selftext}
            media={media}
            url={url}
            preview={preview}
          />
          <PostComments permalink={permalink} />
        </ListGroup>
      );
    } else {
      return (
        <ListGroup>
          <ListGroupItem onClick={() => handleTitleClick()} className="reddit-post-title">
            <h5>{title}</h5>
          </ListGroupItem>
        </ListGroup>
      );
    }
  }
}
