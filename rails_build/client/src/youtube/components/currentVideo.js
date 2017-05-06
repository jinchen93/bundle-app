import React from "react";
import moment from "moment";
import { Grid } from "react-bootstrap";
import MainVideo from "./mainVideo";
import VideoDescription from "./videoDescription";
import Title from "./title";

export default props => {
  const url = `https://www.youtube.com/embed/${props.video.resourceId.videoId}`;
  const date = moment(props.video.publishedAt).format(
    "ddd, MMMM Do YYYY, h:mm A"
  );
  const description = props.video.description.split("\n");

  return (
    <Grid fluid={true}>
      <MainVideo url={url} />
      <Title title={props.video.title} />
      <VideoDescription date={date} description={description} />
    </Grid>
  );
};
