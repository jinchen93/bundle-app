import React from "react";
import ListingHeader from "./ListingHeader";
import ListingItem from "./ListingItem";

const Listing = ({ youtubeChannels }) =>
  <div className="listing-wrapper">
    <div className="listing-content">
      <ListingHeader />
      {youtubeChannels.map(channel =>
        <ListingItem key={channel.id} channel={channel} />
      )}
    </div>
  </div>;

export default Listing;
