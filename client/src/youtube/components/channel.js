import React from 'react';

export default (props) => {
  return(
    <li
      onClick={ () => { props.handleSelectClick(props.position) } } 
      className={props.status}>
      <a id={props.status}>
        <span className="channel-name">
          <img id={props.status} src={props.image} alt={props.name} />
          {props.status === 'activeChannel' ? <br/> : ''}
          {props.name}
          <span><a id="channel-delete-x">x</a></span>
        </span>
      </a>
    </li>
  );
};