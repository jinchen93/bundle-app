import React, {Component} from 'react';
import {connect} from 'react-redux';

class Twitch extends Component {
  render() {
    return <div className="wrapper" />;
  }
}

function mapStateToProps(state) {
  return {twitchChannels: state.twitchChannels};
}

export default connect(mapStateToProps)(Twitch);
