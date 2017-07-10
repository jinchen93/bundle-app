import React from "react";

const ListingItem = ({ channel, selected, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      data-id={channel.id}
      className={"listing-item" + (selected ? " selected" : "")}
    >
      <img src={channel.thumbnail} alt={channel.name + " thumbnail"} />
      {channel.name}
    </div>
  );
};

export default ListingItem;
