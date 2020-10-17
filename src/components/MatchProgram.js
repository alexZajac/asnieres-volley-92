import React from 'react';
import styled, { css } from 'styled-components';
import { Span, LogoBackground, AbsoluteContainer, Flex, P } from '../elements';
import av92LogoTransparent from '../images/logo_nav.png';
import { useNextMatchupQuery } from '../Hooks';
import { theme } from '../themes/theme';

const getScoreStyle = (score, team) => {
  if (score === 3) {
    const color =
      team === 'ASNIERES VOLLEY 92' ? theme.colors.success : theme.colors.error;
    const fontWeight = 'bold';
    return { color, fontWeight };
  }
  return null;
};

const createMachupObject = nextMatchups => {
  const result = {};
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  nextMatchups.forEach(match => {
    const { matchupDate } = match;
    const readableDate = new Date(matchupDate).toLocaleDateString(
      'fr-FR',
      dateOptions
    );
    const readableTime = new Date(matchupDate).toLocaleTimeString(
      'fr-FR',
      timeOptions
    );
    const formattedDate = readableDate.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    if (formattedDate in result) {
      result[formattedDate].push({
        ...match,
        time: readableTime,
      });
    } else {
      result[formattedDate] = [{ ...match, time: readableTime }];
    }
  });
  return result;
};

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
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.light};
  border-radius: 10px;
`;

const StyledInfo = styled(P)`
  color: #aaaebb;
  text-transform: uppercase;
  margin: ${props => props.theme.spacings.xSmall};
`;

const Match = ({ matchups }) =>
  matchups.map(
    ({
      category,
      court,
      scoreAway,
      scoreHome,
      time,
      srcImageTeamAway,
      srcImageTeamHome,
      teamAway,
      teamHome,
    }) => (
      <Flex
        key={category}
        direction="column"
        justify="flex-start"
        align="flex-start"
        style={{ marginTop: '2rem' }}
      >
        <P color="light" family="secondary">
          {category}
        </P>
        <MatchContainer>
          <Flex w="25%">
            <img
              alt="match"
              src={srcImageTeamHome}
              style={{
                width: '7rem',
                height: 'auto',
              }}
            />
          </Flex>
          <Flex flex={2} direction="column">
            <StyledInfo family="secondary" size="small">
              {court ?? null}
            </StyledInfo>
            <Flex justify="center" w="100%" flex={0}>
              <Flex justify="center" align="center" style={{ maxLines: 2 }}>
                <Span
                  family="secondary"
                  weight="bold"
                  size="medium"
                  color="primaryShade"
                  textAlign="center"
                >
                  {teamHome}
                </Span>
              </Flex>
              <Flex justify="center" align="center">
                <Span
                  family="secondary"
                  size="large"
                  color="primaryShade"
                  style={{ ...getScoreStyle(scoreHome, teamHome) }}
                >
                  {scoreHome}
                </Span>
                <Span
                  family="secondary"
                  size="large"
                  color="primaryShade"
                  style={{ marginLeft: '1rem', marginRight: '1rem' }}
                >
                  /
                </Span>
                <Span
                  family="secondary"
                  size="large"
                  color="primaryShade"
                  style={{ ...getScoreStyle(scoreAway, teamAway) }}
                >
                  {scoreAway}
                </Span>
              </Flex>
              <Flex justify="center" align="center">
                <Span
                  family="secondary"
                  weight="bold"
                  size="medium"
                  color="primaryShade"
                  textAlign="center"
                >
                  {teamAway}
                </Span>
              </Flex>
            </Flex>
            <StyledInfo family="secondary" size="small">
              {time}
            </StyledInfo>
          </Flex>
          <Flex w="25%">
            <img
              alt="match"
              src={srcImageTeamAway}
              style={{ width: '7rem', height: 'auto' }}
            />
          </Flex>
        </MatchContainer>
      </Flex>
    )
  );

export const MatchProgram = () => {
  const nextMatchups = useNextMatchupQuery();
  const matchupObject = createMachupObject(nextMatchups);
  return (
    <AbsoluteProgram w="40vw" h="100vh">
      <LogoBackground
        css={css`
          background-image: url(${av92LogoTransparent});
          background-size: 120%;
        `}
        position="200% 100%"
      >
        <StyledSpan size="xLarge" color="light">
          LES DERNIERS MATCHS
        </StyledSpan>
        {Object.keys(matchupObject).map(matchupDate => (
          <Flex
            key={matchupDate}
            justify="flex-start"
            direction="column"
            w="90%"
            style={{ marginTop: '3rem' }}
            align="flex-start"
            flex={0}
          >
            <P color="light" size="large" family="secondary">
              {matchupDate}
            </P>
            <Match matchups={matchupObject[matchupDate]} />
          </Flex>
        ))}
      </LogoBackground>
    </AbsoluteProgram>
  );
};
