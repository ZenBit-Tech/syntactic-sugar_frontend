import styled, { css } from "styled-components";

const styles = css`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 100px;
	height: 50px;
	padding-left: 1rem;
	width: 80%;
	color: ${({ theme }) => theme.colors.grey};
	outline: none;

	:focus,
	:hover {
		border-color: ${({ theme }) => theme.colors.black};
	}

	:valid {
		color: ${({ theme }) => theme.colors.black};
	}

	:focus::placeholder,
	:hover::placeholder {
		color: ${({ theme }) => theme.colors.black};
	}

	::placeholder {
		color: ${({ theme }) => theme.colors.grey};
	}
`;

export const Input = styled.input`
	${styles}
`;

export const Select = styled.select`
	${styles}
`;

export const TextArea = styled.textarea`
	${styles}
`;

interface IErrorsHandlerWrapper {
	positionRight: number;
	width: number;
}

export const ErrorsHandlerWrapper = styled.div<IErrorsHandlerWrapper>`
	position: relative;

	span {
		opacity: 0.8;
		top: 50%;
		right: ${({ positionRight }) => positionRight}%;
		text-align: center;
		align-items: center;
		justify-content: center;
		display: inline-flex;
		height: auto;
		max-height: 50px;
		width: ${({ width }) => width}%;
		padding: 0.5rem;
		color: ${({ theme }) => theme.colors.white};
		position: absolute;
		transform: translateY(-50%);
	}
`;

export const Form = styled.form`
	padding-left: 20px;
	padding-right: 20px;
`;
