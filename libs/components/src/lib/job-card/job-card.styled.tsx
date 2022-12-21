import styled from "styled-components";
import { StyledParagraph } from "@freelance/components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 5px;

`;

export const StyledJobCard = styled.div`
	display: grid;
	width: 100%;
	gap: 10px;
	padding: 10px;
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	max-height: 200px;
	overflow: hidden;
	:hover {
		transform: scale(1.03);
	}
`;

export const StyledJobCardHeader = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	justify-items: center;
	align-items: center;
  padding: 0.2rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
	button {
		padding: 0.1rem;
	}
`;

export const StyledJobCardHeaderLeft = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	align-items: center;
`;

export const StyledJobCardParagraph = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;

	strong {
		font-size: 0.7rem;
	}
`;

export const LocationBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
`;

export const CountriesContainer = styled.div`
	display: flex;
`;
