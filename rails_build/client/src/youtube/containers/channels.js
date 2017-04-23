import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Channel from "../components/channel";
import {
  selectChannel,
  fetchVideos,
  selectVideo,
  fetchChannel,
  onUsernameInput,
  deleteAllChannels,
  deleteChannel
} from "../actions";
import { ListGroup, FormControl, Button } from "react-bootstrap";

import "../styles/channels.css";

class Channels extends Component {
  render() {
    const channels = this.props.channels;
    const onSelectClick = position => {
      this.props.selectChannel(position);
      this.props.fetchVideos(channels.all[position]);
      this.props.selectVideo(0);
    };
    const onDeleteClick = (id, position) => {
      this.props.deleteChannel({
        id: id,
        csrf_token: this.props.user.csrf_token
      });
      if (position === channels.current) {
        if (position === channels.all.length - 1) {
          this.props.selectChannel(0);
          this.props.fetchVideos(channels.all[0]);
        } else {
          this.props.selectChannel(position);
          this.props.fetchVideos(channels.all[position + 1]);
        }
      }
    };

    return (
      <div
        className={`sidebar__wrapper
          ${this.props.sidebarHidden === true ? "sidebar__wrapper--hidden" : ""}
          ${this.props.navbarToggle === true ? "sidebar__wrapper--navbar-toggled" : ""}
        `}
      >
        <div className="sidebar__wrapper__header">
          <h2>CHANNELS</h2>
        </div>
        <ListGroup>
          {channels.all.map(channel => (
            <Channel
              key={channel.id.toString()}
              id={channel.id.toString()}
              position={channels.all
                .map(channel => channel.username)
                .indexOf(channel.username)}
              name={channel.name}
              current={channels.current}
              onSelectClick={onSelectClick}
              onDeleteClick={onDeleteClick}
              status={
                channels.all[channels.current].name === channel.name
                  ? "sidebar__wrapper__channel--selected"
                  : "sidebar__wrapper__channel"
              }
              image={channel.thumbnail}
            />
          ))}
        </ListGroup>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.fetchChannel(
              this.props.usernameInput,
              this.props.user.csrf_token
            );
            this.props.onUsernameInput("");
          }}
        >
          <FormControl
            className="sidebar__wrapper__input"
            placeholder="Add channel username/ID"
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
              this.props.deleteAllChannels({
                csrf_token: this.props.user.csrf_token
              });
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
    channels: state.channels,
    usernameInput: state.usernameInput,
    sidebarHidden: state.sidebarHidden,
    user: state.user,
    navbarToggle: state.navbarToggle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchVideos,
      selectVideo,
      selectChannel,
      fetchChannel,
      onUsernameInput,
      deleteAllChannels,
      deleteChannel
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
