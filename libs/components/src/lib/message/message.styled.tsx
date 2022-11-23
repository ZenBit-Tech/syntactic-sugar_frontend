import styled from "styled-components";

export const Container = styled.div`
	margin: auto;
	flex-direction: column;
	width: 80%;
	height: 80%;
	display: flex;
	border-radius: 30px;
	text-align: center;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border: solid ${({ theme }) => theme.colors.darkRed};
	box-shadow: inset 0 0 10px ${({ theme }) => theme.colors.lightRed};
	border-width: 1rem;
	background: ${({ theme }) => theme.colors.white};
	padding: 2rem;

	p {
		color: ${({ theme }) => theme.colors.darkGrey};
	}

	a {
		color: ${({ theme }) => theme.colors.darkRed};
	}
`;
