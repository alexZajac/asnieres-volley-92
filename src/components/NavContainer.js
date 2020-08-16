import React from 'react';
import { ContainerWrapper, ContainerChildren } from '../elements';
import { Nav } from './Nav';

export const NavContainer = ({ children, ...props }) => {
  return (
    <ContainerWrapper>
      <Nav {...props} />
      <ContainerChildren>{children}</ContainerChildren>
    </ContainerWrapper>
  );
};
