import styled from "styled-components";

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
		width: 75%;
		align-self: center;
		align-items: center;
		height: 50px;
		padding-left: 50px;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}

	input[type="checkbox"] {
		width: 15px;
		height: 15px;
		border-color: ${({ theme }) => theme.colors.darkGrey};
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

export const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	span {
		opacity: 0.8;
		right: -15%;
		text-align: center;
		align-items: center;
		justify-content: center;
		display: inline-flex;
		height: auto;
		max-height: 50px;
		width: 20%;
		padding: 0.5rem;
		color: ${({ theme }) => theme.colors.white};
		position: absolute;
	}
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	width: auto;
	gap: 0.2rem;

	label {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;
