import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './src/themes/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
