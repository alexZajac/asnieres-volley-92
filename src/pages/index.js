import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';
import { ChevronsDown } from 'react-feather';
import { SEO, Video, NavContainer } from '../components';
import { sections } from '../shared/Constants';
import { AbsoluteContainer, Flex, Span, H1 } from '../elements';
import { MatchProgram } from '../components/MatchProgram';

const Shade = styled.div`
  width: 100%;
  height: ${props => props.height};
  background: ${props => props.background};
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.spacings.medium} 0;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom: solid 1px ${props => props.theme.colors.light};
  margin-top: ${props => props.theme.spacings.medium};

  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`;

const SectionTitle = styled(Span)`
  padding: 0 ${props => props.theme.spacings.small};
  cursor: pointer;
  transition: all ease-in-out 200ms;

  &:hover {
    letter-spacing: 1px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImg = styled(Img)`
  filter: drop-shadow(10px 10px 100px #000);
  margin: ${props => props.theme.spacings.small};
  align-self: center;

  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: ${props => props.theme.spacings.xxLarge};
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.secondary};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  padding: ${props =>
    `${props.theme.spacings.small} ${props.theme.spacings.large}`};
  color: ${props => props.theme.colors.light};
  cursor: pointer;

  @media ${props => props.theme.breakpoints.mobile} {
    align-self: center;
    width: 80%;
    text-align: center;
  }
`;

const PageTitle = styled(H1)`
  text-transform: uppercase;
  max-width: 75%;
  margin: ${props => props.theme.spacings.xxLarge} 0;

  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    align-self: center;
    font-size: 32px;
  }
`;

const upDown = keyframes`
  0% {
    transform: translateY(-3rem);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3rem);
  }
`;

const CursorBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: ${props => props.theme.colors.light};
  margin: ${props => props.theme.spacings.xxLarge} 0;
  animation: ${upDown} 2s ease-in-out infinite;
`;

const scrollToPage = () =>
  window &&
  window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });

const AbsoluteVideoBackground = ({
  videoSrcURL,
  videoTitle,
  replacementImageURL,
}) => (
  <AbsoluteContainer zIndex={0}>
    <Video
      videoSrcURL={videoSrcURL}
      videoTitle={videoTitle}
      w="100vw"
      h="100vh"
      replacementImageURL={replacementImageURL}
    />
    <AbsoluteContainer zIndex={1}>
      <Shade
        h="100%"
        background="linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%)"
      />
    </AbsoluteContainer>
  </AbsoluteContainer>
);

const Splashscreen = ({ image, pageTitle, videoSrcURL, videoTitle }) => (
  <Flex justify="space-between" zIndex={3} h="100vh">
    <AbsoluteVideoBackground
      videoSrcURL={videoSrcURL}
      videoTitle={videoTitle}
    />
    <Flex justify="space-between" zIndex={2}>
      <Flex h="100vh" />
      <Flex h="100vh" flex={10} justify="flex-start" direction="column">
        <Header>
          {sections.map(s => (
            <StyledLink key={s.to} to={s.to}>
              <SectionTitle color="light" size="small" key={s.to}>
                {s.name}
              </SectionTitle>
            </StyledLink>
          ))}
        </Header>
        <Flex direction="column" align="flex-end" justify="space-between">
          <Flex direction="column" align="flex-end" justify="space-between">
            <StyledImg fixed={image} />
          </Flex>
          <Flex direction="column" align="flex-end" justify="space-between">
            <PageTitle family="av92" color="light" textAlign="right">
              {pageTitle}
            </PageTitle>
          </Flex>
          <Flex direction="column" align="flex-end" justify="center">
            <Button onClick={scrollToPage}>Allez sur le site</Button>
          </Flex>
          <Flex direction="column" align="flex-end" justify="space-between">
            <CursorBox onClick={scrollToPage}>
              <ChevronsDown size={34} color="white" />
            </CursorBox>
          </Flex>
        </Flex>
      </Flex>
      <Flex h="100vh" />
    </Flex>
  </Flex>
);

const IndexPage = ({ data, ...props }) => {
  const { location } = props;
  const {
    markdownRemark,
    file: {
      childImageSharp: { fixed },
    },
  } = data;
  const {
    frontmatter: { videoSrcURL, videoTitle, title },
  } = markdownRemark;

  return (
    <Flex justify="space-between" direction="column">
      <SEO title="Home" />
      <AbsoluteContainer
        h="100vh"
        zIndex={2}
        style={{ backgroundColor: '#000' }}
      />
      <Splashscreen
        videoSrcURL={videoSrcURL}
        videoTitle={videoTitle}
        image={fixed}
        pageTitle={title}
      />
      <Flex justify="space-between" h="100vh">
        <NavContainer location={location}>
          <Flex flex={3} direction="row" />
          <MatchProgram image={fixed} />
        </NavContainer>
      </Flex>
    </Flex>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        videoSrcURL
        videoTitle
        replacementImageURL
      }
    }
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 260, height: 260) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
