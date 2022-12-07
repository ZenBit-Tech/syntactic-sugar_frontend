import styled from "styled-components";

export const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Container = styled.div`
	display: flex;
	margin: auto;
	width: 90%;
	height: 90%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 30px;
`;
