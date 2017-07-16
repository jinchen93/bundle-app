import React from "react";
import { withRouter } from "react-router-dom";
import TwitchTopStreamsContainer from "./TwitchTopStreamsContainer.js";
import TwitchStreamContainer from "./TwitchStreamContainer";

const TwitchContent = props =>
  <div className="media-content">
    {props.match.params.id
      ? <TwitchStreamContainer />
      : <TwitchTopStreamsContainer />}
  </div>;

export default withRouter(TwitchContent);
