import React from 'react';

export default ({ author, onClick, childrenHidden, score }) => (
  <div className="comment-meta-data">
    <span className="author">{author}</span>
    <span className="points">
      {`${score} points`}
      <button onClick={onClick}>
        <i className={childrenHidden ? 'ion-plus' : 'ion-minus'} />
      </button>
    </span>
  </div>
);
