import React from 'react';
import { NavContainer } from '../../../components';

const Entraineurs = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Entraineurs</NavContainer>;
};

export default Entraineurs;
