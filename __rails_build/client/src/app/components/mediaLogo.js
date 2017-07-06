import React from "react";
import glamorous from "glamorous";

const StyledImage = glamorous.img({
  textAlign: "center",
  ":hover": {
    transform: "scale(1.05)",
    transition: "all 0.1s ease-in-out",
  },
  "@media screen and (max-width: 767px)": {
    width: "50%",
  },
});

function MediaLogo(props) {
  return <StyledImage {...props} />;
}

export default MediaLogo;
