import styled from "styled-components";
import { Form } from "@pages/Freelancer/CreateProfile1/style";
import { TextAreaContainer } from "@pages/Freelancer/CreateProfile2/style";

export const FormBox = styled(Form)`
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
`;

export const BtnBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TextArea = styled(TextAreaContainer)``;
