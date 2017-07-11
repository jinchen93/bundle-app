import React from "react";

const ListingItem = props => {
  const { reddit, channel, selected, handleClick, deleteMode } = props;
  if (reddit) {
    return (
      <div
        onClick={handleClick}
        data-id={channel.id}
        className={selected ? "listing-item selected" : "listing-item"}
        id={deleteMode ? "deleting" : ""}
      >
        /r/{channel.name}
      </div>
    );
  } else {
    return (
      <div
        onClick={handleClick}
        data-id={channel.id}
        className={selected ? "listing-item selected" : "listing-item"}
        id={deleteMode ? "deleting" : ""}
      >
        <img src={channel.thumbnail} alt={channel.name + " thumbnail"} />
        {channel.name}
      </div>
    );
  }
};

export default ListingItem;
