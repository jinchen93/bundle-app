import { connect }                  from 'react-redux';
import React, { Component }         from 'react';
import { bindActionCreators }       from 'redux';

import Channels                     from './channels';
import Hamburger                    from './hamburger';
import Header                       from '../components/header';
import VideoList                    from '../components/videoList';
import CurrentVideo                 from '../components/currentVideo';
import { fetchVideos, selectVideo } from '../actions'

class YoutubeApp extends Component {
  constructor(props) {
    super(props);
    this.props.fetchVideos(this.props.channels[this.props.channel]);
  };

  render() {
    return (
      <div className={this.props.sidebar ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">
        <Channels />
        <div className="youtubeHeader">
          <Hamburger />
          <Header
            username={this.props.channels[this.props.channel].username} 
            name={this.props.channels[this.props.channel].name} 
          />
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <VideoList 
                channelVideos={ this.props.videos }
                onSelectVideo={ (position) => this.props.selectVideo(position) }
              />
              { 
                this.props.videos.length > 0 ? 
                  <CurrentVideo video={this.props.videos[this.props.video]} /> 
                : 
                  ''
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { 
    sidebar: state.sidebar,
    channels: state.channels,
    channel: state.channel,
    videos: state.videos,
    video: state.video
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);