import React, { Component } from "react";
import { connect } from "react-redux";
import TwitchChannels from "./twitchChannels";
import Player from "../components/player";
import "../styles/styles.css";
import { fetchTwitchChannels } from "../actions";
import { bindActionCreators } from "redux";

class Twitch extends Component {
  componentDidMount() {
    this.props.fetchTwitchChannels();
  }

  render() {
    return (
      <div className="wrapper">
        <TwitchChannels />
        <Player />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTwitchChannels }, dispatch);
}

function mapStateToProps(state) {
  return { twitchChannels: state.twitchChannels };
}

export default connect(mapStateToProps, mapDispatchToProps)(Twitch);
