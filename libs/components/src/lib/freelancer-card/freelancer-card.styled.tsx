import styled from "styled-components";
import {
	StyledJobCard,
	StyledJobCardHeader,
	CardTitleButton,
	StyledJobCardParagraph,
} from "../job-card/job-card.styled";
import { FreelancerButtonWrapper } from "../job-card/job-card.styled";

export const StyledFreelancersCard = styled(StyledJobCard)`
	width: 100%;
`;

export const Header = styled(StyledJobCardHeader)`
	grid-template-columns: repeat(2, 1fr);
	justify-items: flex-start;
	align-items: baseline;
	border-bottom: none;
`;

export const Title = styled(CardTitleButton)``;

export const FreelancerStyledParagraph = styled(StyledJobCardParagraph)`
	grid-template-columns: repeat(4, 1fr);
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const Wrapper = styled(FreelancerButtonWrapper)`
	justify-content: flex-start;
`;

export const WrapperContainer = styled.div`
	img {
		width: 8%;
	}
`;

export const StyledContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: baseline;
	justify-content: space-around;
`;
