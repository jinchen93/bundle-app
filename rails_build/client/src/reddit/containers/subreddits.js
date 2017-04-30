import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Subreddit from '../components/subreddit';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  ListGroup,
  Button,
} from 'react-bootstrap';
import {
  addSubreddit,
  onSubredditInput,
  deleteAllSubreddits,
  selectSubreddit,
  deleteSubreddit,
  fetchSubredditPosts,
  setSortBy,
} from '../actions';
import '../styles/subreddits.css';
import {SidebarForm, SidebarList} from '../../app/components/sidebar/modules';

class Subreddits extends Component {
  render() {
    const {
      subreddits,
      onSubredditInput,
      addSubreddit,
      subredditInput,
      sidebarHidden,
      deleteAllSubreddits,
      sortBy,
    } = this.props;

    const onSelectClick = position => {
      this.props.selectSubreddit(position);
      this.props.fetchSubredditPosts(
        subreddits.all[position].subreddit,
        sortBy
      );
    };
    const onDeleteClick = (id, position) => {
      this.props.deleteSubreddit(id, this.props.user.csrf_token);
      if (position === subreddits.current) {
        if (position === subreddits.all.length - 1) {
          this.props.selectSubreddit(0);
          this.props.fetchSubredditPosts(subreddits.all[0].subreddit, sortBy);
        } else {
          this.props.selectSubreddit(position);
          this.props.fetchSubredditPosts(
            subreddits.all[position + 1].subreddit,
            sortBy
          );
        }
      }
    };

    return (
      <SidebarList
        sidebarHidden={this.props.sidebarHidden}
        navbarToggle={this.props.navbarToggle}
      >
        <div className="sidebar__wrapper__header">
          <h2>SUBREDDITS</h2>
          <form>
            <FormGroup
              controlId="formControlsSelect"
              className="sort-by-selector"
            >
              <ControlLabel>TOP POSTS FROM PAST:</ControlLabel>
              <FormControl
                className="sort-by-selector-input"
                componentClass="select"
                onChange={e => {
                  this.props.setSortBy(e.target.value);
                  this.props.fetchSubredditPosts(
                    subreddits.all[subreddits.current].subreddit,
                    e.target.value
                  );
                }}
              >
                <option value="day">day</option>
                <option value="week">week</option>
                <option value="month">month</option>
                <option value="year">year</option>
              </FormControl>
            </FormGroup>
          </form>
        </div>

        <ListGroup>
          {subreddits.all.map(
            subreddit =>
              (subreddit === ''
                ? ''
                : <Subreddit
                    key={subreddit.id.toString()}
                    id={subreddit.id.toString()}
                    position={subreddits.all
                      .map(sub => sub.subreddit)
                      .indexOf(subreddit.subreddit)}
                    subredditName={subreddit.subreddit}
                    onSelectClick={onSelectClick}
                    onDeleteClick={onDeleteClick}
                    status={
                      subreddits.all[subreddits.current].subreddit ===
                        subreddit.subreddit
                        ? 'sidebar__wrapper__subreddit--selected'
                        : 'sidebar__wrapper__subreddit'
                    }
                  />)
          )}
        </ListGroup>

        <SidebarForm
          inputVal={subredditInput}
          type="REDDIT"
          inputAction={onSubredditInput}
          csrf_token={this.props.user.csrf_token}
          deleteAction={deleteAllSubreddits}
          addAction={addSubreddit}
        />

      </SidebarList>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    subredditInput: state.subredditInput,
    subreddits: state.subreddits,
    sortBy: state.sortBy,
    user: state.user,
    navbarToggle: state.navbarToggle,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addSubreddit,
      onSubredditInput,
      deleteAllSubreddits,
      selectSubreddit,
      deleteSubreddit,
      fetchSubredditPosts,
      setSortBy,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddits);
