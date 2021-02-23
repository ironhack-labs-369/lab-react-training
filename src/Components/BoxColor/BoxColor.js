import React from 'react';

const BoxColor = (props) => {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: '100vw',
        height: '200px',
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>
        rgb({props.r},{props.g},{props.b})
      </h1>
    </div>
  );
};

export default BoxColor;
