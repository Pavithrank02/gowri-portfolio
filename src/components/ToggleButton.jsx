// Toggle.js
import React from 'react';
import { useTheme } from '../ThemeContext';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const buttonStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999, // Ensure the button is above other content
};

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      style={{
        ...buttonStyle,
        backgroundColor: theme === 'light' ? '#FFF' : '#363537',
        color: theme === 'light' ? '#363537' : '#FAFAFA',
        '&:hover': {
          backgroundColor: theme === 'light' ? '#F0F0F0' : '#2C2C2C',
        },
      }}
    >
      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default Toggle;
