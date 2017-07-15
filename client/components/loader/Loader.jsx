import React from "react";

const Loader = ({ type }) =>
  <div className="loader-wrapper">
    <div className={`loader ${type}`} />
  </div>;

export default Loader;
