// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Loader from '../../loader/Loader';
import RedditComment from '../RedditComment';
import RedditThreadItem from '../RedditThreadItem';
import { fetchRedditComments } from '../../../actions/reddit_actions';

const mapStateToProps = ({
  reddit: { comments: { thread, comments } },
  loader: { redditComments: loading },
}) => ({
  thread,
  comments,
  loading,
});

const actions = { fetchRedditComments };

type Props = {
  match: Object,
  fetchRedditComments: Function,
  thread: Object,
  comments: Array<Object>,
  loading: Boolean,
  comment: Object,
};

class RedditCommentList extends PureComponent<Props> {
  componentDidMount() {
    const { fetchRedditComments, match: { params: { threadId } } } = this.props;

    fetchRedditComments(threadId);
  }

  render() {
    const {
      match: { params: { channelName } },
      loading,
      comments,
      thread,
    } = this.props;

    if (loading) return <Loader type="reddit" />;

    if (!comments) return null;

    return (
      <div className="reddit-comment-list-container">
        <div className="reddit-content-wrapper">
          <div className="thread-post">
            <RedditThreadItem
              self
              allSubreddit={channelName === 'all'}
              thread={thread}
            />
            {thread.body && (
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: thread.body }}
              />
            )}
          </div>
          {comments.map(comment => (
            <RedditComment
              topComment
              alternateColor={false}
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditCommentList)
);
