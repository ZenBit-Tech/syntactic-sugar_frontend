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
