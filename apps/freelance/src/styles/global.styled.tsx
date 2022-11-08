import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background: url('../assets/images/top_elipse.png') no-repeat top left,
      url('../assets/images/bottom_elipse.png') no-repeat bottom right, #f5f5f5;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }
`}`;
