import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: all 0.50s linear;
  }

  .theme-toggle {
    background: ${({ theme }) => theme.panel};
    border: 2px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
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
    background: ${({ theme }) => theme.panel};
    border-bottom: 1px solid ${({ theme }) => theme.border};
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
