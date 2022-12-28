import styled from "styled-components";
import { Form } from "@pages/Freelancer/CreateProfile1/style";

export const FormBox = styled(Form)`
	height: 90%;
	input {
		padding-left: 3rem;
	}

	textarea {
		height: 60%;
		color: ${({ theme }) => theme.colors.black};
		border: 2px solid ${({ theme }) => theme.colors.grey};
		resize: none;
		border-radius: 30px;
		width: 80%;
		padding: 1rem;
		outline: none;
		grid-column: 1 / -1;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}

	span {
		color: ${({ theme }) => theme.colors.black};
		background-color: ${({ theme }) => theme.colors.darkRed};
		border-radius: 3px;
		display: block;
	}
`;

export const InputContainer = styled.div`
	color: ${({ theme }) => theme.colors.black};
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledFileField = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	div {
		display: flex;
		justify-content: space-between;
		width: 40%;
	}
	img {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		background: ${({ theme }) => theme.colors.grey};
		object-fit: cover;
		border-radius: 10%;
		height: 120px;
		width: 120px;
	}
	label {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: ${({ theme }) => theme.colors.white};
		border-radius: 100px;
		font-size: 10px;
		background-color: ${({ theme }) => theme.colors.darkRed};
		cursor: pointer;
		width: 100%;
		height: 20px;
		cursor: pointer;
		margin: 5px;
	}
	input[type="file"],
	input[type="button"] {
		display: none;
	}
`;
