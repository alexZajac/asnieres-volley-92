import React from 'react';
import { NavContainer } from '../../components';

const InfosPratiques = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>InfosPratiques</NavContainer>;
};

export default InfosPratiques;
