import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import GlobalFonts from './styles/fonts/fonts';
import Router from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
