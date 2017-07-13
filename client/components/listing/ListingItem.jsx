import React from "react";
import { Link } from "react-router-dom";

const ListingItem = props => {
  const { reddit, channel, selected, deleteMode, mode } = props;

  return (
    <Link
      id={deleteMode ? `deleting-${mode}` : ""}
      className={selected ? "listing-item selected" : "listing-item"}
      to={`/${mode}/${channel.id}/${channel.name}`}
    >
      {!reddit &&
        <img src={channel.thumbnail} alt={channel.name + " thumbnail"} />}
      {reddit ? "/r/" + channel.name : channel.name}
    </Link>
  );
};

export default ListingItem;
