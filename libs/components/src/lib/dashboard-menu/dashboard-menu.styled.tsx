import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 20%;
	min-width: 200px;
	max-width: 250px;
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
	background-color: ${({ theme }) => theme.colors.darkRed};
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-top: 2.5rem;
	gap: 2.5rem;

	#logo {
		width: 75%;
	}

	button {
		border-radius: 12px;

		:disabled {
			border: 6px double ${({ theme }) => theme.colors.darkRed};
		}
	}
`;

export const FilterButtonWrap = styled(Container)`
	gap: 1.5rem;
	border-top: double 5px ${({ theme }) => theme.colors.brightRed};
`;
