import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
`;

export const ContainerChildren = styled.div`
  height: 100%;
  margin-left: 5rem;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '100%'};
  top: ${props => props.top ?? 0};
  left: ${props => props.width ?? 0};
  z-index: ${props => props.zIndex ?? 1};
`;
