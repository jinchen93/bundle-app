import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import VideoThumbnail from "../components/videoThumbnail";
import CurrentVideo from "../components/currentVideo";
import { fetchVideos, selectVideo } from "../actions";
import "../styles/videos.css";
import { Grid, Row, Col } from "react-bootstrap";

class Videos extends Component {
  constructor(props) {
    super(props);
    props.fetchVideos(props.channel);
  }

  render() {
    const videos = this.props.videos;
    return (
      <Grid className="content-wrapper">
        <Grid fluid={true}>
          <div className="row">
            <div className="row">
              <div className="col-sm-1"></div>
              {
                videos.all.map(
                  video =>
                    <VideoThumbnail video={video} active={
                      videos.current === video.position
                        ? "video-thumbnail--selected"
                        : "video-thumbnail"
                    } onSelectVideo={position => this.props.selectVideo(position)} key={
                      video.position
                    } />
                )
              }
            </div>
            {videos.all.length > 0 ? <CurrentVideo video={videos.all[videos.current]} /> : ""}
          </div>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
