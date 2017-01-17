import React, { Component } from "react";
import { connect } from "react-redux";

import { ListGroup } from "react-bootstrap";
import { fetchSubreddit } from "../actions";
import "../styles/subreddits.css";

class Subreddits extends Component {
  render() {
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
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sidebarHidden: state.sidebarHidden };
}

export default connect(mapStateToProps)(Subreddits)
