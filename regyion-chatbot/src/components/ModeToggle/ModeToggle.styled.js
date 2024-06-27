import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.surface.primary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 10px;
  cursor: pointer;
  padding: 0.6rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;