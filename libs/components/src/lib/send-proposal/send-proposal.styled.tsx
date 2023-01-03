import styled from "styled-components";
import { BaseTitle, Input, TextArea, StyledPage } from "@freelance/components";

export const Page = styled(StyledPage)`
	background: url("/assets/images/top_elipse.png") no-repeat top left,
		url("/assets/images/bottom_elipse.png") no-repeat bottom right,
		${({ theme }) => theme.colors.lightGrey};
`;

export const ContainerBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;
	align-items: center;

	button {
		max-width: 200px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	margin-top: 1.5rem;
	justify-content: center;
	gap: 2rem;
`;

export const FileUpload = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
`;

export const Form = styled.form`
	padding-left: 24px;
	padding-right: 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Textarea = styled(TextArea)`
	box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 10%);
	height: 283px;
	width: 88%;
	display: block;
	padding: 15px;
	border-radius: 30px;
	resize: none;
`;

export const Title = styled(BaseTitle)`
	font-size: 2rem;
	font-weight: 700;
`;

export const Label = styled.label`
	font-size: 1rem;
	padding-left: 1.5rem;
	margin-bottom: 0.5rem;
`;

export const InputRate = styled(Input)`
	display: block;
	border-radius: 20px;
	width: 20%;
	margin-bottom: 15px;
`;
