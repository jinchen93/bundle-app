import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Channel from "../components/channel";
import { selectChannel, fetchVideos, selectVideo, fetchChannel, onUsernameInput, deleteAllChannels, deleteChannel } from "../actions";
import { Well, ListGroup, FormGroup, FormControl, Button } from "react-bootstrap";

import "../styles/channels.css";

class Channels extends Component {
  render() {
    const channels = this.props.channels;
    return (
      <div className="sidebar__wrapper">
        <Well className="sidebar__wrapper__header">
          CHANNELS
        </Well>
        <ListGroup>
          {channels.all.map(
              channel =>
                <Channel key={channel._id.toString()} id={channel._id.toString()} position={
                  channels.all.map(channel => channel.username).indexOf(channel.username)
                } name={channel.name} current={channels.current} onSelectClick={position => {
                    this.props.selectChannel(position);
                    this.props.fetchVideos(channels.all[position]);
                    this.props.selectVideo(0);
                  }} onDeleteClick={id => {
                    this.props.deleteChannel(id);
                    this.props.selectVideo(0);
                  }} status={
                  channels.all[channels.current].name === channel.name
                    ? "sidebar__wrapper__channel--selected"
                    : "sidebar__wrapper__channel"
                } image={channel.thumbnail} />
            )}
        </ListGroup>
        <form onSubmit={event => {
            event.preventDefault();
            this.props.fetchChannel(this.props.usernameInput);
            this.props.onUsernameInput("");
          }}>
          <FormControl className="sidebar__wrapper__input" placeholder="  Add username" value={
            this.props.usernameInput
          } onChange={event => this.props.onUsernameInput(event.target.value)} />
          <Button block={
            true
          } bsStyle="success" type="submit" className="sidebar__wrapper__input__add">
            +
          </Button>
          <Button block={true} bsStyle="danger" onClick={() => {
              this.props.deleteAllChannels();
              document.getElementsByClassName("btn-danger").blur();
            }}>
            Clear Usernames
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { channels: state.channels, usernameInput: state.usernameInput };
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

export default connect(mapStateToProps, mapDispatchToProps)(Channels)
