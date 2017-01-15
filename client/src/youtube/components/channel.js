import React from "react";
import { ListGroupItem } from "react-bootstrap";
import "../styles/channel.css";

export default props => {
  const handleSelectClick = position => {
    props.onSelectClick(position);
  };

  const handleDeleteClick = id => {
    props.onDeleteClick(id);
  };

  return (
    <ListGroupItem id={props.status} href="#" className={props.status} onClick={
      () => handleSelectClick(props.position)
    }>
      <img id={props.status} src={props.image} alt={props.name} />
      <span>{props.name}</span>
    </ListGroupItem>
  );
}
