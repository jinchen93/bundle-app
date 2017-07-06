import React from 'react';
import {Button} from 'react-bootstrap';

export default props => {
  return (
    <Button
      block={true}
      bsStyle="danger"
      onClick={() => {
        props.deleteAction(props.csrf_token);
      }}
    >
      {props.type === 'REDDIT' ? 'Clear Subreddits' : ''}
      {props.type === 'YOUTUBE' ? 'Clear Channels' : ''}
      {props.type === 'TWITCH' ? 'Clear Channels' : ''}
    </Button>
  );
};
