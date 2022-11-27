import styled from "styled-components";

export const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	height: 95%;
	align-items: center;
	justify-items: center;

	/* background: red; */

	button {
		grid-column: 1 / -1;
		max-width: 200px;
	}
`;

export const Item = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 100px;
	height: 60%;
	padding-left: 3rem;
	width: 90%;
	color: ${({ theme }) => theme.colors.grey};
	outline: none;
`;
