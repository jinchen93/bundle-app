import React, { Component } from 'react';
import Request from 'superagent';
import YoutubeChannels from './components/youtube_channels';
import YoutubeChannelVid from './components/youtube_channel_vid';
import YoutubeChannelListVids from './components/youtube_channel_list_vids';
import { API_KEY, CHANNELS } from './constants';

// URL to get channel properties: https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername=GaryVaynerchuk&key=AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4

class YoutubePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      selectedChannelVideos: [],
      selectedChannel: '',
      selectedChannelUsername: '',
      selectedVideo: '',
      selectedVideoId: '',
      sidebarToggled: false
    };
    this.findChannelVideos(CHANNELS[0]);
    this.toggleSidebarState = this.toggleSidebarState.bind(this);
  };

  findChannelVideos(channel) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channel.uploads}&key=${API_KEY}`;
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
          selectedChannel: channel.name,
          selectedChannelUsername: channel.username,
          selectedVideo: videos[0].snippet,
          selectedVideoId: videos[0].snippet.resourceId.videoId
        });
      }
    });
  };


  toggleSidebarState() {
    if(this.state.sidebarToggled === true) {
      this.setState({ sidebarToggled: false });
    }
    if(this.state.sidebarToggled === false) {
      this.setState({ sidebarToggled: true });
    }
  }


  render() {
    return (
      <div className={this.state.sidebarToggled ? 'youtubeContainer toggled' : 'youtubeContainer'} id="wrapper">

        <YoutubeChannels
            channels={CHANNELS}
            currentChannel={this.state.selectedChannel}
            onChannelSelect={ channel => { this.findChannelVideos(channel) } } />

            <div className="youtubeHeader">
              <div className='menu-toggle' onClick={this.toggleSidebarState}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            
              <a className="channelHeader" href={"https://www.youtube.com/" + this.state.selectedChannelUsername} target="_blank">
                <div className="channelHeader">
                  <div className="channelName">
                    <strong>
                      <p>{this.state.selectedChannel.split(" ")[0]}</p>
                      <p>{this.state.selectedChannel.split(" ")[1]}</p>
                    </strong>
                  </div>
                </div>
              </a>
            </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <YoutubeChannelListVids 
                  channelVideos={ this.state.selectedChannelVideos }
                  onVideoSelect={ (selectedVideo, selectedVideoId) => { this.setState({ selectedVideo: selectedVideo.snippet, selectedVideoId }) }} />
              <YoutubeChannelVid 
                  video={this.state.selectedVideo}
                  videoId={this.state.selectedVideoId}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default YoutubePage;