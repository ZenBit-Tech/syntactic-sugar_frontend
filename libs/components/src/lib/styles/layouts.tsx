import styled, { css } from "styled-components";

export const scrollStyle = css`
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

export const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

interface IContainer {
	modalEditJob?: boolean;
}

export const Container = styled.div<IContainer>`
	display: flex;
	margin: auto;
	width: 90%;
	height: 90%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 30px;
	${({ modalEditJob }) =>
		modalEditJob &&
		css`
			width: 100%;
			height: 100%;
			flex-direction: column;
			overflow-y: scroll;
			border-radius: unset;
			${scrollStyle}
		`}
`;
