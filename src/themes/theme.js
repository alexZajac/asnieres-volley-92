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
    success: '#44C051',
    error: '#ff0033',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 50rem)',
    tablet: 'only screen and (max-width: 65rem)',
    desktop: 'only screen and (max-width: 90rem)',
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

export const GlobalStyles = createGlobalStyle`
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

  body::-webkit-scrollbar {
    width: ${props => props.theme.spacings.small};
  }

  body::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.primary};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius:  ${props => props.theme.spacings.small};
  }
`;
