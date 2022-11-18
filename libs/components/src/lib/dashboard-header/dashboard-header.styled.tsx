import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.lightRed};
`;