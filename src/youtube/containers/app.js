import Request                      from 'superagent';
import { connect }                  from 'react-redux';
import React, { Component }         from 'react';
import { bindActionCreators }       from 'redux';

import { fetchVideos }              from '../actions'
import Channels                     from './channels';
import Hamburger                    from './hamburger';
import VideoList                    from '../components/videoList';
import CurrentVideo                 from '../components/currentVideo';
import { PLAYLIST_URL }             from '../constants';

class YoutubeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannelVideos: [],
      selectedVideo: '',
      selectedVideoId: ''
    };
    this.findChannelVideos(this.props.channels[this.props.channel]);
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
        this.props.fetchVideos(videos); 
      }
    });
  };
  

  componentWillReceiveProps (nextProps) {
    this.findChannelVideos(nextProps.channels[nextProps.channel])
  }

  render() {
    return (
      <div className={this.props.sidebar ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">
        <Channels />
            <div className="youtubeHeader">
              <Hamburger />
            
              <a className="channelHeader" href={"https://www.youtube.com/" + this.props.channels[this.props.channel].username} target="_blank">
                <div className="channelHeader">
                  <div className="channelName">
                    <strong>
                      <p>{this.props.channels[this.props.channel].name.split(" ")[0]}</p>
                      <p>{this.props.channels[this.props.channel].name.split(" ")[1]}</p>
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
    channel: state.channel,
    videos: state.videos,
    video: state.video
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);