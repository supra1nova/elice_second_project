import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

// root등 global style 작성
export const GlobalStyle = createGlobalStyle`
    ${reset}
    html,
    body {
      overflow: hidden;
    }
  
    * {
      box-sizing: border-box;
    }
`;
