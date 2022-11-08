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
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
  }

  img {
    margin-bottom: 1rem;
  }

  p {
    color: #a0a0a0;
    font-weight: 500;
    text-align: center;
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
    border: 2px solid #d9d9d9;
    border-radius: 100px;
    width: 75%;
    height: 50px;
    padding-left: 50px;

    ::placeholder {
      color: #d9d9d9;
    }
  }

  input[type='email'] {
    outline: none;
    background: url('../../../assets/images/user_icon.png') no-repeat 20px center;
    background-size: 15px;
  }

  input[type='password'] {
    outline: none;
    background: url('../../../assets/images/password_icon.png') no-repeat 20px center;
    background-size: 15px;
  }

  button {
    border: none;
    border-radius: 100px;
    width: 75%;
    height: 50px;
    background: linear-gradient(90deg, #c91a16 15.63%, #ec3b37 86.51%);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  a {
    color: #c91a16;
    font-weight: bold;

    img{
      display: flex;
      margin-top: 1rem;
      align-items:center;
      justify-content: center;
      
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
  color: #fff;

  h3 {
    color: #fff;
    font-size: 2.2rem;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;
