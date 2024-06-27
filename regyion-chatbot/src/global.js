import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary}; /* Adjust based on your theme structure */
    color: ${({ theme }) => theme.text.body};
    font-family: ${({ theme }) => theme.fonts.primary};
    transition: all 0.50s linear;
  }

  .theme-toggle {
    background: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.border.primary};
    color: ${({ theme }) => theme.text.body};
    padding: 0.6em;
    cursor: pointer;
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 1000;
    border-radius: 10px;
  }

  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.border.primary};
    display: flex;
    justify-content: center;
    z-index: 1000;
  }

  .nav ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  .nav li {
    margin: 0 1em;
    cursor: pointer;
  }

  .nav li:hover {
    text-decoration: underline;
  }
`;
