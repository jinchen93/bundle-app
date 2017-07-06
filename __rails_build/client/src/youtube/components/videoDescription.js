import React from "react";
import { Row, Col } from "react-bootstrap";
import Linkify from "react-linkify";
import glamorous from "glamorous";

const HorizontalRuler = glamorous.div({
  height: "2px",
  background: "#2574A9",
  marginTop: "10px",
  marginBottom: "10px"
});

function VideoDescription({ date, description }) {
  return (
    <Row>
      <Col xsOffset={1} xs={10}>
        {date}
        <HorizontalRuler />
        <Linkify>
          {description.map(line => <text key={line}>{line}<br /></text>)}
        </Linkify>
      </Col>
    </Row>
  );
}

export default VideoDescription;
