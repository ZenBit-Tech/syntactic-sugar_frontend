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
	modalScroll?: boolean;
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
			display: block;
			width: 100%;
			height: auto;
		`}
	${({ modalScroll }) =>
		modalScroll &&
		css`
			height: 85vh;
			overflow-y: scroll;
			border-radius: unset;
			${styledScroll}
		`}
  ${({ scroll }) =>
		scroll &&
		css`
			overflow-y: scroll;
			border-radius: unset;
			${styledScroll}
		`}
`;

interface IGridContainer {
	columns?: number;
	rows?: number;
	width?: number;
	alignItems?: "end" | "center" | "start";
	justifyItems?: "end" | "center" | "start";
	gap?: number;
	topLine?: boolean;
	background?: "lightGrey";
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
  ${({ topLine }) =>
		topLine &&
		css`
			border-top: solid 1px ${({ theme }) => theme.colors.grey};
			padding-top: 10px;
		`}
  ${({ background }) =>
		background &&
		css`
			background-color: ${({ theme }) => theme.colors.lightGrey};
		`}
`;

interface IGridItem {
	topLine?: boolean;
}

export const GridItem = styled.div<IGridItem>`
	${({ topLine }) =>
		topLine &&
		css`
			border-top: solid 1px ${({ theme }) => theme.colors.grey};
			padding-top: 10px;
		`}
`;

interface IFlexContainer {
	alignItems?: "start" | "end" | "center" | "baseline";
	justifyContent?: "space-between" | "space-arround" | "center";
	gap?: number;
	column?: boolean;
	width?: number;
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
  ${({ column }) =>
		column &&
		css`
			flex-direction: column;
		`}
  ${({ width }) =>
		width &&
		css`
			width: ${width}%;
		`}
`;
