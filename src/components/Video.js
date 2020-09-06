import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  overflow: hidden;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transform-origin: center;
  @media ${props => props.theme.breakpoints.tablet} {
    transform: scale(2.5);
  }
  @media ${props => props.theme.breakpoints.mobile} {
    transform: scale(4);
  }
`;

export const Video = ({ videoSrcURL, videoTitle }) => {
  return (
    <VideoContainer height="100%" width="100%">
      <Iframe
        title={videoTitle}
        src={videoSrcURL}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};
