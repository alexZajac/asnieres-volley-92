import styled from 'styled-components';

export const Flex = styled.div`
  flex: ${props => props.flex ?? 1};
  width: ${props => props.w ?? '100%'};
  height: ${props => props.h ?? '100%'};
  position: ${props => props.position ?? 'relative'};
  display: flex;
  flex-direction: ${props => props.direction ?? 'row'};
  align-items: ${props => props.align ?? 'center'};
  justify-content: ${props => props.justify ?? 'center'};
  z-index: ${props => props.zIndex ?? 0};
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: ${props => props.w ?? '100%'};
  height: ${props => props.h ?? '100%'};
  top: ${props => props.top ?? 0};
  right: ${props => props.left ?? 0};
  z-index: ${props => props.zIndex ?? 1};
`;

export const LogoBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-position: ${props => props.position ?? '100% 0%'};
`;
