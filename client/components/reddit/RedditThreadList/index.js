import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import RedditThreadItem from '../RedditThreadItem';
import Loader from '../../loader/Loader';
import {
  fetchSubredditThreads,
  fetchAllSubreddit,
} from '../../../actions/reddit_actions';

const mapStateToProps = ({
  loader: { redditThreads: loading },
  reddit: { threads },
}) => ({
  loading,
  threads,
});

const actions = {
  fetchSubredditThreads,
  fetchAllSubreddit,
};

const ALL_SUBREDDIT = '/reddit/r/all';

class RedditThreadList extends React.Component {
  componentDidMount() {
    const { match: { params: { id } }, fetchAllSubreddit } = this.props;

    if (id) return this.fetchNewThreads();
    fetchAllSubreddit();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const {
      match: { params: { id } },
      fetchAllSubreddit,
    } = this.props;

    if (prevId !== id) {
      this.fetchNewThreads();
      if (!id) {
        fetchAllSubreddit();
      }
    }
  }

  fetchNewThreads() {
    const {
      match: { params: { id } },
      fetchSubredditThreads,
    } = this.props;

    if (id) fetchSubredditThreads(id);
  }

  render() {
    const {
      match: { params: { id } },
      location: { pathname },
      loading,
      threads,
    } = this.props;

    if (loading) return <Loader type="reddit" />;

    if (!threads.length) return null;

    return (
      <div className="reddit-content-wrapper">
        {threads.map(thread => (
          <RedditThreadItem
            allSubreddit={!Boolean(id)}
            path={id ? pathname : ALL_SUBREDDIT}
            key={thread.id}
            thread={thread}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedditThreadList)
);
