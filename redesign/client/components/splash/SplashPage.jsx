import React from "react";
import SplashNav from "./SplashNav";

const splashStyle = {
  background: `url(${window.splashImg}`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

const filterStyle = {
  background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const SplashPage = props =>
  <div style={splashStyle} className="splash-page-wrapper">
    <div style={filterStyle}>
      <SplashNav />
    </div>
  </div>;

export default SplashPage;
