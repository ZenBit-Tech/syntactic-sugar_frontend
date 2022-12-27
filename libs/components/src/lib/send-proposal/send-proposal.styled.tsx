import styled from "styled-components";
import { TextArea } from "@freelance/components";
import { StyledPage } from "@freelance/components";
import { BaseTitle } from "@freelance/components";
// import { StyledPage } from "../styles/layouts";
// import { TextArea } from "../styles/inputComponents";
// import { BaseTitle } from "../base-title/base-title";

export const Page = styled(StyledPage)`
	background: url("/assets/images/top_elipse.png") no-repeat top left,
		url("/assets/images/bottom_elipse.png") no-repeat bottom right,
		${({ theme }) => theme.colors.lightGrey};
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
	width: 100%;
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
	flex-direction: column;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Textarea = styled(TextArea)`
	height: auto;
	display: block;
	padding: 15px;
	border-radius: 30px;
	resize: none;
    width: 100%;
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

export const Span = styled.span`
	background-color: ${({ theme }) => theme.colors.darkRed};
	color: ${({ theme }) => theme.colors.black};
	width: fit-content;
	height: auto;
	border-radius: 2px;
`;
