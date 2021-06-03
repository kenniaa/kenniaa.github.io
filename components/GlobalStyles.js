import { createGlobalStyle } from 'styled-components';
import themes from './Themes';

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

  p {
    line-height: 1.3em;
  }

  a {
    color: inherit;
    font-weight: inherit;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.linkUnderline};
    text-decoration-thickness: 1.5px;
   
    &:focus {
      outline: 1px dashed ${({ theme }) => theme.linkFocus};
      outline-offset: 2px;
    }
  }

  a:hover {
    text-decoration-color: ${({ theme }) => theme.linkHover};
  }

  button {
    cursor: pointer;

    &:focus {
      outline: 1px dashed ${({ theme }) => theme.linkFocus};
      outline-offset: 3px;
    }
  }

  h3 {
    font-size: 1.4em;
  }
`;
