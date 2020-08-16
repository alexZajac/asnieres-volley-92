import React from 'react';
import { NavContainer } from '../../components';

const Equipes = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Equipes</NavContainer>;
};

export default Equipes;
