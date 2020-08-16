import React from 'react';
import { NavContainer } from '../../components';

const Actualite = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Actualite</NavContainer>;
};

export default Actualite;
