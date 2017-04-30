import React from 'react';
import {Button} from 'react-bootstrap';

export default props => {
  return (
    <Button
      block={true}
      bsStyle="success"
      type="submit"
      className="sidebar__wrapper__input__add"
    >
      +
    </Button>
  );
};
