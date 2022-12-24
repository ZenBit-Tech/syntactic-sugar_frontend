import styled from "styled-components";

export const JobsContainer = styled.div`
	display: grid;
	grid-template-rows: 6fr 1fr;
	align-items: center;
	justify-items: center;
	height: 100%;
	/* overflow-y: scroll; */

	::-webkit-scrollbar {
		width: 15px;
	}

	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.white};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.lightRed};
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.white};
	}
`;
