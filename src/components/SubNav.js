import React from 'react';
import styled, { css } from 'styled-components';
import { ChevronRight } from 'react-feather';
import { Span, P, SLink, SIcon, LogoBackground } from '../elements';
import av92Logo from '../images/logo_nav.png';

const SubNavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 14rem;
  width: 26rem;
  height: 100vh;
  z-index: 2;
  box-shadow: inset 5px 0px 10px rgba(0, 0, 0, 0.25);
  border-right: 4px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.light};
`;

const StyledSubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${SubNavContainer} {
    visibility: visible;
  }
`;

const SectionContainer = styled.div`
  margin: ${props => props.theme.spacings.large}
    ${props => props.theme.spacings.medium};
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: ${props => props.theme.spacings.xLarge};
`;

const StyledLink = styled(SLink)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid
    ${props =>
      props.isSmall ? 'rgba(43, 57, 104, 0.1)' : props.theme.colors.primary};
  padding-bottom: ${props => props.theme.spacings.xSmall};
  margin-top: ${props =>
    props.isSmall ? props.theme.spacings.small : props.theme.spacings.medium};
`;

const SectionName = ({ name, numberPages, to }) => {
  if (name === null) return null;
  if (numberPages === 0) {
    return (
      <StyledLink to={to}>
        <P color="primary" size="xxLarge">
          {name}
        </P>
        <SIcon icon={ChevronRight} color="primary" />
      </StyledLink>
    );
  }
  return (
    <StyledLink as="div">
      <P color="primary" size="xxLarge">
        {name}
      </P>
    </StyledLink>
  );
};

export const SubNav = ({ name, subSections, children }) => (
  <StyledSubNav>
    {children}
    <SubNavContainer>
      <LogoBackground
        css={css`
          background-image: url(${av92Logo});
        `}
      >
        <SectionContainer>
          <Span margin="1rem 0" color="secondary" size="xxLarge">
            {name}
          </Span>
          {subSections.map(({ name: sectionName, pages, to }) => (
            <>
              <SectionName
                name={sectionName}
                numberPages={pages.length}
                to={to}
              />
              {pages.map(({ name: pageName, to: pageTo }) => (
                <StyledLink isSmall key={pageTo} to={pageTo}>
                  <Span family="secondary">{pageName}</Span>
                  <SIcon icon={ChevronRight} color="primary" />
                </StyledLink>
              ))}
            </>
          ))}
        </SectionContainer>
      </LogoBackground>
    </SubNavContainer>
  </StyledSubNav>
);
