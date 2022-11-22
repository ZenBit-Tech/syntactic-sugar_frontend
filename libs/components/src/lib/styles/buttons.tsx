import styled, { css } from "styled-components";

interface iStyledButtonProps {
	buttonSize: "lg" | "md" | "modal";
	buttonColor: "redGradient" | "blue";
}

export const StyledButton = styled.button<iStyledButtonProps>`
	font-weight: 700;
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.white};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.6rem;
	border-radius: 100px;
	padding: 0.7rem 0;
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
			case "modal":
				return css`
					width: 48%;
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
		}
	}}
  
  &:hover {
		filter: brightness(1.1);
	}
`;
