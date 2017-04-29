import React from 'react';
import {FormControl} from 'react-bootstrap';

export default props => {
  return (
    <FormControl
      className="sidebar__wrapper__input"
      placeholder={
        props.mediaType === 'REDDIT' ? 'Add subreddit' : 'Add channel'
      }
      value={props.inputVal}
      onChange={event => props.inputAction(event.target.value)}
    />
  );
};
