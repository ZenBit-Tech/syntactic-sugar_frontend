import styled, { css } from "styled-components";
import { BaseTitle } from "@freelance/components";
import { ThemeColors } from "@freelance/components";

export const StyledTitle = styled(BaseTitle)`
	font-weight: ${({ fontWeight }) => fontWeight};

	${({ fontSize }) => {
		switch (fontSize) {
			case "lg":
				return css`
					font-size: 2rem;
				`;
			case "md":
				return css`
					font-size: 1.25rem;
				`;
			case "sm":
				return css`
					font-size: 1rem;
				`;
		}
	}}
`;

interface iStyledParagraph {
	opacity?: number;
	fontSize: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iStyledParagraph>`
	font-weight: 400;

	strong,
	b {
		font-weight: 700;
	}

	${({ fontSize }) => {
		switch (fontSize) {
			case "lg":
				return css`
					font-size: 1.25rem;
				`;
			case "md":
				return css`
					font-size: 1rem;
				`;
			case "sm":
				return css`
					font-size: 0.75rem;
				`;
		}
	}}
`;

interface iStyledSpan {
	fontSize: "lg" | "md" | "sm";
	type: "validation";
}

export const StyledSpan = styled.span<iStyledSpan>`
	font-weight: 400;

	strong,
	b {
		font-weight: 700;
	}

	${({ fontSize }) => {
		switch (fontSize) {
			case "lg":
				return css`
					font-size: 1.25rem;
				`;
			case "md":
				return css`
					font-size: 1rem;
				`;
			case "sm":
				return css`
					font-size: 0.75rem;
				`;
		}
	}}

	${({ type }) => {
		switch (type) {
			case "validation":
				return css`
					position: relative;
					background: ${ThemeColors.colors.lightRed};
					border: 2px solid ${ThemeColors.colors.darkRed};
          border-radius: 2px;

					:before,
					:after {

						right: 100%;
						top: 50%;
						border: solid transparent;
						content: "";
						height: 0;
						width: 0;
						position: absolute;
						pointer-events: none;
					}
          
					:after {
            border-right-color: ${ThemeColors.colors.lightRed};
						border-width: 10px;
						margin-top: -10px;
					}
          
					:before {
						border-right-color: ${ThemeColors.colors.darkRed};
						border-width: 13px;
						margin-top: -13px;
					}
				`;
		}
	}}
`;
