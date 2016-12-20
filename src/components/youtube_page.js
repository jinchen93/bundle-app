import React, { Component } from 'react';
import Request from 'superagent';
import YoutubeChannels from './youtube_channels';
import YoutubeChannelItem from './youtube_channel_item';

const API_KEY = 'AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4';
const channels = [
    { 
      name: 'Asha', 
      url: `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername=gcmeanslove&key=${API_KEY}`,
      uploads: 'UU4YtAO528H6PdbJkJsolggA',
    },
    {
      name: 'Casey',
      url: `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername=caseyneistat&key=${API_KEY}`,
      uploads: 'UUtinbF-Q-fVthA0qrFQTgXQ',
    }
]

class YoutubePage extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      selectedChannelVideos: [],
      selectedChannel: '',
      selectedVideo: '',
      selectedVideoId: '',
      channelThumbnails: [],
    }
  }

  componentWillMount() {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channels[0].uploads}&key=${API_KEY}`;
    console.log(url);
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log('Error while getting videos');
      }
      else {
        const videos = response.body.items.map( (video) => {
          return video;
        });
        const thumbnails = videos.map( (video) => {
          return video.snippet.thumbnails.default.url;
        });
        this.setState({
          selectedChannelVideos: videos,
          selectedChannel: channels[0].name,
          selectedVideo: videos[0].snippet,
          selectedVideoId: videos[0].snippet.resourceId.videoId,
          channelThumbnails: thumbnails
        })
      }
    })
  }

  findChannelVideos(channel) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channel.uploads}&key=${API_KEY}`;
    console.log(url);
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log('Error while getting videos');
      }
      else {
        const videos = response.body.items.map( (video) => {
          return video;
        });
        const thumbnails = videos.map( (video) => {
          return video.snippet.thumbnails.default.url;
        });
        this.setState({
          selectedChannelVideos: videos,
          selectedChannel: channel.name,
          selectedVideo: videos[0].snippet,
          selectedVideoId: videos[0].snippet.resourceId.videoId,
          channelThumbnails: thumbnails
        })
        console.log(this.state);
      }
    })
  }

  render() {
    return(
      <div>
        <YoutubeChannels
          channels={channels}
          channelVideos={this.state.selectedChannelVideos}
          channel={this.state.selectedChannel} 
          onChannelSelect={ channel => { this.findChannelVideos(channel) } }
          onVideoSelect={ (selectedVideo, selectedVideoId) => { this.setState({ selectedVideo: selectedVideo.snippet, selectedVideoId }) }} />
        <YoutubeChannelItem 
          video={this.state.selectedVideo} 
          videoId={this.state.selectedVideoId}/>
      </div>
    )
  }
}

export default YoutubePage;