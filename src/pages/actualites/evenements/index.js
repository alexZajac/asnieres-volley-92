import React from 'react';
import { NavContainer } from '../../../components';

const Evenements = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Evenements</NavContainer>;
};

export default Evenements;
