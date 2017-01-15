import React from "react";
import "../styles/videoThumbnail.css";
import { Col } from "react-bootstrap";

export default props => {
  const video = props.video;
  return (
    <Col xs={4} sm={2}>
      <img onClick={() => props.onSelectVideo(video.position)} className={props.active} src={
        video.thumbnails.medium.url
      } alt="Youtube Clip Thumbnail" />
    </Col>
  );
}
