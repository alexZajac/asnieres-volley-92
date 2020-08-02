import { createGlobalStyle } from 'styled-components';

export const theme = {
  fonts: {
    main: 'Viga',
    secondary: 'Ruda',
    body: 'Roboto',
    av92: 'Nova Flat',
  },
  colors: {
    primary: '#1C2645',
    secondary: '#BA2F33',
    primaryShade: '#2B3968',
    light: '#EFEFEF',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 50rem)',
    tablet: 'only screen and (max-width: 65rem)',
  },
  spacings: {
    xxSmall: '.25rem',
    xSmall: '.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    xLarge: '4rem',
    xxLarge: '6rem',
  },
};

export type ThemeType = typeof theme;

export interface ThemeProps {
  theme: ThemeType;
}
export const GlobalStyles = createGlobalStyle<ThemeProps>`
  * {
    box-shadow: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.colors.light};
  }
`;
