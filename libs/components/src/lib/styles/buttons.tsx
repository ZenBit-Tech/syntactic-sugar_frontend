import styled, { css } from "styled-components";

interface iStyledButtonProps {
	buttonSize: "lg" | "md" | "sm";
	buttonColor: "redGradient" | "blue" | "lightRed" | "darkRed";
	fontSize?: "lg" | "md" | "sm";
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
	padding: 0.6rem 0;
	transition: all ease-in-out 0.4s;

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
  
  &:hover {
		filter: brightness(1.1);
	}
`;
