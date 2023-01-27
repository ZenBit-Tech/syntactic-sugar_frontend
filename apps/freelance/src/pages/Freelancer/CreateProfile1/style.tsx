import styled from "styled-components";
import { GridContainer, EditForm, SelectElement } from "@freelance/components";

export const SelectMulti = styled(SelectElement)`
	.react-select__control {
		min-height: 50px;
		height: auto;
	}

	.react-select__control--menu-is-open {
	}
`;

export const GridBox = styled(GridContainer)`
	grid-row-gap: 45px;
	grid-column-gap: 110px;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const Form = styled(EditForm)`
	width: 75%;
	button {
		grid-column: 1 / -1;
		margin: 0 auto;
	}
`;

export const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;
