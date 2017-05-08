import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import ChannelsContainer from './channels_container';
import Videos from "./videos";
import { fetchChannelsUsernames } from "../actions";

class YoutubeApp extends Component {
  componentDidMount() {
    this.props.fetchChannelsUsernames();
  }

  render() {
    const channels = this.props.channels;

    if (channels.all[0] === undefined) {
      return <ChannelsContainer />;
    } else {
      return (
        <div className="wrapper">
          <ChannelsContainer />
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
