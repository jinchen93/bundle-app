import React from 'react';

export default (props) => {
  return(
    <li
      onClick={ () => { props.handleClick(props.position) } } 
      className={props.status}>
      <a id={props.status}>
        <div>
          <img id={props.status} src={props.image} alt={props.name} />
          <br />
          <span className="channel-name">{props.name}</span>
        </div>
      </a>
    </li>
  );
};