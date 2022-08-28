import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    line-height: 1;
  }
  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
