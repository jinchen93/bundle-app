import React, { Component } from 'react';
import Request from 'superagent';
import YoutubeChannels from './youtube_channels';
import YoutubeChannelVid from './youtube_channel_vid';
import YoutubeChannelListVids from './youtube_channel_list_vids';

// URL to get channel properties: https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername=GaryVaynerchuk&key=AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4
const API_KEY = 'AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4';
const Channels = [
    {
      name: 'Casey Neistat',
      username: 'caseyneistat',
      uploads: 'UUtinbF-Q-fVthA0qrFQTgXQ'
    },
    { 
      name: 'Asha Cuthbert', 
      username: 'gcmeanslove',
      uploads: 'UU4YtAO528H6PdbJkJsolggA'
    },
    {
      name: 'Josh James',
      username: 'joshjameskiwibushman',
      uploads: 'UUynWet3zR-Yu7xUVHjFq6hA'
    },
    {
      name: 'Ben Brown',
      username: 'benbrown100',
      uploads: 'UUAkP51BEzkKimJh7KDflx_g'
    },
    {
      name: 'Jon Olsson',
      username: 'JonOlssonVideoBlog',
      uploads: 'UUyQb1TTrfRzQZmEfsx770qw'
    },
    {
      name: 'Gary Vaynerchuk',
      username: 'GaryVaynerchuk',
      uploads: 'UUctXZhXmG-kf3tlIXgVZUlw'
    },
    {
      name: 'Eric Conover',
      username: 'erikconover',
      uploads: 'UUu8ucb1LRJd1gwwXutYDgTg'
    }
];

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
    this.findChannelVideos(Channels[0]);
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
            channels={Channels}
            currentChannel={this.state.selectedChannel}
            onChannelSelect={ channel => { this.findChannelVideos(channel) } } />

            <div className="youtubeHeader">
              <div className={ this.state.sidebarToggled ? 'menu-toggle is-active' : 'menu-toggle' } onClick={this.toggleSidebarState}>
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