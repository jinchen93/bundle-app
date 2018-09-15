// @flow
import React, { Component } from 'react';
import MetaData from './MetaData';

type Props = {
  alternateColor: boolean,
  topComment: boolean,
  comment: Object,
};

type State = {
  childrenHidden: boolean,
};

class RedditComment extends Component<Props, State> {
  handleMinimizeClick: Function;

  constructor(props: Object) {
    super(props);
    this.state = { childrenHidden: false };
  }

  renderNestedComments(replies: Array<Object>, alternateColor: Boolean) {
    return replies.map(reply => (
      <RedditComment
        topComment={false}
        alternateColor={!alternateColor}
        key={reply.id}
        comment={reply}
      />
    ));
  }

  handleMinimizeClick = (e: Object) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ childrenHidden: !this.state.childrenHidden });
  };

  render() {
    const { childrenHidden } = this.state;
    const {
      alternateColor,
      topComment,
      comment: { author, score, body, replies },
    } = this.props;

    if (!body) return null;

    return (
      <div className={topComment ? 'top' : ''}>
        <div className={alternateColor ? 'comment grey' : 'comment'}>
          <MetaData
            author={author}
            onClick={this.handleMinimizeClick}
            childrenHidden={childrenHidden}
            score={score}
          />
          {!childrenHidden && (
            <div
              className="comment-body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          )}
        </div>
        {!childrenHidden &&
        replies && (
          <div className="children">
            {this.renderNestedComments(replies, alternateColor)}
          </div>
        )}
      </div>
    );
  }
}

export default RedditComment;
