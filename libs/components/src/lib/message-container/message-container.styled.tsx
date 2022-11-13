import styled from 'styled-components';

interface MessageContainerProps {
  isRightSide: boolean;
}

export const Container = styled.div<MessageContainerProps>`
  border-top-right-radius: ${props => (props.isRightSide ? '30px' : '0px')};
  border-bottom-right-radius: ${props => (props.isRightSide ? '30px' : '0px')};
  border-bottom-left-radius: ${props => (props.isRightSide ? '0px' : '30px')};
  border-top-left-radius: ${props => (props.isRightSide ? '0px' : '30px')};
  background: radial-gradient(
      85.21% 85.21% at 50% 14.79%,
      rgba(201, 26, 22, 0.9) 0%,
      rgba(236, 59, 55, 0.9) 100%
    ),
    url('/assets/images/form_wrapper_bg.png') no-repeat right;
  background-size: cover;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 0 1rem;

  h3 {
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;
