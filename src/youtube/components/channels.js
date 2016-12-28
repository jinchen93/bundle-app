import React from 'react';

export default (props) => {
  const renderChannels = props.channels.map( channel => {
    // Render active channel button
    if (props.currentChannel === channel.name) {
      return ( 
        <li
          key={channel.name}
          onClick={ () => { props.onChannelSelect(channel)} } 
          className="activeChannel">
          <a id="activeChannel"><span>{channel.name}</span></a>
        </li>
      );        
    }
    // Render inactive channel buttons
    else {
      return (
        <li
          key={channel.name}
          onClick={ () => { props.onChannelSelect(channel)} } 
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