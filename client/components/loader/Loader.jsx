// @flow

import React from "react";

const Loader = ({ type }: { type: string }) => (
  <div className="loader-wrapper">
    <div className={`loader ${type}`} />
  </div>
);

export default Loader;
