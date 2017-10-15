// @flow

import React from "react";
import { Link } from "react-router-dom";

const ListingHeader = () => {
  const handleTransition = target => {
    target.classList.add("active");
    target.addEventListener("transitionend", () => {
      target.classList.remove("active");
    });
  };

  const handleClick = e => {
    const target = e.currentTarget;
    handleTransition(target);
  };

  return (
    <div className="listing-header">
      <Link className="logo-wrapper" to="/youtube">
        <img
          onClick={handleClick}
          name="youtube"
          className="youtube-logo"
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499531225/Youtube-Logo_xoozbl.png"
          alt="Youtube Logo"
        />
      </Link>
      <Link className="logo-wrapper" to="/reddit">
        <img
          onClick={handleClick}
          name="reddit"
          className="reddit-logo"
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499531479/Reddit-Logo_tmylia.png"
          alt="Reddit Logo"
        />
      </Link>
      <Link className="logo-wrapper" to="/twitch">
        <img
          onClick={handleClick}
          name="twitch"
          className="twitch-logo"
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499531062/Twitch-Logo_bgbftx.png"
          alt="Twitch Logo"
        />
      </Link>
    </div>
  );
};

export default ListingHeader;
