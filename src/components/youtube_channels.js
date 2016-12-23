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
        <div className="col-md-2" key={channel.name}>
          <button
            onClick={ () => { onChannelSelect(channel)} } 
            className="btn btn-default active channelButton">
            {channel.name}
          </button>
        </div>
      );        
    }
    // Render inactive channel buttons
    else {
      return (
        <div className="col-md-2" key={channel.name} >
          <button
            onClick={ () => { onChannelSelect(channel)} } 
            className="btn btn-default channelButton">
            {channel.name}
          </button>
        </div>
      );
    }
  });

  return(
    <div className="channelContainer">
      <div className="row channelButtons">
        {renderChannels}
        <hr />
      </div>
      <div className="row videoThumbnails">
        <div className="col-sm-1"></div>
        {channelItems}
      </div>
    </div>
  );
};

export default YoutubeChannels;