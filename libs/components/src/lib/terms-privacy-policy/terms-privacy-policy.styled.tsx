import styled from "styled-components";
import { StyledButton, StyledParagraph, StyledTitle } from "@freelance/components";

export const Title = styled(StyledTitle)`
	margin-top: 10px;
	margin-bottom: 10px;
	text-align: center;
`;

export const Paragraph = styled(StyledParagraph)`
	margin-bottom: 10px;
	text-align: justify;
	text-indent: 1rem;
`;

export const Button = styled(StyledButton)`
	display: block;
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
`;
