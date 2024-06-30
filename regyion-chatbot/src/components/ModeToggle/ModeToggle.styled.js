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

  /* Ensure text color contrasts well with the background */
  color: ${({ theme }) => theme.text.body};

  /* Add transitions or other styles as needed */
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Example hover effect */
  &:hover {
    background-color: ${({ theme }) => theme.surface.action2Hover};
    border-color: ${({ theme }) => theme.border.hover};
  }
`;

