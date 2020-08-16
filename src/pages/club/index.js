import React from 'react';
import { NavContainer } from '../../components';

const Club = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Club</NavContainer>;
};

export default Club;
