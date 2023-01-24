import styled, { css } from "styled-components";
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
	text-align: center;
	width: 75%;
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
	justify-content: center;
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

	:hover {
		text-decoration: underline;
		font-weight: 700;
	}
`;

interface IImageContainer {
	proposalCard?: boolean;
}

export const ImageContainer = styled.div<IImageContainer>`
	img {
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		${({ proposalCard }) =>
			proposalCard &&
			css`
				width: 77px;
				height: 77px;
			`}
	}
`;

export const OfferButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	gap: 10px;

	button {
		border-radius: 12px;
	}
`;

export const OfferCardNotification = styled(CardNotification)`
	width: 90%;
`;
