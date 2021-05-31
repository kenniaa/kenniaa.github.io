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

    &:focus {
      outline: 1px dashed #FFFFFF;
      outline-offset: 2px;
      outline-color: currentColor;
    }
  }

  a:hover {
    background-position: 0 100%;
    background-size: auto 16px;
    background-repeat: repeat-x;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: 1px dashed ${({ theme }) => theme.buttonFocus};
      outline-offset: 3px;
    }
  }

  h3 {
    font-size: 1.4em;
  }
`;
