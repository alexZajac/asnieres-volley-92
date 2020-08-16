import React from 'react';
import { NavContainer } from '../../../components';

const Losirs = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Losirs</NavContainer>;
};

export default Losirs;
