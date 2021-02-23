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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>
        rgb({props.r},{props.g},{props.b})
      </h1>
      <h1>
        #{componentToHex(props.r)}
        {componentToHex(props.g)}
        {componentToHex(props.b)}
      </h1>
    </div>
  );
};

const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};
export default BoxColor;
