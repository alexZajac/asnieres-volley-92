import styled from 'styled-components';

export const NavWrapper = styled.nav`
  width: 80px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
