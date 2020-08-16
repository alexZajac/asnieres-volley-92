import React from 'react';
import { NavContainer } from '../../../components';

const ScoreDirect = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>ScoreDirect</NavContainer>;
};

export default ScoreDirect;
