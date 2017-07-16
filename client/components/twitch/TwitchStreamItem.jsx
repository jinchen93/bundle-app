import React from "react";
import { Link } from "react-router-dom";

const TwitchStreamItem = ({ stream }) =>
  <div className="twitch-stream-item-container">
    <div className="twitch-stream-item">
      <div className="game-info">
        {stream.game}
      </div>
      <img src={stream.thumbnail} alt={stream.displayName} />
      <Link to="/" className="stream-status">
        {stream.status}
      </Link>
      <div className="stream-info">
        {stream.viewers} viewers on {stream.displayName}
      </div>
    </div>
  </div>;

export default TwitchStreamItem;
