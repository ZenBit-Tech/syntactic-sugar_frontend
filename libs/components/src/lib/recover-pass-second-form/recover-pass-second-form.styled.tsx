import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 20px;
  }

  input {
    display: block;
    width: 300px;
    height: 50px;
    margin-bottom: 10px;
    padding: 10px;
  }

  button {
    display: block;
    padding: 10px;
    border: 1px solid ${({theme}) => theme.color.black};
    background-color: ${({theme}) => theme.color.blue};
    color: ${({theme})=>theme.color.white};
  }
`;
