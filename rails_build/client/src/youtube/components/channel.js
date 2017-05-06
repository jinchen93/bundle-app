import React from "react";
import { ListGroupItem } from "react-bootstrap";
import "../styles/channel.css";

export default props => {
  const handleSelectClick = position => {
    props.onSelectClick(position);
  };

  const handleDeleteClick = (id, position) => {
    props.onDeleteClick(id, position);
  };

  return (
    <div className={props.status}>
      <ListGroupItem href="#" onClick={() => handleSelectClick(props.position)}>
        <img id={props.status} src={props.image} alt={props.name} />
        <span>{props.name}</span>
      </ListGroupItem>
      <i
        className="fa fa-times"
        onClick={() => handleDeleteClick(props.id, props.position)}
      />
    </div>
  );
};
