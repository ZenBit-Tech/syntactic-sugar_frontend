import styled from "styled-components";
import { StyledParagraph } from "@freelance/components";

export const JobsContainer = styled.div`
	display: grid;
	grid-template-rows: 6fr 1fr;
	align-items: center;
	justify-items: center;
	height: 100%;
`;

export const JobsParagraph = styled(StyledParagraph)`
	max-width: 410px;
	text-align: center;
	font-size: 2rem;
`;
