import React from "react";
import glamorous from "glamorous";
import { Jumbotron } from "react-bootstrap";
import { headerStyle } from "../styles/modules";

const ComposedJumbotron = glamorous(Jumbotron)(headerStyle);

function MainHeader() {
  return (
    <ComposedJumbotron>
      <h1>Welcome to Bundle!</h1>
      <br />
      <h4>
        Bundle! merges all of your favorite sites together into one clean app.
      </h4>
    </ComposedJumbotron>
  );
}

export default MainHeader;
