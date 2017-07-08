import React from "react";
import NavContainer from "./NavContainer";
import ListingContainer from "../listing/ListingContainer";
import MediaContainer from "../media/MediaContainer.js";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <NavContainer />
      <div className="content-wrapper">
        <ListingContainer />
        <MediaContainer />
      </div>
    </div>
  );
};

export default HomePage;
