import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem;

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
`;
