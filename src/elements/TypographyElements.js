import styled from 'styled-components';
import React from 'react';
import { Link } from 'gatsby';
import { theme } from '../themes/theme';

export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props => {
    switch (props.size) {
      case 'xxLarge':
        return '2rem';
      case 'xLarge':
        return '1.75rem';
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      case 'xxSmall':
        return '0.75rem';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case 'xxLarge':
        return '1.75rem';
      case 'xLarge':
        return '1.675rem';
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.4375rem';
      case 'small':
        return '1.375rem';
      case 'xSmall':
        return '1.125rem';
      case 'xxSmall':
        return '1rem';
      default:
        return '1.4375rem';
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : 'none'};
  font-weight: ${props => {
    switch (props.weight) {
      case 'normal':
        return 500;
      case 'bold':
        return 700;
      case 'black':
        return 900;
      default:
        return 500;
    }
  }};
  color: ${props => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'primaryShade':
        return props.theme.colors.primaryShade;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.primary;
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${props => {
    switch (props.family) {
      case 'main':
        return props.theme.fonts.main;
      case 'secondary':
        return props.theme.fonts.secondary;
      case 'body':
        return props.theme.fonts.body;
      case 'av92':
        return props.theme.fonts.av92;
      default:
        return props.theme.fonts.main;
    }
  }};
`;

export const SLink = styled(props => <Link {...props} />)`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props => {
    switch (props.size) {
      case 'xxLarge':
        return '2rem';
      case 'xLarge':
        return '1.75rem';
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      case 'xxSmall':
        return '0.75rem';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case 'xxLarge':
        return '1.75rem';
      case 'xLarge':
        return '1.675rem';
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.4375rem';
      case 'small':
        return '1.375rem';
      case 'xSmall':
        return '1.125rem';
      case 'xxSmall':
        return '1rem';
      default:
        return '1.4375rem';
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : 'none'};
  font-weight: ${props => {
    switch (props.weight) {
      case 'normal':
        return 500;
      case 'bold':
        return 700;
      case 'black':
        return 900;
      default:
        return 500;
    }
  }};
  color: ${props => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'primaryShade':
        return props.theme.colors.primaryShade;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.primary;
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${props => {
    switch (props.family) {
      case 'main':
        return props.theme.fonts.main;
      case 'secondary':
        return props.theme.fonts.secondary;
      case 'body':
        return props.theme.fonts.body;
      case 'av92':
        return props.theme.fonts.av92;
      default:
        return props.theme.fonts.main;
    }
  }};
`;

const getExactColor = color => {
  if (!color) return theme.colors.light;
  switch (color) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'primaryShade':
      return theme.colors.primaryShade;
    case 'light':
      return theme.colors.light;
    default:
      return theme.colors.primary;
  }
};

export const Span = styled(P)``;
export const SIcon = styled(({ icon: Icon, color, ...props }) => (
  <Icon {...props} size={24} color={getExactColor(color)} />
))``;

export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${props => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'primaryShade':
        return props.theme.colors.primaryShade;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.primary;
    }
  }};
  font-weight: 500;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'primaryShade':
        return props.theme.colors.primaryShade;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.primary;
    }
  }};
  font-weight: 500;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
`;
