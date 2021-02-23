import React from 'react';

const Rating = (props) => {
  return (
    <div>
      <span>
        <big>☆</big>
      </span>
      <span>
        <big>★</big>
      </span>
      {Math.floor(props.children)}
    </div>
  );
};

export default Rating;
