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
      {props.mediaType === 'REDDIT' ? 'Clear Subreddits' : ''}
      {props.mediaType === 'YOUTUBE' ? 'Clear Channels' : ''}
      {props.mediaType === 'Twitch' ? 'Clear Channels' : ''}
    </Button>
  );
};
