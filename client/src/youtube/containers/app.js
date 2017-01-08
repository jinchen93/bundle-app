import { connect }                  from 'react-redux';
import React, { Component }         from 'react';
import { bindActionCreators }       from 'redux';

import Channels                     from './channels';
import Hamburger                    from './hamburger';
import Videos                       from './videos';
import Header                       from '../components/header';

import { fetchChannelsUsernames } from '../actions'

class YoutubeApp extends Component {
  render() {
    const channels = this.props.channels;

    if (channels.all[0] === undefined) {
      return (
        <div className={this.props.sidebar ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">
          <Channels />
          <div className="youtubeHeader">
            <Hamburger />
            <Header
              username=''
              name=''
            />
          </div>
        </div>        
      )
    }
    else {
      return (
        <div className={this.props.sidebar ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">
          <Channels />
          <div className="youtubeHeader">
            <Hamburger />
            <Header
              username={channels.all[channels.current].username} 
              name={channels.all[channels.current].name} 
            />
          </div>
          <Videos channel={channels.all[channels.current]}/>
        </div>
      );
    }
  };
};

function mapStateToProps(state) {
  return { 
    sidebar: state.sidebar,
    channels: state.channels,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChannelsUsernames }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);