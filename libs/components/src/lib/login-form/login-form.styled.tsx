import styled, { css } from "styled-components";
import { InferType } from "yup";
import { signInSchema } from "utils/validations/loginForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { FocusEventHandler, FormEventHandler } from 'react';

interface Form {
  isError: boolean;
}

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	align-items: center;
	gap: 0.5rem;
	margin: 1rem;
	position: relative;

	input {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		width: 70%;
		align-self: center;
		align-items: center;
		height: 50px;
		padding-left: 50px;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}

	input[type="email"] {
		background: url("/assets/images/user_icon.png") no-repeat 20px center;
		background-size: 15px;
	}

	input[type="password"] {
		background: url("/assets/images/password_icon.png") no-repeat 20px center;
		background-size: 15px;
	}
`;

export const InputWrapper = styled.div<Form>`
	display: flex;
	justify-content: center;
	width: 100%;

	p {
		right: -20%;
		text-align: center;
		align-items: center;
		justify-content: center;
		display: inline-flex;
		height: 50px;
		width: 25%;
		color: ${({ theme }) => theme.colors.darkRed};
		position: absolute;
		${({isError})=> {
      switch(isError){
        case true:
         return css`
            background-color: blue;
          `
          case false:
           return css`
              background-color: none;
            `
      }
    }}
	}
`;
