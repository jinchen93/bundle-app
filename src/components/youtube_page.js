import React, { Component } from 'react';
import Request from 'superagent';
import YoutubeChannels from './youtube_channels';
import YoutubeChannelVid from './youtube_channel_vid';

// URL to get channel properties: https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername=gcmeanslove&key=${API_KEY}
const API_KEY = 'AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4';
const Channels = [
    {
      name: 'Casey Neistat',
      uploads: 'UUtinbF-Q-fVthA0qrFQTgXQ'
    },
    { 
      name: 'Asha Cuthbert', 
      uploads: 'UU4YtAO528H6PdbJkJsolggA'
    },
    {
      name: 'Josh James',
      uploads: 'UUynWet3zR-Yu7xUVHjFq6hA'
    },
    {
      name: 'Ben Brown',
      uploads: 'UUAkP51BEzkKimJh7KDflx_g'
    },
    {
      name: 'Jon Olsson',
      uploads: 'UUyQb1TTrfRzQZmEfsx770qw'
    },
    {
      name: 'Justin Escalona',
      uploads: 'UUMTuzWoOmO_A6hw0878xnQg'
    }
];

class YoutubePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      selectedChannelVideos: [],
      selectedChannel: '',
      selectedVideo: '',
      selectedVideoId: ''
    };
    this.findChannelVideos(Channels[0]);
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
          selectedVideo: videos[0].snippet,
          selectedVideoId: videos[0].snippet.resourceId.videoId,
        });
      }
    });
  };

  render() {
    return(
      <div className="container youtubeContainer">
        <YoutubeChannels
          channels={Channels}
          channelVideos={this.state.selectedChannelVideos}
          currentChannel={this.state.selectedChannel}
          onChannelSelect={ channel => { this.findChannelVideos(channel) } }
          onVideoSelect={ (selectedVideo, selectedVideoId) => { this.setState({ selectedVideo: selectedVideo.snippet, selectedVideoId }) }} />
        <YoutubeChannelVid 
          video={this.state.selectedVideo} 
          videoId={this.state.selectedVideoId}/>
      </div>
    );
  };
};

export default YoutubePage;