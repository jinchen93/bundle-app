import React from "react";
import moment from "moment";
import "../styles/currentVideo.css";
import { Col, Grid, Row, ResponsiveEmbed } from "react-bootstrap";
import Linkify from "react-linkify";

export default props => {
  const url = `https://www.youtube.com/embed/${props.video.resourceId.videoId}`;
  const date = moment(props.video.publishedAt).format("ddd, MMMM Do YYYY, h:mm A");
  const description = props.video.description.split("\n");

  return (
    <Grid fluid={true}>
      <Row>
        <Col smOffset={1} sm={10}>
          <div className="video-container">
            <ResponsiveEmbed a16by9 className="video-container__embedd">
              <iframe src={url} className="embed-responsive-item" allowFullScreen></iframe>
            </ResponsiveEmbed>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xsOffset={1} xs={10}>
          <h2>{props.video.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col xsOffset={1} xs={10}>
          {date}
          <div
            style={
              { height: "2px", background: "#2574A9", marginTop: "10px", marginBottom: "10px" }
            }
          >
          </div>
          <Linkify>
            {description.map(line => <text key={line}>{line}<br /></text>)}
          </Linkify>
        </Col>
      </Row>
    </Grid>
  );
}
