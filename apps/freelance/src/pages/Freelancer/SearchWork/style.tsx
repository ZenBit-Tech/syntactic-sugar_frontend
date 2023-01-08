import styled from "styled-components";

const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};

	* {
		scrollbar-width: auto;
		scrollbar-color: ${({ theme }) => theme.colors.lightRed} ${({ theme }) => theme.colors.white};
	}

	*::-webkit-scrollbar {
		width: 15px;
	}

	*::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.white};
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.lightRed};
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.white};
	}
`;

export const InputHeader = styled.div`
	position: sticky;
	top: 0;
	background: ${({ theme }) => theme.colors.white};
	padding: 0 0.5rem;
	height: 30px;
	margin-bottom: 10px;
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export { StyledPage };
