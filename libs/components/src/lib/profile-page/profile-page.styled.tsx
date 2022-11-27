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
	width: 90%;
	height: 80%;
	display: flex;
	justify-content: center;
`;

export const Form = styled.form`
	display: grid;
`;
