import React from 'react';
import YoutubeChannelListVids from './youtube_channel_list_vids';

const YoutubeChannels = ({channelVideos, currentChannel, channels, onVideoSelect, onChannelSelect}) => {
  const channelItems = channelVideos.map( video => {
    return(
      <YoutubeChannelListVids
        key={video.etag}
        video={video} 
        onVideoSelect={onVideoSelect} />
    );
  });

  const renderChannels = channels.map( channel => {
    // Render active channel button
    if (currentChannel === channel.name) {
      return ( 
        <button
          key={channel.name} 
          onClick={ () => { onChannelSelect(channel)} } 
          className="btn btn-default active">
          {channel.name}
        </button>
      );        
    }
    // Render inactive channel buttons
    else {
      return (
        <button 
          key={channel.name}
          onClick={ () => { onChannelSelect(channel)} } 
          className="btn btn-default">
            {channel.name}
        </button>
      );
    }
  });

  return(
    <div className="container-fluid">
      <div className="panel">
        <div className="btn-group">
          {renderChannels}
        </div>
      </div>
      
      <div className="row-fluid">
        <div className="col-xs-1"></div>
          {channelItems}
        </div>
    </div>
  );
};

export default YoutubeChannels;