import React from "react";
import { Row, FormControl } from "react-bootstrap";

function UsernameInput({ onUsernameInput, usernameVal }) {
  return (
    <Row>
      <FormControl
        type="text"
        placeholder="Username"
        onChange={onUsernameInput}
        value={usernameVal}
      />
    </Row>
  );
}

export default UsernameInput;
