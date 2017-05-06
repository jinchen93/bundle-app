import React from "react";
import glamorous from "glamorous";
import { Jumbotron, Grid } from "react-bootstrap";

const ComposedJumbotron = glamorous(Jumbotron)({
  marginTop: "30px",
  height: "100%",
  textAlign: "center",
});

const FormWrapper = glamorous(Grid)({
  width: "634px",
  "@media screen and (max-width: 767px)": {
    width: "90%",
  },
});

function FormBlock(props) {
  return (
    <ComposedJumbotron>
      <FormWrapper>
        {props.children}
      </FormWrapper>
    </ComposedJumbotron>
  );
}

export default FormBlock;
