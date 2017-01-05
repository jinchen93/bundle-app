import { connect }                  from 'react-redux';
import React, { Component }         from 'react';
import { bindActionCreators }       from 'redux';

import Channels                     from './channels';
import Hamburger                    from './hamburger';
import Header                       from '../components/header';
import VideoList                    from '../components/videoList';
import CurrentVideo                 from '../components/currentVideo';

import { 
  fetchVideos, 
  selectVideo, 
  fetchChannels 
} from '../actions'

class YoutubeApp extends Component {
  constructor(props) {
    super(props);
    this.props.fetchVideos(this.props.channels.all[this.props.channels.current]);
  };

  render() {
    const channels = this.props.channels
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
    videos: state.videos,
    video: state.video
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo, fetchChannels }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);