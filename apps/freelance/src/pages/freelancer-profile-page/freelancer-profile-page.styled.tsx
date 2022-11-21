import styled from "styled-components";

const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Form = styled.form`
	display: grid;
	/* gap: 1rem; */
	/* grid-row-gap: -3rem; */
	grid-template-columns: 1fr 1fr;
	/* padding-top: 1rem; */
	height: 95%;
	align-items: center;
	justify-items: center;

	button {
		grid-column: 1 / -1;
		place-self: center;
	}

	input,
	select {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 50px;
		width: 70%;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}

	input[type="text"],
	select,
	option {
		color: ${({ theme }) => theme.colors.black};
		background: url("/assets/images/user_icon.png") no-repeat 20px center;
		background-size: 15px;
		outline: none;
	}
	select {
		color: ${({ theme }) => theme.colors.grey};
	}
`;

export { StyledPage };
