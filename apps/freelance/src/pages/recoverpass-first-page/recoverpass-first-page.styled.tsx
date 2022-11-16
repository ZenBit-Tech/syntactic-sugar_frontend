import styled from 'styled-components';

const StyledPage = styled.div`
  margin: auto;
  display: flex;
  height: 100vh;

  background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Container = styled.div`
  margin: auto;
  width: 90%;
  height: 80%;
  display: flex;
`;

export { StyledPage };
