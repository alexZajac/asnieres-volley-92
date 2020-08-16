import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ChevronsDown } from 'react-feather';
import { SEO, Video, NavContainer } from '../components';
import { sections } from '../shared/Constants';
import { AbsoluteContainer } from '../elements';

const Shade = styled.div`
  width: 100%;
  height: ${props => props.height};
  background: ${props => props.background};
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: ${props => props.zIndex};
  max-width: 100%;
`;

const BlockRow = styled.div`
  flex: ${props => props.flex};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.spacings.medium} 0;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom: solid 1px ${props => props.theme.colors.light};
  margin-top: ${props => props.theme.spacings.medium};
`;

const SectionTitle = styled.span`
  color: ${props => props.theme.colors.light};
  font-size: 16px;
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
  margin: ${props => props.theme.spacings.xxLarge};
  filter: drop-shadow(10px 10px 100px #000);
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
`;

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.light};
  font-size: 48px;
  font-family: ${props => props.theme.fonts.av92};
  text-align: right;
  text-transform: uppercase;
  max-width: 65%;
  margin: ${props => props.theme.spacings.xxLarge} 0;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
`;

const CursorBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: ${props => props.theme.colors.light};
  margin: ${props => props.theme.spacings.xxLarge} 0;
`;

const scrollToPage = () =>
  window &&
  window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });

const IndexPage = ({ data, ...props }) => {
  const { location } = props;
  const {
    markdownRemark,
    file: {
      childImageSharp: { fixed },
    },
  } = data;
  const { frontmatter: pageData } = markdownRemark;
  const VideoBackground = () => (
    <AbsoluteContainer zIndex={0}>
      <Video
        videoSrcURL={pageData.videoSrcURL}
        videoTitle={pageData.videoTitle}
        width="100%"
        height="100%"
        replacementImageURL={pageData.replacementImageURL}
      />
      <AbsoluteContainer zIndex={1}>
        <Shade
          height="35%"
          background="linear-gradient(180deg, rgba(0, 0, 0, 0.8) 10.1%, rgba(0, 0, 0, 0) 100%)"
        />
      </AbsoluteContainer>
    </AbsoluteContainer>
  );
  const Splashscreen = () => (
    <FlexContainer style={{ zIndex: '2' }} width="100vw" height="100vh">
      <VideoBackground />
      <FlexContainer zIndex={2} height="100%" width="100%">
        <BlockRow flex="1 1 auto" />
        <BlockRow flex="1 0 auto">
          <Header>
            {sections.map(s => (
              <StyledLink key={s.to} to={s.to}>
                <SectionTitle key={s.to}>{s.name}</SectionTitle>
              </StyledLink>
            ))}
          </Header>
          <StyledImg fixed={fixed} />
          <ContentRow>
            <PageTitle>{pageData.title}</PageTitle>
            <Button onClick={scrollToPage}>Allez sur le site</Button>
            <CursorBox onClick={scrollToPage}>
              <ChevronsDown size={34} color="white" />
            </CursorBox>
          </ContentRow>
        </BlockRow>
        <BlockRow flex="1 1 auto" />
      </FlexContainer>
    </FlexContainer>
  );
  return (
    <CenterDiv>
      <SEO title="Home" />
      <Splashscreen />
      <FlexContainer width="100vw" height="100vh">
        <NavContainer location={location}>
          <p>Hello</p>
        </NavContainer>
      </FlexContainer>
    </CenterDiv>
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
        fixed(width: 258, height: 258) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
