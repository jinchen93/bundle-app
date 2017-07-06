import React from "react";
import { Row, Button } from "react-bootstrap";
import glamorous from "glamorous";

const StyledButton = glamorous(Button)({
  marginTop: "2em",
  height: "3em",
  fontSize: "1.1em",
});

function SubmitButton() {
  return (
    <Row>
      <StyledButton type="submit" className="form-submit">
        Submit
      </StyledButton>
    </Row>
  );
}

export default SubmitButton;
