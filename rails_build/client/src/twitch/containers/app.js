import React, {Component} from 'react';
import {connect} from 'react-redux';
import TwitchChannels from './twitchChannels';
import Player from '../components/player';
import '../styles/styles.css';

class Twitch extends Component {
  render() {
    return (
      <div className="wrapper">
        <TwitchChannels />
        <Player />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {twitchChannels: state.twitchChannels};
}

export default connect(mapStateToProps)(Twitch);
