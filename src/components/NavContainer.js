import React from 'react';
import { Flex } from '../elements';
import { Nav } from './Nav';

export const NavContainer = ({ children, ...props }) => {
  return (
    <Flex justify="flex-start">
      <Nav {...props} />
      <Flex style={{ marginLeft: '5rem' }}>{children}</Flex>
    </Flex>
  );
};
