import React from "react";

const ListingItem = ({ channel, selected, handleClick, deleteMode }) => {
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
};

export default ListingItem;
