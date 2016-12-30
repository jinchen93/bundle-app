import React from 'react';

export default (props) => {
  return(
    <li
      onClick={ () => { props.handleClick(props.position) } } 
      className={props.status}>
      <a id={props.status}>
        <div>
          <span className="channel-name">
            <img id={props.status} src={props.image} alt={props.name} />
            {props.status === 'activeChannel' ? <br/> : ''}
            {props.name}
          </span>
        </div>
      </a>
    </li>
  );
};