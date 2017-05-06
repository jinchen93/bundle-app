import React from "react";
import glamorous from "glamorous";
import { Row, Col, ResponsiveEmbed } from "react-bootstrap";

const Video = glamorous.div({
  marginTop: "10px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
});

function MainVideo({ url }) {
  return (
    <Row>
      <Col smOffset={1} sm={10}>
        <Video>
          <ResponsiveEmbed a16by9>
            <iframe
              src={url}
              className="embed-responsive-item"
              allowFullScreen
            />
          </ResponsiveEmbed>
        </Video>
      </Col>
    </Row>
  );
}

export default MainVideo;
