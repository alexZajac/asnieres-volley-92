import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Video = ({
  width,
  height,
  videoSrcURL,
  videoTitle,
  replacementImageURL,
}) => {
  return (
    <VideoContainer width={width} height={height}>
      <iframe
        width={width}
        title={videoTitle}
        height={height}
        src={videoSrcURL}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};
