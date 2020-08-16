import React from 'react';
import { NavContainer } from '../../../components';

const Benevoles = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Benevoles</NavContainer>;
};

export default Benevoles;
