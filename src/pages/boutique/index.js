import React from 'react';
import { NavContainer } from '../../components';

const Boutique = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Boutique</NavContainer>;
};

export default Boutique;
