import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	gap: 0.5rem;
	margin: 1rem;

	button:disabled {
		cursor: default;
		opacity: 0.5;
		&:hover {
			filter: none;
		}
	}
`;

export const RadioGroup = styled.div`
	display: flex;
	gap: 1rem;

	input[type="radio"] {
		display: none;
	}

	input[type="radio"]:checked + label {
		background: ${({ theme }) => theme.colors.lightRed};
		color: ${({ theme }) => theme.colors.white};
	}

	label {
		background: ${({ theme }) => theme.colors.grey};
		color: ${({ theme }) => theme.colors.black};
		padding: 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all ease-in-out 0.4s;

		&:hover {
			filter: brightness(1.1);
		}
	}
`;
