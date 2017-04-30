import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

export default props => {
  const handleSelectClick = position => {
    props.onSelectClick(position);
  };

  const handleDeleteClick = (id, position) => {
    props.onDeleteClick(id, position);
  };

  const renderViewerCount = () => {
    if (props.viewers > 0) {
      return (
        <span>
          <i id="record-icon" className="fa fa-user-circle" />
          <span id="viewer-count">{props.viewers}</span>
        </span>
      );
    } else {
      return <i id="record-icon" className="fa fa-power-off" />;
    }
  };

  return (
    <div className={props.status}>
      <ListGroupItem href="#" onClick={() => handleSelectClick(props.position)}>
        <img id={props.status} src={props.image} alt={props.name} />
        <span>
          {props.name}
          <br />
          {renderViewerCount()}
        </span>
      </ListGroupItem>
      <i
        className="fa fa-times"
        onClick={() => handleDeleteClick(props.id, props.position)}
      />
    </div>
  );
};
