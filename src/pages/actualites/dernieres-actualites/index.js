import React from 'react';
import { NavContainer } from '../../../components';

const DernieresActualites = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>DernieresActualites</NavContainer>;
};

export default DernieresActualites;
