import styled from "styled-components";
import { Container, StyledButton } from "@freelance/components";
import { StyledParagraph } from "../styles/typograghy";

export const PageContainer = styled(Container)`
	flex-direction: column;
	padding-top: 60px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 40px;
`;

export const Description = styled(StyledParagraph)`
	color: ${({ theme }) => theme.colors.darkGrey};
`;

export const FormWrapper = styled.div``;

export const ButtonContainer = styled.div``;

export const FormButton = styled(StyledButton)`
	margin: 0;
`;
