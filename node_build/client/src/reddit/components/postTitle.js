import React from "react";
import { ListGroupItem } from "react-bootstrap";

export default props => {
  return (
    <ListGroupItem
      onClick={() => {
          props.onTitleClick(props.id);
        }}
    >
      <h3 className={`redditTitle${props.id}`}>{props.title}</h3>
    </ListGroupItem>
  );
}
