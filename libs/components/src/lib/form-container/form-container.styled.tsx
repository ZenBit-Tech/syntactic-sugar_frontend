import styled from 'styled-components';

interface MessageContainerProps {
  isRightSide: boolean;
}

export const Container = styled.div<MessageContainerProps>`
  border-top-right-radius: ${props => (props.isRightSide ? '30px' : '0px')};
  border-bottom-right-radius: ${props => (props.isRightSide ? '30px' : '0px')};
  border-bottom-left-radius: ${props => (props.isRightSide ? '0px' : '30px')};
  border-top-left-radius: ${props => (props.isRightSide ? '0px' : '30px')};
  width: 100%;
  min-width: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 2rem;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.darkRed};
  }

  #googleBtn {
    margin-top: 1rem;
  }
`;
