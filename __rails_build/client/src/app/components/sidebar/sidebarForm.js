import React from 'react';
import AddButton from './addButton';
import DeleteButton from './deleteButton';
import Input from './input';

export default props => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.addAction(props.inputVal, props.csrf_token);
        props.inputAction('');
      }}
    >
      <Input
        inputVal={props.inputVal}
        type={props.type}
        inputAction={props.inputAction}
      />

      <AddButton />
      <DeleteButton
        type={props.type}
        csrf_token={props.csrf_token}
        deleteAction={props.deleteAction}
      />
    </form>
  );
};
