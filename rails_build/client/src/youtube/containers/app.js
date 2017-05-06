import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Channels from "./channels";
import Videos from "./videos";
import { fetchChannelsUsernames } from "../actions";

class YoutubeApp extends Component {
  componentDidMount() {
    this.props.fetchChannelsUsernames();
  }

  render() {
    const channels = this.props.channels;

    if (channels.all[0] === undefined) {
      return <Channels />;
    } else {
      return (
        <div className="wrapper">
          <Channels />
          <Videos channel={channels.all[channels.current]} />
        </div>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchChannelsUsernames
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return { channels: state.channels };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);
