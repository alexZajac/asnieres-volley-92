import React from 'react';
import { NavContainer } from '../../../components';

const PlanningEntrainement = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>PlanningEntrainement</NavContainer>;
};

export default PlanningEntrainement;
