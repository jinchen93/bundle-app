import React, { Component } from "react";
import Request from "superagent";
import Linkify from "react-linkify";
import { Panel, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/comments.css";

export default class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: null, visibilityFilter: false };
  }

  render() {
    const { permalink } = this.props;

    const decodeHTML = html => {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };

    const fetchComments = () => {
      const url = `https://www.reddit.com${permalink}.json`;
      Request.get(url).end((err, res) => {
        const fetchedData = res.body[1].data.children;
        this.setState({ comments: fetchedData });
      });
    };

    const handleCommentClick = () => {
      if (this.state.comments === null) {
        fetchComments();
      }
      const visibilityFilter = !this.state.visibilityFilter;
      this.setState({ visibilityFilter });
    };

    const showComments = () => {
      if (this.state.comments === null) {
        return (
          <Button
            block={true}
            bsSize="small"
            bsStyle="default"
            onClick={() => handleCommentClick()}
          >
            <i className="fa fa-comments" aria-hidden="true" />
            Hide Comments
          </Button>
        );
      } else {
        return (
          <div>
            <Button
              block={true}
              bsSize="small"
              bsStyle="default"
              onClick={() => handleCommentClick()}
            >
              <i className="fa fa-comments" aria-hidden="true" />
              Hide Comments
            </Button>
            <ListGroup>
              {this.state.comments.map(comment => {
                  if (comment.data.body_html !== undefined) {
                    return (
                      <Linkify key={comment.data.id}>
                        <ListGroupItem
                          dangerouslySetInnerHTML={{ __html: decodeHTML(comment.data.body_html) }}
                        />
                      </Linkify>
                    );
                  } else {
                    return "";
                  }
                })}
            </ListGroup>
          </div>
        );
      }
    };

    const hideComments = () => {
      return (
        <Button block={true} bsSize="small" bsStyle="primary" onClick={() => handleCommentClick()}>
          <i className="fa fa-comments" aria-hidden="true" />
          Show Comments
        </Button>
      );
    };

    return (
      <Panel>
        {this.state.visibilityFilter === false ? hideComments() : showComments()}
      </Panel>
    );
  }
}
