import { DefaultTheme } from 'styled-components';

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
};

const colors = {
  main1: '#64AD57',
  main2: '#84BB75',
  main3: '#E5EFB7',
  main4: '#F4F6F3',
  line: '#E5E5E5',
  bg: '#EAECE5',
  point: '#A6A8A3',
  font1: '#2F353D',
  font2: '#83867E',
  font3: '#A1A39E',
  fontMain: '#66AE58',
};

const font = {
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 'medium',
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description1: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  description2: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  captionBold: {
    fontSize: 12,
    fontWeight: 'bold',
  },
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type FontTypes = typeof font;

const theme: DefaultTheme = {
  colors,
  fontSize,
  font,
};

export default theme;
