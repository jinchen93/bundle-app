import React from "react";
import { Col } from "react-bootstrap";
import glamorous from "glamorous";

const Thumbnail = glamorous.img(
  {
    marginTop: "10px",
    width: "100%",
    ":hover": {
      cursor: "pointer"
    }
  },
  ({ active }) => ({
    opacity: active ? 1 : 0.75,
    outline: active ? "1px solid #ecf0f1" : "",
    boxShadow: active
      ? "0 2px 6px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)"
      : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  })
);

function VideoThumbnail({ video, active, onSelectVideo }) {
  return (
    <Col xs={4} sm={2}>
      <Thumbnail
        active={active}
        onClick={() => onSelectVideo(video.position)}
        src={video.thumbnails.medium.url}
        alt="Youtube Clip Thumbnail"
      />
    </Col>
  );
}

export default VideoThumbnail;
