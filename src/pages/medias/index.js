import React from 'react';
import { NavContainer } from '../../components';

const Medias = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Medias</NavContainer>;
};

export default Medias;
