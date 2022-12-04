import styled from "styled-components";
import { TextArea, Input } from "@freelance/components";

export const Form = styled.form`
	padding-left: 20px;
	padding-right: 20px;
`;

export const InputWrapper = styled.div`
	margin-bottom: 5vh;

	span {
		opacity: 0.8;
		right: 15%;
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

export const FirstFormInput = styled(Input)`
	margin-bottom: 0;
`;

export const JobPostingTextArea = styled(TextArea)`
	height: auto;
	padding-top: 13px;
	border-radius: 30px;
	resize: none;
`;

export const JobPostingLabel = styled.label`
	display: block;
	padding-left: 1rem;
	font-size: 1.5rem;
`;
