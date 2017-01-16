import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Subreddit from "../components/subreddit";
import {
  selectSubreddit,
  fetchSubreddit,
  onUsernameInput,
  deleteAllSubreddits,
  deleteSubreddit
} from "../actions";
import { ListGroup, FormControl, Button } from "react-bootstrap";

import "../styles/subreddits.css";

class Subreddits extends Component {
  render() {
    const subreddits = this.props.subreddits;
    const onSelectClick = position => {
      this.props.selectSubreddit(position);
    };
    const onDeleteClick = (id, position) => {
      this.props.deleteSubreddit(id);
      if (position === subreddits.current) {
        if (position === subreddits.all.length - 1) {
          this.props.selectSubreddit(0);
        } else {
          this.props.selectSubreddit(position);
        }
      }
    };

    return (
      <div
        className={
          this.props.sidebarHidden === true
            ? "sidebar__wrapper sidebar__wrapper--hidden"
            : "sidebar__wrapper"
        }
      >
        <div className="sidebar__wrapper__header">
          <h2>SUBREDDITS</h2>
        </div>
        <ListGroup>
          {
            subreddits.all.map(
              subreddit => (
                <Subreddit
                  key={subreddit._id.toString()}
                  id={subreddit._id.toString()}
                  position={
                    subreddits.all.map(subreddit => subreddit.username).indexOf(subreddit.username)
                  }
                  name={subreddit.name}
                  current={subreddits.current}
                  onSelectClick={onSelectClick}
                  onDeleteClick={onDeleteClick}
                  status={
                    subreddits.all[subreddits.current].name === subreddit.name
                      ? "sidebar__wrapper__subreddit--selected"
                      : "sidebar__wrapper__subreddit"
                  }
                  image={subreddit.thumbnail}
                />
              )
            )
          }
        </ListGroup>
        <form
          onSubmit={event => {
              event.preventDefault();
              this.props.fetchSubreddit(this.props.usernameInput);
              this.props.onUsernameInput("");
            }}
        >
          <FormControl
            className="sidebar__wrapper__input"
            placeholder="Add username"
            value={this.props.usernameInput}
            onChange={event => this.props.onUsernameInput(event.target.value)}
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
                this.props.deleteAllSubreddits();
                document.getElementsByClassName("btn-danger").blur();
              }}
          >
            Clear Usernames
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
    usernameInput: state.usernameInput,
    sidebarHidden: state.sidebarHidden
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectSubreddit, fetchSubreddit, onUsernameInput, deleteAllSubreddits, deleteSubreddit },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddits)
