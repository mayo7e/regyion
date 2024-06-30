// global.js
import { createGlobalStyle } from 'styled-components';
import { textStyle } from './theme.js';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.surface.page};
    color: ${({ theme }) => theme.text.body};
    font-family: ${textStyle.typography.fontFamily};
    font-weight: ${textStyle.typography.fontWeightBold};
    transition: all 0.5s linear; /* Adjust transition timing as needed */
    margin: 0; /* Ensure no default margin */
    padding: 0; /* Ensure no default padding */
    box-sizing: border-box;
    overflow-x: hidden;
    
  }
`;
