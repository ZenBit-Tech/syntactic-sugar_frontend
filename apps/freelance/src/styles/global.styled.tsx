import { createGlobalStyle, css } from 'styled-components';

export const ThemeColors = {
  colors: {
    primary: '#C91A16',
    secondary: '#EC3B37',
    button: '#5184EC',
    text: '#A0A0A0',
    bg: '#F5F5F5',
    whiteText: '#FFFFFF',
    lightText: '#D9D9D9',
    darkText: '#000000',
  },
};

export const GlobalStyle = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background: url('../assets/images/top_elipse.png') no-repeat top left,
      url('../assets/images/bottom_elipse.png') no-repeat bottom right, ${ThemeColors.colors.bg};
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

  input {
    outline: none;
  }

  a {
    text-decoration: none;
  }
`}`;
