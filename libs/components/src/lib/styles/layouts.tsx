import styled, { css } from "styled-components";

export const styledScroll = css`
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
	overflow: hidden;
	position: relative;
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

interface IContainer {
	modal?: boolean;
	modalEditJob?: boolean;
	proposalsList?: boolean;
	scroll?: boolean;
	proposalDetails?: boolean;
}

export const Container = styled.div<IContainer>`
	display: flex;
	margin: auto;
	width: 90%;
	height: 90%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 30px;
	${({ modal }) =>
		modal &&
		css`
			width: 100%;
			height: 85vh;
		`}
	${({ modalEditJob }) =>
		modalEditJob &&
		css`
			flex-direction: column;
		`}
  ${({ scroll }) =>
		scroll &&
		css`
			overflow-y: scroll;
			border-radius: unset;
			${styledScroll}
		`}
  ${({ proposalsList }) =>
		proposalsList &&
		css`
			display: block;
			height: auto;
		`}
  ${({ proposalDetails }) =>
		proposalDetails &&
		css`
			display: block;
			height: auto;
		`}
`;

interface IGridContainer {
	columns?: number;
	rows?: number;
	width?: number;
	alignItems?: "end" | "center" | "start";
	justifyItems?: "end" | "center" | "start";
	gap?: number;
}

export const GridContainer = styled.div<IGridContainer>`
	display: grid;
	${({ columns }) =>
		columns &&
		css`
			grid-template-columns: repeat(${columns}, 1fr);
		`}
	${({ rows }) =>
		rows &&
		css`
			grid-template-rows: repeat(${rows}, 1fr);
		`}
  ${({ width }) =>
		width &&
		css`
			width: ${width}%;
		`}
  ${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`}

	${({ justifyItems }) =>
		justifyItems &&
		css`
			justify-items: ${justifyItems};
		`}
  ${({ gap }) =>
		gap &&
		css`
			gap: ${gap}px;
		`}
`;

interface IGridItem {
	gridColumn?: number;
}

export const GridItem = styled.div<IGridItem>``;

interface IFlexContainer {
	alignItems?: "start" | "end" | "center" | "baseline";
	justifyContent?: "space-between" | "space-arround" | "center";
	gap?: number;
	culomn?: boolean;
}

export const FlexContainer = styled.div<IFlexContainer>`
	display: flex;
	flex-wrap: wrap;
	${({ gap }) =>
		gap &&
		css`
			gap: ${gap}px;
		`}
	${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`}

	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`}
  ${({ culomn }) =>
		culomn &&
		css`
			flex-direction: column;
		`}
`;
