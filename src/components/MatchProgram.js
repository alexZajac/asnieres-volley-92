import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { Span, LogoBackground, AbsoluteContainer, Flex, P } from '../elements';
import av92LogoTransparent from '../images/logo_nav.png';
import av92Logo from '../images/logo.png';

const AbsoluteProgram = styled(AbsoluteContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(180deg, #ba2f33 0%, #2b3968 100%);
`;

const StyledSpan = styled(Span)`
  text-align: center;
  margin-top: ${props => props.theme.spacings.medium};
`;

const MatchContainer = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.light};
  border-radius: 10px;
`;

const StyledInfo = styled(P)`
  color: #aaaebb;
  text-transform: uppercase;
`;

const Match = ({ image }) => (
  <Flex
    direction="column"
    justify="flex-start"
    align="flex-start"
    style={{ marginTop: '2rem' }}
  >
    <P color="light" family="secondary">
      PRENAT F
    </P>
    <MatchContainer>
      <Flex w="25%">
        <img
          alt="match"
          src={av92Logo}
          style={{ width: '6rem', height: 'auto' }}
        />
      </Flex>
      <Flex flex={2} direction="column">
        <StyledInfo family="secondary" size="small">
          Gymnase des courtilles
        </StyledInfo>
        <Flex justify="space-between" w="70%">
          <Span family="secondary" weight="bold">
            AV92
          </Span>
          <Span family="secondary">3</Span>
          <Span family="secondary">/</Span>
          <Span family="secondary">0</Span>
          <Span family="secondary" weight="bold">
            ACBB
          </Span>
        </Flex>
        <StyledInfo family="secondary" size="small">
          20h00
        </StyledInfo>
      </Flex>
      <Flex w="25%">
        <img
          alt="match"
          src={av92Logo}
          style={{ width: '6rem', height: 'auto' }}
        />
      </Flex>
    </MatchContainer>
  </Flex>
);

export const MatchProgram = ({ image }) => {
  return (
    <AbsoluteProgram w="40vw" h="100vh">
      <LogoBackground
        css={css`
          background-image: url(${av92LogoTransparent});
          background-size: 200%;
        `}
        position="100% 50%"
      >
        <StyledSpan size="xLarge" color="light">
          LE PROGRAMME DU WEEK-END
        </StyledSpan>
        <Flex
          justify="flex-start"
          direction="column"
          w="90%"
          style={{ marginTop: '3rem' }}
          align="flex-start"
        >
          <P color="light" size="large" family="secondary">
            Samedi 26 Septembre 2020
          </P>
          <Match image={image} />
        </Flex>
        <Flex
          justify="flex-start"
          direction="column"
          w="90%"
          style={{ marginTop: '3rem' }}
          align="flex-start"
        >
          <P color="light" size="large" family="secondary">
            Dimanche 27 Septembre 2020
          </P>
        </Flex>
      </LogoBackground>
    </AbsoluteProgram>
  );
};
