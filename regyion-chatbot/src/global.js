// global.js
import { createGlobalStyle } from 'styled-components';
import { textStyle } from './theme.js';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.surface.page};
    color: ${({ theme }) => theme.text.body};
    font-family: ${textStyle.typography.fontFamily};
    font-Weight: ${textStyle.typography.fontWeightBold};
    transition: all 0.5s linear; /* Adjust transition timing as needed */
    margin: 0; /* Ensure no default margin */
    padding: 0; /* Ensure no default padding */
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
    transition: all 0.3s ease; /* Add transition for smoother visual change */
  }

  .theme-toggle:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
    border-color: ${({ theme }) => theme.border.secondaryHover};
  }

  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: ${({ theme }) => theme.surface.page};
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

  /* Apply textStyle */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${textStyle.typography.heading.md.fontFamily};
    font-weight: ${textStyle.typography.heading.md.fontWeight};
    font-size: ${textStyle.typography.heading.md.fontSize};
    line-height: ${textStyle.typography.heading.md.lineHeight};
  }

  p {
    font-family: ${textStyle.typography.body.md.fontFamily};
    font-weight: ${textStyle.typography.body.md.fontWeight};
    font-size: ${textStyle.typography.body.md.fontSize};
    line-height: ${textStyle.typography.body.md.lineHeight};
    margin-bottom: ${textStyle.typography.body.md.paragraphSpacing};
  }

  a {
    font-family: ${textStyle.typography.body.md.link.fontFamily};
    font-weight: ${textStyle.typography.body.md.link.fontWeight};
    font-size: ${textStyle.typography.body.md.link.fontSize};
    line-height: ${textStyle.typography.body.md.link.lineHeight};
    text-decoration: ${textStyle.typography.body.md.link.textDecoration};
  }

  a.bold {
    font-family: ${textStyle.typography.body.md.bold.fontFamily};
    font-weight: ${textStyle.typography.body.md.bold.fontWeight};
    font-size: ${textStyle.typography.body.md.bold.fontSize};
    line-height: ${textStyle.typography.body.md.bold.lineHeight};
    margin-bottom: ${textStyle.typography.body.md.bold.paragraphSpacing};
  }

  .small-text {
    font-family: ${textStyle.typography.body.sm.fontFamily};
    font-weight: ${textStyle.typography.body.sm.fontWeight};
    font-size: ${textStyle.typography.body.sm.fontSize};
    line-height: ${textStyle.typography.body.sm.lineHeight};
    margin-bottom: ${textStyle.typography.body.sm.paragraphSpacing};
  }

  .large-text {
    font-family: ${textStyle.typography.body.lg.fontFamily};
    font-weight: ${textStyle.typography.body.lg.fontWeight};
    font-size: ${textStyle.typography.body.lg.fontSize};
    line-height: ${textStyle.typography.body.lg.lineHeight};
    margin-bottom: ${textStyle.typography.body.lg.paragraphSpacing};
  }
`;
