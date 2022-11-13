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

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem;
  }

  input {
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 100px;
    width: 75%;
    height: 50px;
    padding-left: 50px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  input[type='email'] {
    background: url('/assets/images/user_icon.png') no-repeat 20px center;
    background-size: 15px;
  }

  input[type='password'] {
    background: url('/assets/images/password_icon.png') no-repeat 20px center;
    background-size: 15px;
  }

  a {
    color: ${({ theme }) => theme.colors.darkRed};
  }

  #logo {
    width: 50%;
    max-width: 350px;
    min-width: 300px;
  }

  #googleBtn {
    margin-top: 1rem;
  }
`;
