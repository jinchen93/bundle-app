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
  deleteChannel,
} from "../actions";
import { ListGroup } from "react-bootstrap";
import { SidebarForm, SidebarList } from "../../app/components/sidebar/modules";

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
        csrf_token: this.props.user.csrf_token,
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
      <SidebarList
        sidebarHidden={this.props.sidebarHidden}
        navbarToggle={this.props.navbarToggle}
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

        <SidebarForm
          inputVal={this.props.usernameInput}
          type="YOUTUBE"
          inputAction={this.props.onUsernameInput}
          csrf_token={this.props.user.csrf_token}
          deleteAction={this.props.deleteAllChannels}
          addAction={this.props.fetchChannel}
        />

      </SidebarList>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    usernameInput: state.usernameInput,
    sidebarHidden: state.sidebarHidden,
    user: state.user,
    navbarToggle: state.navbarToggle,
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
      deleteChannel,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
