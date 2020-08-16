import React from 'react';
import { NavContainer } from '../../components';

const Programme = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Programme</NavContainer>;
};

export default Programme;
