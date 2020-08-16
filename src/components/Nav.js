import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { ArrowRight } from 'react-feather';
import { sections } from '../shared';
import { Span, SIcon, SLink } from '../elements';
import { SubNav } from './SubNav';
import { theme } from '../themes/theme';

const RoundedDiv = styled.span`
  width: 4rem;
  height: calc(0.8 * 3.5rem);
  background-color: ${props => props.color};
  border-bottom-right-radius: ${props => props.theme.spacings.large};
  border-top-right-radius: ${props => props.theme.spacings.large};
  transition: all ease-in-out 100ms;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled(Span)`
  visibility: hidden;
  margin-left: ${props => props.theme.spacings.xxSmall};
  transition: 0ms visibility 100ms;
`;

const SpanContainer = styled.div`
  max-width: 6rem;
  display: flex;
  align-items: center;
  font-size: 12px;
  border-left: solid 1px ${props => props.theme.colors.light};
  padding-left: ${props => props.theme.spacings.small};
`;

const StyledIcon = styled(SIcon)`
  min-width: 2rem;
  margin: 0 1.5rem;
  transition: all ease-in-out 100ms;
`;

const NavContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const NavWrapper = styled.nav`
  height: 100vh;
  transition: width ease-in-out 100ms;
  width: 5rem;
  position: fixed;
  background-color: ${props => props.theme.colors.primary};
  bottom: 0;
  z-index: 3;
  overflow: hidden;

  &:hover {
    width: ${props => props.expandWidth};
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.25);
    ${StyledSpan} {
      visibility: visible;
    }

    ${RoundedDiv} {
      width: 13rem;
    }

    ${StyledIcon}:last-child {
      transform: rotate(180deg);
    }
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
    transition: all ease-in-out 200ms;
    min-width: 2rem;
    margin-bottom: ${props => props.theme.spacings.small};
  }
`;

const NavLogo = styled.li`
  width: 100%;
  margin-bottom: ${props => props.theme.spacings.small};
`;

const StyledImg = styled(props => <Img {...props} />)`
  margin: 0 1rem;
  min-width: 3rem;
`;
const StyledLink = styled(SLink)`
  display: flex;
  align-items: center;
  height: 3.5rem;

  &:hover ${StyledIcon} {
    transform: scale(0.9);
  }
`;

export const Nav = ({ location }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const { pathname } = location;
  const pageName = pathname === '/' ? pathname : `/${pathname.split('/')[1]}/`;
  const {
    logo: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  const pickColor = isSelected => (isSelected ? 'secondary' : 'light');
  const SectionWrapper = ({ children, isSelected }) => (
    <RoundedDiv color={isSelected ? theme.colors.light : theme.colors.primary}>
      {children}
    </RoundedDiv>
  );

  return (
    <NavContainer>
      <NavWrapper
        expandWidth={
          selectedSection !== null && selectedSection.subSections !== undefined
            ? 'calc(40rem + 4px)'
            : '14rem'
        }
      >
        <StyledUl>
          <NavLogo>
            <StyledLink color="light" to="/">
              <StyledImg fixed={fixed} />
              <SpanContainer>
                <Span size="xxSmall" color="light">
                  ASNIERES VOLLEY BALL 92
                </Span>
              </SpanContainer>
            </StyledLink>
          </NavLogo>
          {sections.map(({ name, to, icon, subSections }) => (
            <NavItem key={to}>
              <StyledLink
                onMouseEnter={() =>
                  setSelectedSection({ name, to, icon, subSections })
                }
                color="light"
                to={to}
              >
                {subSections !== undefined &&
                selectedSection &&
                selectedSection.name === name ? (
                  <SubNav name={name} subSections={subSections}>
                    <SectionWrapper isSelected={pageName === to}>
                      <StyledIcon
                        icon={icon}
                        color={pickColor(pageName === to)}
                      />
                      <StyledSpan
                        size="small"
                        color={pickColor(pageName === to)}
                      >
                        {name}
                      </StyledSpan>
                    </SectionWrapper>
                  </SubNav>
                ) : (
                  <SectionWrapper isSelected={pageName === to}>
                    <StyledIcon
                      icon={icon}
                      color={pickColor(pageName === to)}
                    />
                    <StyledSpan
                      onMouseLeave={() => setSelectedSection(null)}
                      size="small"
                      color={pickColor(pageName === to)}
                    >
                      {name}
                    </StyledSpan>
                  </SectionWrapper>
                )}
              </StyledLink>
            </NavItem>
          ))}
          <NavItem>
            <StyledIcon icon={ArrowRight} color="light" />
          </NavItem>
        </StyledUl>
      </NavWrapper>
    </NavContainer>
  );
};
