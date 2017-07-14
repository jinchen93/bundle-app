import React from "react";

class RedditComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childrenHidden: false };
    this.handleClick = this.handleClick.bind(this);
  }

  renderReplies() {
    const { alternateColor, comment } = this.props;
    if (comment.replies) {
      return comment.replies.map(comment =>
        <RedditComment
          alternateColor={!alternateColor}
          key={comment.id}
          comment={comment}
        />
      );
    }
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ childrenHidden: !this.state.childrenHidden });
  }

  render() {
    const { alternateColor, topComment, comment } = this.props;
    if (comment.body) {
      return (
        <div className={topComment ? "top" : ""}>
          <div className={alternateColor ? "comment grey" : "comment"}>
            <div className="comment-meta-data">
              <span className="author">
                {comment.author}
              </span>
              <span className="points">
                {comment.score} points{" "}
                <button onClick={this.handleClick}>
                  <i
                    className={
                      this.state.childrenHidden ? "ion-plus" : "ion-minus"
                    }
                  />
                </button>
              </span>
            </div>
            {!this.state.childrenHidden &&
              <div
                className="comment-body"
                dangerouslySetInnerHTML={{ __html: comment.body }}
              />}
          </div>
          {!this.state.childrenHidden &&
            <div className="children">
              {this.renderReplies()}
            </div>}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RedditComment;
