import styled from "styled-components";
import { StyledParagraph } from "@freelance/components";

export const JobsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

export const JobsParagraph = styled(StyledParagraph)`
	height: 30%;
	max-width: 410px;
	text-align: center;
	font-size: 2rem;
`;
