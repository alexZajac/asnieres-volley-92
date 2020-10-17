import { graphql, useStaticQuery } from 'gatsby';

export const useNextMatchupQuery = () => {
  const nextMatchupData = useStaticQuery(graphql`
    query NextMatchupQuery {
      allMongodbAv92Matchups(filter: { isNextMatchup: { eq: true } }) {
        edges {
          node {
            srcImageTeamAway
            teamHome
            teamAway
            srcImageTeamHome
            scoreHome
            scoreAway
            matchupDate
            court
            category
          }
        }
      }
    }
  `);
  const {
    allMongodbAv92Matchups: { edges },
  } = nextMatchupData;
  return edges.map(({ node }) => ({ ...node }));
};
