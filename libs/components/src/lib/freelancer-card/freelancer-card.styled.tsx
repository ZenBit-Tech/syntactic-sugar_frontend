import styled from "styled-components";
import {
	StyledJobCard,
	StyledJobCardHeader,
	CardTitleButton,
	StyledJobCardParagraph,
} from "@freelance/components";

export const StyledFreelancersCard = styled(StyledJobCard)`
	width: 100%;
`;

export const Header = styled(StyledJobCardHeader)`
	grid-template-columns: repeat(2, 1fr);
	justify-items: end;
	align-items: center;
	border-bottom: none;

	img {
		width: 12%;
		height: 12%;
		border-radius: 100%;
	}
`;

export const TitleBox = styled.div``;

export const FreelancerStyledParagraph = styled(StyledJobCardParagraph)`
	display: flex;
	flex-wrap: wrap;
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
	width: 70%;
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
