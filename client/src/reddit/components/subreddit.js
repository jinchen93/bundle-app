import React from "react";
import { ListGroupItem } from "react-bootstrap";

export default props => {
  return (
    <div className={props.status}>
      <ListGroupItem href="#" onClick={() => handleSelectClick(props.position)}>
        <img id={props.status} src={props.image} alt={props.name} />
        <span>{props.name}</span>
      </ListGroupItem>
      <i className="fa fa-times" onClick={() => handleDeleteClick(props.id, props.position)}></i>
    </div>
  );
}
