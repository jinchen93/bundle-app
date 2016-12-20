import React from 'react';
import YoutubeChannelList from './youtube_channel_list';
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

const YoutubeChannels = ({channelVideos, channel, onVideoSelect, onChannelSelect}) => {
  const channelItems = channelVideos.map( video => {
    return(
      <YoutubeChannelList
        key={video.etag}
        video={video} 
        onVideoSelect={onVideoSelect} />
    )
  })

  const renderChannels = channels.map( channel => {
      return <button onClick={ () => onChannelSelect(channel) } 
        className="btn btn-default">{channel.name}</button>
  })


  return(
    <div className="container">
      <div className="panel">
        {renderChannels}
      </div>
      
      <div className="row">
        <div className="col-sm-1"></div>
        {channelItems}
      </div>
    </div>
  )
}

export default YoutubeChannels;