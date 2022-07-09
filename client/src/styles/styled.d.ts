import 'styled-components';
import { ColorsTypes, FontSizeTypes, FontTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    font: FontTypes;
  }
}
