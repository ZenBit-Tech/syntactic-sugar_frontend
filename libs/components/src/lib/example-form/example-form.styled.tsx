import styled from 'styled-components';

const StyledForm = styled.form`
 max-width: 800px;
 margin: 0 auto;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 50%;
  border-radius: 4px;
  background-color: white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: black;
  font-size: 14px;
  font-weight: 200;
`;

const StyledButton = styled.button`
  width: 50%;
  background: #001529;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
`;

export {StyledButton, StyledLabel, StyledInput, StyledForm};