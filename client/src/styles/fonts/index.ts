import { createGlobalStyle } from 'styled-components';
import MontHeavyDemo from './Mont-HeavyDEMO.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Mont Heavy Demo";
        src: local("Mont Heavy Demo"),
        url(${MontHeavyDemo}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
