import React from 'react';

const Rating = (props) => {
  return (
    <div>
      <big>{'★'.repeat(Math.floor(props.children))}</big>
      <big>{'☆'.repeat(5 - Math.floor(props.children))}</big>
    </div>
  );
};

export default Rating;
