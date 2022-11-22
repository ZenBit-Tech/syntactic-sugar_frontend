import styled from "styled-components";

const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};

	* {
		scrollbar-width: auto;
		scrollbar-color: ${({ theme }) => theme.colors.lightRed} ${({ theme }) => theme.colors.white};
	}

	*::-webkit-scrollbar {
		width: 15px;
	}

	*::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.white};
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.lightRed};
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.white};
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	height: 90%;

	input,
	textarea {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 4rem;
		width: 80%;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	height: 70%;
`;

export const InputContainer = styled.div`
	width: 100%;
	overflow-y: auto;

	#institute {
		background: url("/assets/images/institute_icon.png") no-repeat 20px center;
	}

	#occupation {
		background: url("/assets/images/occupation_icon.png") no-repeat 20px center;
	}

	#period {
		background: url("/assets/images/period_icon.png") no-repeat 20px center;
	}

	#company {
		background: url("/assets/images/company_icon.png") no-repeat 20px center;
	}

	#workPosition {
		background: url("/assets/images/work_position_icon.png") no-repeat 20px center;
	}

	#institute,
	#occupation,
	#period,
	#company,
	#workPosition {
		background-size: 15px 15px;
	}
`;

export const InputHeader = styled.div`
	position: sticky;
	top: 0;
	background: ${({ theme }) => theme.colors.white};
	padding: 0 0.5rem;
	height: 50px;

	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	button {
		width: 5%;
		height: 5%;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	width: 100%;

	hr {
		margin-bottom: 2rem;
		width: 90%;
		border: 3px groove ${({ theme }) => theme.colors.darkGrey};
		border-radius: 20px;
	}

	button {
		width: 20%;
	}
`;

export const TextAreaContainer = styled.div`
	padding-top: 1rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	flex-direction: column;
	height: 30%;

	label {
		width: 100%;
	}

	textarea {
		height: 100%;
		margin-bottom: 2rem;
		color: ${({ theme }) => theme.colors.black};
		resize: none;
		border-radius: 30px;
		width: 80%;
		padding: 1rem;
		outline: none;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 3rem;
	justify-content: center;

	button {
		width: 20%;
	}
`;

export { StyledPage };