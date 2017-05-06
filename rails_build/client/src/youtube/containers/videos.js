import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import VideoThumbnail from "../components/videoThumbnail";
import CurrentVideo from "../components/currentVideo";
import { fetchVideos, selectVideo } from "../actions";
import "../styles/videos.css";
import { Grid } from "react-bootstrap";
import glamorous from "glamorous";

const ContentWrapper = glamorous.div(
  {
    position: "absolute",
    top: "50px",
    left: "250px",
    width: "calc(100% - 250px)",
    height: "auto",
    padding: "10px 20px",
    transition: "all 0.2s"
  },
  props => ({
    left: props.sidebarHidden ? 0 : "250px",
    width: props.sidebarHidden ? "100%" : "calc(100% - 250px)"
  }),
  props => ({
    "@media screen and (max-width: 767px)": {
      left: 0,
      width: "100%",
      top: props.navbarToggle ? "155px" : "50px"
    }
  })
);

class Videos extends Component {
  constructor(props) {
    super(props);
    props.fetchVideos(props.channel);
  }

  render() {
    const videos = this.props.videos;
    return (
      <ContentWrapper
        sidebarHidden={this.props.sidebarHidden}
        navbarToggle={this.props.navbarToggle}
      >
        <Grid fluid={true}>
          <div className="row">
            <div className="row">
              <div className="col-sm-1" />
              {videos.all.map(video => (
                <VideoThumbnail
                  video={video}
                  active={
                    videos.current === video.position
                      ? "video-thumbnail--selected"
                      : "video-thumbnail"
                  }
                  onSelectVideo={position => this.props.selectVideo(position)}
                  key={video.position}
                />
              ))}
            </div>
            {videos.all.length > 0
              ? <CurrentVideo video={videos.all[videos.current]} />
              : ""}
          </div>
        </Grid>
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
