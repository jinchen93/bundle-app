import Request                      from 'superagent';
import { connect }                  from 'react-redux';
import React, { Component }         from 'react';
import { bindActionCreators }       from 'redux';

import { selectChannel }            from './actions';
import Channels                     from './components/channels';
import Hamburger                    from './containers/hamburger';
import VideoList                    from './components/videoList';
import CurrentVideo                 from './components/currentVideo';
import { PLAYLIST_URL }   from './constants';

class YoutubePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannelVideos: [],
      selectedVideo: '',
      selectedVideoId: ''
    };
    this.findChannelVideos(this.props.channel);
  };

  findChannelVideos(channel) {
    const url = PLAYLIST_URL + channel.uploads;
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log('Error while getting videos');
      }
      else {
        const videos = response.body.items.map( (video) => {
          return video;
        });
        this.setState({
          selectedChannelVideos: videos,
          selectedVideo: videos[0].snippet,
          selectedVideoId: videos[0].snippet.resourceId.videoId
        });
      }
    });
  };

  render() {
    return (
      <div className={this.props.sidebar ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">
        <Channels
            channels={this.props.channels}
            currentChannel={this.props.channel}
            onChannelSelect={ channel => { this.findChannelVideos(channel) } } />

            <div className="youtubeHeader">
              <Hamburger />
            
              <a className="channelHeader" href={"https://www.youtube.com/" + this.props.channel.username} target="_blank">
                <div className="channelHeader">
                  <div className="channelName">
                    <strong>
                      <p>{this.props.channel.name.split(" ")[0]}</p>
                      <p>{this.props.channel.name.split(" ")[1]}</p>
                    </strong>
                  </div>
                </div>
              </a>

            </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <VideoList 
                  channelVideos={ this.state.selectedChannelVideos }
                  onVideoSelect={ (selectedVideo, selectedVideoId) => { this.setState({ selectedVideo: selectedVideo.snippet, selectedVideoId }) }} />
              <CurrentVideo 
                  video={this.state.selectedVideo}
                  videoId={this.state.selectedVideoId}/>
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
    channel: state.channel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePage);