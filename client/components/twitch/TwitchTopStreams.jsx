import React from "react";
import Loader from "../loader/Loader";
import TwitchStreamItem from "./TwitchStreamItem";

class TwitchTopStreams extends React.Component {
  componentDidMount() {
    this.props.fetchTopStreams();
  }

  render() {
    if (this.props.loading) {
      return <Loader type="twitch" />;
    }

    if (this.props.topStreams.length) {
      return (
        <div className="twitch-top-streams-wrapper">
          {this.props.topStreams.map(stream =>
            <TwitchStreamItem key={stream.name} stream={stream} />
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TwitchTopStreams;
