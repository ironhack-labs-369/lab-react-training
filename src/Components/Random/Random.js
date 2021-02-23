import React from 'react';

const Random = (props) => {
  return (
    <div>
      <h3>
        Random value between {props.min} and {props.max} => &nbsp;
        {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}
      </h3>
    </div>
  );
};

export default Random;
