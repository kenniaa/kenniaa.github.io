import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.gradient};
    font-family: 'Inconsolata', monospace;
  }

  a {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
    background: transparent linear-gradient(to bottom, #fcd9b1 0%, #fcd9b1 100%) repeat-x 0 100%;
    background-size: 3px 3px;
  }

  a:hover {
    background-position: 0 100%;
    background-size: auto 16px;
    background-repeat: repeat-x;
  }

  h3 {
    font-size: 1.4em;
  }
`;
