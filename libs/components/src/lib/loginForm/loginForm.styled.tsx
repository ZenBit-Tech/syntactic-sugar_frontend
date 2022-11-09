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
  background-color: ${({ theme }) => theme.colors.whiteText};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
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
    border: 2px solid ${({ theme }) => theme.colors.lightText};
    border-radius: 100px;
    width: 75%;
    height: 50px;
    padding-left: 50px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.lightText};
    }
  }

  input[type='email'] {
    background: url('../../../assets/images/user_icon.png') no-repeat 20px center;
    background-size: 15px;
  }

  input[type='password'] {
    background: url('../../../assets/images/password_icon.png') no-repeat 20px center;
    background-size: 15px;
  }

  button {
    border-radius: 100px;
    width: 75%;
    height: 50px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 15.63%,
      ${({ theme }) => theme.colors.secondary} 86.51%
    );
    color: ${({ theme }) => theme.colors.whiteText};
    font-size: 1rem;
    font-weight: 700;
  }

  #GoogleBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background: ${({ theme }) => theme.colors.button};
    width: 55%;
    height: 8%;
    margin-top: 1rem;
    gap: 3rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
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
    url('../../../assets/images/form_wrapper_bg.png') no-repeat right;
  background-size: cover;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  h3 {
    color: ${({ theme }) => theme.colors.whiteText};
    font-size: 2.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.whiteText};
    margin: 0;
    font-size: 1.2rem;
  }
`;
