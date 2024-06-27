import React from 'react';
import { ToggleContainer } from './ModeToggle.styled';

const ModeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </ToggleContainer>
  );
};

export default ModeToggle;
