import React from 'react';
import { NavContainer } from '../../../components';

const BabyVolley = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>BabyVolley</NavContainer>;
};

export default BabyVolley;
