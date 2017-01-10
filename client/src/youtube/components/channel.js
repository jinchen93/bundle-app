import React from 'react';

export default (props) => {
  return(
    <li
      onClick={ () => { props.handleSelectClick(props.position) } } 
      className={props.status}>
      <a id={props.status}>
        <div>
          <span className="channel-name">
            <img id={props.status} src={props.image} alt={props.name} />
            {props.status === 'activeChannel' ? <br/> : ''}
            {props.name}
            <a className="channel-delete-x">X</a>
          </span>
        </div>
      </a>
    </li>
  );
};