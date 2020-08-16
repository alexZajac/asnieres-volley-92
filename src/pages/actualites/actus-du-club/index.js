import React from 'react';
import { NavContainer } from '../../../components';

const ActusClub = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>ActusClub</NavContainer>;
};

export default ActusClub;
