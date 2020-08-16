import React from 'react';
import { NavContainer } from '../../../components';

const TarifInscription = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>TarifInscription</NavContainer>;
};

export default TarifInscription;
