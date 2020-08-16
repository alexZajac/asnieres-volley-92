import React from 'react';
import { NavContainer } from '../../../../components';

const M20 = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>M20</NavContainer>;
};

export default M20;
