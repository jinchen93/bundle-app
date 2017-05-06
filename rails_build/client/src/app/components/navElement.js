import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router";

const { Img } = glamorous;

const StyledLink = glamorous(Link)(
  {
    ":hover": { backgroundColor: "rgb(238, 238, 238)" },
    color: "#444 !important",
    padding: "15px 10px",
    height: "50px",
    float: "left",
  },
  ({ active }) => ({
    backgroundColor: active ? "rgb(238, 238, 238)" : "",
  })
);

function NavElement({ url, name, route, routePath }) {
  return (
    <StyledLink active={routePath === route} to={route}>
      <div>
        <Img
          src={url}
          alt={`${name} logo`}
          css={{ height: "20px", marginRight: "5px" }}
        />
        {name}
      </div>
    </StyledLink>
  );
}

export default NavElement;
