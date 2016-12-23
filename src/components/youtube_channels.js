import React from 'react';

const YoutubeChannels = ({currentChannel, channels, onChannelSelect, sidebarToggled}) => {

  const renderChannels = channels.map( channel => {
    // Render active channel button
    if (currentChannel === channel.name) {
      return ( 
        <li
          key={channel.name}
          onClick={ () => { onChannelSelect(channel)} } 
          className="activeChannel">
          <a>{channel.name}</a>
        </li>
      );        
    }
    // Render inactive channel buttons
    else {
      return (
        <li
          key={channel.name}
          onClick={ () => { onChannelSelect(channel)} } 
          className="inactiveChannel">
          <a><span>{channel.name}</span></a>
        </li>
      );
    }
  });

  return(
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        {renderChannels}
      </ul>
    </div>
  );
};

export default YoutubeChannels;