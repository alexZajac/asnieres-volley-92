import React from 'react';
import { NavContainer } from '../../../components';

const Contact = ({ ...props }) => {
  const { location } = props;
  return <NavContainer location={location}>Contact</NavContainer>;
};

export default Contact;
