import React from "react";
import { Row, Col } from "react-bootstrap";

function Title({ title }) {
  return (
    <Row>
      <Col xsOffset={1} xs={10}>
        <h2>{title}</h2>
      </Col>
    </Row>
  );
}

export default Title;
