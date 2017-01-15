import React from "react";
import moment from "moment";
import "../styles/currentVideo.css";
import { Col, Grid, Row, ResponsiveEmbed } from "react-bootstrap";

export default props => {
  const url = `https://www.youtube.com/embed/${props.video.resourceId.videoId}`;
  const date = moment(props.video.publishedAt).format("ddd, MMMM Do YYYY, h:mm A");

  return (
    <Grid fluid={true}>
      <Row className="video-container">
        <ResponsiveEmbed a16by9 className="video-container__embedd">
          <iframe src={url} className="embed-responsive-item" allowFullScreen></iframe>
        </ResponsiveEmbed>
      </Row>
      <Row>
        <h2>{props.video.title}</h2>
      </Row>
      <Row>
        Posted on:{date}
        <hr />
        <p>{props.video.description}</p>
      </Row>
    </Grid>
  );
}
