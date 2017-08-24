import React from "react";
import { Link } from "react-router-dom";

const ListingItem = props => {
  const { handleClick, reddit, channel, selected, deleteMode, mode } = props;
  let channelName;

  if (reddit) {
    channelName = "/r/" + channel.name;
  } else {
    channelName = channel.name;
  }

  return (
    <Link
      id={deleteMode ? `deleting-${mode}` : ""}
      data-id={channel.id}
      data-name={channelName}
      data-mode={mode}
      className={selected ? "listing-item selected" : "listing-item"}
      to={
        mode === "twitch"
          ? `/twitch/${channel.idName}`
          : `/${mode}/${channel.id}/${channel.name}`
      }
      onClick={handleClick}
    >
      {!reddit &&
        <img src={channel.thumbnail} alt={channel.name + " thumbnail"} />}
      {channelName}
      {channel.viewers &&
        <div className="twitch-viewer-count">
          <div className="circle" />
          {channel.viewers}
        </div>}
    </Link>
  );
};

export default ListingItem;
