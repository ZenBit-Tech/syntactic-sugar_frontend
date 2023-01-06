import styled from "styled-components";
import { GridContainer, StyledParagraph } from "@freelance/components";

export const StyledJobCard = styled.div`
	display: grid;
	width: 100%;
	gap: 10px;
	padding: 10px;
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	min-height: 130px;
	overflow: hidden;
	transition: all ease-in-out 0.4s;
	:hover {
		transform: scale(1.03);
	}
`;

export const JobCardHeader = styled(GridContainer)`
	grid-template-columns: 4fr 1fr 1fr;
`;

export const StyledJobCardHeader = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 2fr;
	gap: 10px;
	justify-items: center;
	align-items: center;

	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

	button {
		padding: 0.4rem;
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

export const ParagraphWrapper = styled(StyledParagraph)`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	padding: 5px;
	width: auto;
`;

export const CardNotification = styled(ParagraphWrapper)`
	border: 6px double ${({ theme }) => theme.colors.grey};
	font-size: 0.8rem;
`;

export const DateWrapper = styled(StyledParagraph)`
	padding: 0.7rem 0;
`;

export const JobButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const FreelancerButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;

	button {
		border-radius: 12px;
	}
`;

export const EmployerButtonWrapper = styled.div`
	display: inline-block;
	text-align: center;
	width: 100%;
	flex-grow: 1;

	button {
		border-radius: 12px;
	}
`;

export const LocationBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
`;

export const CountriesContainer = styled.div`
	display: flex;
`;

export const CardTitleButton = styled.button`
	font-size: 1.3rem;
	font-weight: 500;
	outline-style: none;
`;

export const ImageContainer = styled.div`
	img {
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
`;
