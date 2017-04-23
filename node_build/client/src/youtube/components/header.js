import React from 'react';

export default (props) => {
  return(
    <a className="channelHeader" href={"https://www.youtube.com/" + props.username} target="_blank">
      <div className="channelHeader">
        <div className="channelName">
          <strong>
            <p>{props.name}</p>
          </strong>
        </div>
      </div>
    </a>
  )
}