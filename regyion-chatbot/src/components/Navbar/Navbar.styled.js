import styled from 'styled-components';
import { textStyle } from '../../theme.js';

export const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.surface.page};
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  z-index: 1000;
 
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto; /* Center the container */
  padding: 0.5em 64px;

`;

export const NavLogo = styled.h1`
  font-family: ${textStyle.typography.fontFamily};
  font-weight: ${textStyle.typography.fontWeightBold};
  font-size: 1.5em;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const NavListItem = styled.li`
  margin: 0 1em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
