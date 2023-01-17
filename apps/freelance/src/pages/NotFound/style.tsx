import styled from "styled-components";
import { StyledButton } from "@freelance/components";

const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Container = styled.div`
	margin: auto;
	width: 70%;
	height: 60%;
	display: flex;
`;

export const ErrorPageBtn = styled(StyledButton)`
	margin-top: 1.5rem;
	width: 30%;
	border-radius: 12px;
`;

export { StyledPage };
