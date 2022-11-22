import styled from "styled-components";

const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	height: 95%;
	align-items: center;
	justify-items: center;

	input,
	textarea {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 4rem;
		width: 70%;
		outline: none;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}

	button {
		grid-column: 1 / -1;
		place-self: center;
	}
`;

export const InputWrapper = styled.div`
	padding: 2rem;
	display: flex;
	height: 100%;
	width: 100%;
`;

export const InputContainer = styled.div`
	label {
		width: 100%;
		text-align: left;
		padding-bottom: 1rem;
	}
	display: flex;
	gap: 1rem;
	align-items: center;
	flex-direction: column;
	width: 50%;
`;

export const TextAreaContainer = styled.div`
	label {
		width: 100%;
		text-align: left;
		padding-left: 2rem;
	}

	textarea {
		margin-bottom: 2rem;
		height: 200px;
		color: ${({ theme }) => theme.colors.black};
		resize: none;
		border-radius: 30px;
		width: 80%;
		padding: 2rem;
	}
	display: flex;
	gap: 1rem;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 3rem;
`;

export { StyledPage };
