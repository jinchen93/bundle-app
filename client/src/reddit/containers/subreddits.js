import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Subreddit from "../components/subreddit";
import { ListGroup, FormControl, Button } from "react-bootstrap";
import {
  addSubreddit,
  onSubredditInput,
  deleteAllSubreddits,
  selectSubreddit,
  deleteSubreddit,
  fetchSubredditPosts
} from "../actions";
import "../styles/subreddits.css";

class Subreddits extends Component {
  render() {
    const {
      subreddits,
      onSubredditInput,
      addSubreddit,
      subredditInput,
      sidebarHidden,
      deleteAllSubreddits
    } = this.props;

    const onSelectClick = position => {
      this.props.selectSubreddit(position);
      this.props.fetchSubredditPosts(subreddits.all[position].subreddit);
    };
    const onDeleteClick = (id, position) => {
      this.props.deleteSubreddit(id);
      if (position === subreddits.current) {
        if (position === subreddits.all.length - 1) {
          this.props.selectSubreddit(0);
          this.props.fetchSubredditPosts(subreddits.all[0].subreddit);
        } else {
          this.props.selectSubreddit(position);
          this.props.fetchSubredditPosts(subreddits.all[position + 1].subreddit);
        }
      }
    };

    return (
      <div
        className={
          sidebarHidden === true ? "sidebar__wrapper sidebar__wrapper--hidden" : "sidebar__wrapper"
        }
      >
        <div className="sidebar__wrapper__header">
          <h2>SUBREDDITS</h2>
        </div>
        <ListGroup>
          {
            subreddits.all.map(
              subreddit =>
                subreddit === ""
                  ? ""
                  : (
                    <Subreddit
                      key={subreddit._id.toString()}
                      id={subreddit._id.toString()}
                      position={
                        subreddits.all.map(sub => sub.subreddit).indexOf(subreddit.subreddit)
                      }
                      subredditName={subreddit.subreddit}
                      onSelectClick={onSelectClick}
                      onDeleteClick={onDeleteClick}
                      status={
                        subreddits.all[subreddits.current].subreddit === subreddit.subreddit
                          ? "sidebar__wrapper__subreddit--selected"
                          : "sidebar__wrapper__subreddit"
                      }
                    />
                  )
            )
          }
        </ListGroup>
        <form
          onSubmit={event => {
              event.preventDefault();
              addSubreddit(subredditInput);
              onSubredditInput("");
            }}
        >
          <FormControl
            className="sidebar__wrapper__input"
            placeholder="Add subreddit"
            value={subredditInput}
            onChange={event => onSubredditInput(event.target.value)}
          />
          <Button
            block={true}
            bsStyle="success"
            type="submit"
            className="sidebar__wrapper__input__add"
          >
            +
          </Button>
          <Button
            block={true}
            bsStyle="danger"
            onClick={() => {
                deleteAllSubreddits();
              }}
          >
            Clear Subreddits
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    subredditInput: state.subredditInput,
    subreddits: state.subreddits
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
      fetchSubredditPosts
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddits)
