import React from 'react';
import { Button, } from '@mui/material'

const TransparentButton = () => {
  const buttonStyle = {
    color: 'white',
    padding: '0',
  
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: 3,
    backgroundColor: 'black', // Replace with your desired color
    transform: 'scaleX(0)',
    transformOrigin: 'bottom left',
    transition: 'transform 0.3s',
  };



  return (
    <div style={{ display: 'inline-block' }}>
      <Button
        style={buttonStyle}
      >
        <span style={underlineStyle}></span>
      </Button>
    </div>
  );
};

export default TransparentButton;
