import React from 'react';

export default (props) => {
  const activeChannelStyling = () => {
    return (
      props.status === 'activeChannel' ? <br/> : ''
    );
  };

  const channelThumbnail = () => {
    return (
      <img id={props.status} src={props.image} alt={props.name} />
    );
  };

  const handleSelectClick = (position) => {
    props.onSelectClick(position);
  };

  const handleDeleteClick = (id) => {
    props.onDeleteClick(id);
  };

  return(
    <li className={props.status}>
      <a id={props.status} href="#">
        <span className="channel-name" onClick={ () => handleSelectClick(props.position) } >
          {channelThumbnail()}      
          {activeChannelStyling()}
          {props.name}
        </span>
        <span id="channel-delete-x" onClick={ () => handleDeleteClick(props.id) }>x</span>
      </a>
    </li>
  );
};