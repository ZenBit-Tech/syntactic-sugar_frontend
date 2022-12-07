import styled from "styled-components";
import { Container, StyledButton, StyledParagraph, StyledTitle } from "@freelance/components";

export const PageContainer = styled(Container)`
	flex-direction: column;
	justify-content: center;
	padding-top: 60px;
	padding-left: 5vw;
	padding-right: 5vw;
	padding-bottom: 40px;
`;

export const JobPostingStyledTitle = styled(StyledTitle)`
	margin-bottom: 5vh;
`;

export const Description = styled(StyledParagraph)`
	margin-bottom: 5vh;
	color: ${({ theme }) => theme.colors.darkGrey};
`;

export const FormWrapper = styled.div`
	margin-bottom: 5vh;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const FormButton = styled(StyledButton)`
	margin: 0;
`;
