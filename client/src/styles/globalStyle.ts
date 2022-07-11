import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

// root등 global style 작성
export default createGlobalStyle`
    ${reset}
    /* html,
    body {
      overflow: hidden;
    } */


    html,
    body {
      font-size: 17px;
      letter-spacing: -0.5px;
      font-family: 'Noto Sans CJK KR', sans-serif;
    }
    
    * {
      box-sizing: border-box;
      font-family: 'Noto Sans CJK KR', sans-serif;
    }

    a {
      color: $font-color-base;
      text-decoration: none;
      color: black;
    
      &:hover,
      &:focus {
        cursor: pointer;
      }
    }

    button {
      padding: 0;
      border: 0;
      background: none;
      cursor: pointer;
      vertical-align: top;
    }
    
    figure,
    figcaption {
      margin: 0;
      padding: 0;
    }
    
    img {
      vertical-align: top;
    }
    
    ul,
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      padding: 0;
    }
`;
