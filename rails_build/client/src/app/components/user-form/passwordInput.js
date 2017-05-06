import React from "react";
import { Row, FormControl } from "react-bootstrap";

function PasswordInput({ onPasswordInput, passwordVal }) {
  return (
    <Row>
      <FormControl
        type="password"
        placeholder="Password"
        onChange={onPasswordInput}
        value={passwordVal}
      />
    </Row>
  );
}

export default PasswordInput;
