import styled from 'styled-components';

const StyledHeader = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export { StyledHeader };
