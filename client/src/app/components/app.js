import React from "react";
import AppNavBar from "./navbar";

export default props => {
  return (
    <div className="wrapper">
      <AppNavBar path={props.location.pathname} />
      {props.children}
    </div>
  );
}
