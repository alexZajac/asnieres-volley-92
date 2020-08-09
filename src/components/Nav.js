import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { ArrowRight } from 'react-feather';
import { sections } from '../shared';

export const NavWrapper = styled.nav`
  width: 120px;
  position: relative;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const NavRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100px;
  cursor: pointer;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled(props => <Img {...props} />)``;

const scrollToTop = () =>
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });

export const Nav = ({ fixedImage, ...props }) => {
  console.log(props);
  return (
    <NavWrapper>
      <NavRow onClick={scrollToTop}>
        <StyledImg fixed={fixedImage} />
      </NavRow>
      {sections.map(({ name, to, icon: Icon }) => (
        <NavRow key={to}>
          <Link to={to}>
            <Icon size={32} color="white" />
          </Link>
        </NavRow>
      ))}
      <AbsoluteContainer>
        <ArrowRight size={32} color="white" />
      </AbsoluteContainer>
    </NavWrapper>
  );
};
