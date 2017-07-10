import React from "react";

const ListingHeader = ({ receiveMode }) => {
  const handleTransition = target => {
    target.classList.add("active");
    target.addEventListener("transitionend", () => {
      target.classList.remove("active");
      receiveMode(target.getAttribute("name"));
    });
  };

  const handleClick = e => {
    e.preventDefault();
    const target = e.currentTarget;
    handleTransition(target);
  };

  return (
    <div className="listing-header">
      <span className="logo-wrapper">
        <img
          onClick={handleClick}
          name="YOUTUBE"
          className="youtube-logo"
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499531225/Youtube-Logo_xoozbl.png"
          alt="Youtube Logo"
        />
      </span>
      <span className="logo-wrapper">
        <img
          onClick={handleClick}
          name="REDDIT"
          className="reddit-logo"
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499531479/Reddit-Logo_tmylia.png"
          alt="Reddit Logo"
        />
      </span>
      <span className="logo-wrapper">
        <img
          onClick={handleClick}
          name="TWITCH"
          className="twitch-logo"
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499531062/Twitch-Logo_bgbftx.png"
          alt="Twitch Logo"
        />
      </span>
    </div>
  );
};

export default ListingHeader;
