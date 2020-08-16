import React from 'react';
import { NavContainer } from '../../../components';

const PresentationClub = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>PresentationClub</NavContainer>;
};

export default PresentationClub;
