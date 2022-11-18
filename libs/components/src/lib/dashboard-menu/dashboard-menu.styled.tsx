import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-width: 250px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: ${({ theme }) => theme.colors.darkRed};
`;
