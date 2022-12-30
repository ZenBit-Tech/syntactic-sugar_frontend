import styled from "styled-components";
import Select from "react-select";
import { TextArea } from "@freelance/components";
import { StyledPage } from "@freelance/components";
import { BaseTitle } from "@freelance/components";

export const Page = styled(StyledPage)`
	background: url("/assets/images/top_elipse.png") no-repeat top left,
		url("/assets/images/bottom_elipse.png") no-repeat bottom right,
		${({ theme }) => theme.colors.lightGrey};
`;

export const SelectElement = styled(Select)`
	margin-bottom: 15px;

	.react-select__control {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;

		width: 25%;
		color: ${({ theme }) => theme.colors.grey};
		outline: none;
	}

	.react-select__placeholder {
		margin-left: 5px;
		color: ${({ theme }) => theme.colors.grey};
	}

	.react-select__indicator-separator {
		display: none;
	}
`;

export const Container = styled.div`
	margin: auto;
	height: 80%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	border-radius: 30px;
	width: 80%;
	min-width: 50%;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Buttons = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: space-between;
`;

export const FileUpload = styled.div`
	margin-top: 15px;
	display: flex;
	width: fit-content;
	flex-direction: column;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Textarea = styled(TextArea)`
	height: auto;
	width: 100%;
	display: block;
	padding: 15px;
	border-radius: 30px;
	resize: none;
`;

export const Title = styled(BaseTitle)`
	font-size: 2rem;
	font-weight: 700;
`;

export const SubTitle = styled(BaseTitle)`
	font-size: 1.5rem;
	font-weight: 500;
`;

export const Label = styled.label`
	font-size: 1rem;
`;

export const SpanError = styled.span`
	color: ${({ theme }) => theme.colors.brightRed};
`;
