import styled from "styled-components";
import {
	StyledJobCard,
	StyledJobCardHeader,
	CardTitleButton,
	StyledJobCardParagraph,
	FreelancerButtonWrapper,
} from "@freelance/components";

export const StyledFreelancersCard = styled(StyledJobCard)`
	width: 100%;
`;

export const Header = styled(StyledJobCardHeader)`
	grid-template-columns: repeat(2, 1fr);
	justify-items: flex-start;
	align-items: center;
	border-bottom: none;

	img {
		width: 12%;
		height: 12%;
		border-radius: 100%;
	}
`;

export const Title = styled(CardTitleButton)``;

export const FreelancerStyledParagraph = styled(StyledJobCardParagraph)`
	display: flex;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: start;
	flex-direction: column;

	strong {
		padding-left: 0.4rem;
	}
`;

export const WrapperContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledContainer = styled.div`
	display: flex;
	width: 80%;
	align-items: baseline;
	justify-content: space-around;
`;

export const ParagraphWrapper = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	width: auto;
	padding: 5px;
	text-align: center;
`;
