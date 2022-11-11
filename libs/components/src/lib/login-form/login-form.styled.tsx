import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 90%;
  height: 80%;
  display: flex;
`;

export const LeftSide = styled.div`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
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
    font-weight: bold;

    img {
      margin-top: 1rem;
      width: 50%;
    }
  }
`;

export const RightSide = styled.div`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: radial-gradient(
      85.21% 85.21% at 50% 14.79%,
      rgba(201, 26, 22, 0.9) 0%,
      rgba(236, 59, 55, 0.9) 100%
    ),
    url('/assets/images/form_wrapper_bg.png') no-repeat right;
  background-size: cover;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;
