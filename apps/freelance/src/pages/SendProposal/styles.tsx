import styled from "styled-components";

export const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: url("/assets/images/top_elipse.png") no-repeat top left,
		url("/assets/images/bottom_elipse.png") no-repeat bottom right,
		${({ theme }) => theme.colors.lightGrey};
`;

export const Container = styled.div`
	margin: auto;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	width: 80%;
	min-width: 50%;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Buttons = styled.div`
	margin-top: 15px;
`;
