import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.panel};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  cursor: pointer;
  padding: 0.6rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

const ModeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </ToggleContainer>
  );
};

export default ModeToggle;
