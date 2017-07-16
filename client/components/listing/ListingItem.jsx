import React from "react";
import { Link } from "react-router-dom";

const ListingItem = props => {
  const { handleClick, reddit, channel, selected, deleteMode, mode } = props;

  return (
    <Link
      id={deleteMode ? `deleting-${mode}` : ""}
      data-id={channel.id}
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
      {reddit ? "/r/" + channel.name : channel.name}
    </Link>
  );
};

export default ListingItem;
