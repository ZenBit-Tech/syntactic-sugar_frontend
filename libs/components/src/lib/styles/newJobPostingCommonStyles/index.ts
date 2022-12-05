import styled, { css } from "styled-components";
import Select from "react-select";
import { Form, Input, TextArea } from "@freelance/components";

interface IJobPostingGridForm {
	justifyItems: "center" | "start";
}

export const JobPostingGridForm = styled(Form)<IJobPostingGridForm>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
	height: 95%;
	align-items: center;
	justify-items: ${({ justifyItems }) => justifyItems};
`;

interface IIncreasedFieldWrapper {
	gridRow: number | "auto";
	typeOfLength: "full" | "half";
}

export const IncreasedFieldWrapper = styled.div<IIncreasedFieldWrapper>`
	grid-column: 1 / 3;
	grid-row: ${({ gridRow }) => gridRow};
	${({ typeOfLength }) => {
		switch (typeOfLength) {
			case "full":
				return css`
					width: 80%;
				`;
			case "half":
				return css`
					width: 40%;
				`;
		}
	}}
`;

export const FieldWrapper = styled.div`
	width: 80%;
`;

export const JobPostingLabel = styled.label`
	display: block;
	padding-left: 1rem;
	font-size: 1.5rem;
`;

export const JobPostingInput = styled(Input)`
	width: 100%;
`;

export const SelectElement = styled(Select)`
	.react-select__value-container {
		width: 80%;
		height: inherit;
	}

	.react-select__control {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 1rem;
		width: 100%;
		color: ${({ theme }) => theme.colors.grey};
		outline: none;

		:focus,
		:hover {
			border-color: ${({ theme }) => theme.colors.black};
		}
	}

	.react-select__indicator-separator {
		display: none;
	}

	.react-select__input-container {
		margin: 0;
		::after {
			display: none;
		}
	}

	.react-select__placeholder {
		color: ${({ theme }) => theme.colors.grey};
		margin: 0;
	}
`;

export const JobPostingTextArea = styled(TextArea)`
	height: auto;
	padding-top: 13px;
	border-radius: 30px;
	resize: none;
`;
