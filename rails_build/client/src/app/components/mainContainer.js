import React from "react";
import glamorous from "glamorous";

const StyledContainer = glamorous.div(
  {
    position: "absolute",
    top: "50px",
    width: "100%",
    transition: "all 0.2s",
  },
  props => ({
    top: props.navbarToggle ? "150px" : "50px",
  })
);

function MainContainer(props) {
  return <StyledContainer {...props} />;
}

export default MainContainer;
