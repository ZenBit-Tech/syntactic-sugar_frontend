import styled, { css } from "styled-components";

interface iStyledButtonProps {
	buttonSize: "lg" | "md" | "sm" | "modal" | "card" | "filter" | "chat";
	buttonColor: "redGradient" | "blue" | "lightRed" | "darkRed";
	fontSize?: "lg" | "md" | "sm";
	iconButton?: boolean;
}

export const StyledButton = styled.button<iStyledButtonProps>`
	font-weight: 400;

	strong,
	b {
		font-weight: 700;
	}

	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.white};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.6rem;
	border-radius: 100px;
	border: 0px double ${({ theme }) => theme.colors.darkRed};
	padding: 0.6rem 0;
	transition: all ease-in-out 0.4s;
	cursor: auto;
	:disabled {
		color: ${({ theme }) => theme.colors.darkGrey};
	}

	${({ buttonSize }) => {
		switch (buttonSize) {
			case "lg":
				return css`
					width: 75%;
				`;
			case "md":
				return css`
					width: 55%;
				`;
			case "sm":
				return css`
					width: 35%;
				`;
			case "modal":
				return css`
					width: 48%;
				`;
			case "card":
				return css`
					width: 20%;
				`;
			case "filter":
				return css`
					width: 45%;
				`;
			case "chat":
				return css`
					width: 100%;
				`;
		}
	}}

	${({ buttonColor }) => {
		switch (buttonColor) {
			case "redGradient":
				return css`
					background: linear-gradient(
						90deg,
						${({ theme }) => theme.colors.darkRed} 15.63%,
						${({ theme }) => theme.colors.lightRed} 86.51%
					);
				`;
			case "blue":
				return css`
					background: ${({ theme }) => theme.colors.blue};
				`;
			case "lightRed":
				return css`
					background: ${({ theme }) => theme.colors.lightRed};
				`;
			case "darkRed":
				return css`
					background: ${({ theme }) => theme.colors.darkRed};
				`;
		}
	}}

	  &:not([disabled]):hover {
		filter: brightness(1.1);
		cursor: pointer;
	}

	${({ iconButton }) =>
		iconButton &&
		css`
			border-radius: 12px;
			width: 10%;
		`}

	${({ fontSize }) => {
		switch (fontSize) {
			case "lg":
				return css`
					font-size: 1.2rem;
				`;
			case "md":
				return css`
					font-size: 0.8rem;
				`;
			case "sm":
				return css`
					font-size: 0.4rem;
				`;
		}

		return;
	}}
`;

export const FilterButton = styled(StyledButton)`
	padding: 0.3rem 0.5rem;
	box-sizing: content-box;

	:disabled {
		border: 6px double ${({ theme }) => theme.colors.darkRed};
	}
`;

interface IButtonContainer {
	align?: "left" | "center" | "right";
}

export const ButtonContainer = styled.div<IButtonContainer>`
	${({ align }) => {
		switch (align) {
			case "left":
				return css`
					text-align: left;
				`;
			case "center":
				return css`
					text-align: center; ;
				`;
			case "right":
				return css`
					text-align: right;
				`;
		}

		return;
	}}
`;
