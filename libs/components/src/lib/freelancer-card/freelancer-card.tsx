import { useTranslation } from "react-i18next";
import moment from "moment";
import { CardTitleButton, StyledButton, StyledParagraph } from "@freelance/components";
import { educationProps, workHistoryProps } from "redux/createFreelancer/freelancer-slice";
import { InstObject, Proposal } from "redux/jobs";
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";
import {
	Header,
	StyledFreelancersCard,
	FreelancerStyledParagraph,
	Wrapper,
	WrapperContainer,
	StyledContainer,
	ParagraphWrapper,
	TitleBox,
} from "./freelancer-card.styled";
import { useFreelancerCard } from "./freelancer-cardHook";

export interface FreelancerCardProps {
	id?: string;
	fullName?: string;
	category?: InstObject;
	position?: string;
	skills?: InstObject[];
	employmentType?: string;
	country?: InstObject;
	hourRate?: string;
	availableAmountOfHours?: string;
	workExperience?: string;
	englishLevel?: string;
	education?: educationProps[];
	workHistory?: workHistoryProps[];
	otherExperience?: string;
	isPublished?: boolean;
	createdDate?: string;
	updatedDate?: string;
	image?: string;
	proposals?: Proposal[];
	user?: { id: number; email: string };
}

export function FreelancerCard({
	id,
	fullName,
	category,
	position,
	skills,
	employmentType,
	country,
	hourRate,
	availableAmountOfHours,
	workExperience,
	englishLevel,
	education,
	workHistory,
	otherExperience,
	createdDate,
	updatedDate,
	isPublished,
	image,
	proposals,
	user,
}: FreelancerCardProps) {
	const { t } = useTranslation();
	const prettyDate = moment(createdDate).format("LL");
	const { openFreelancerProfile, closeFreelancerProfile, freelancerProfileModalOpen } =
		useFreelancerCard();

	return (
		<StyledFreelancersCard>
			<Header>
				<WrapperContainer>
					<img src={image ? baseUrl + "/" + image : DEFAULT_IMAGE} alt="User Avatar" />
					<Wrapper>
						<TitleBox>
							<CardTitleButton onClick={openFreelancerProfile}>{`${fullName}`}</CardTitleButton>
							<strong>{hourRate}</strong>
						</TitleBox>
						<StyledParagraph fontSize="md" opacity={0.7}>
							<strong>{position}</strong>
						</StyledParagraph>
					</Wrapper>
				</WrapperContainer>
				<StyledContainer>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md">
						{t("talents.inv")}
					</StyledButton>
					<strong>{prettyDate}</strong>
				</StyledContainer>
			</Header>
			<FreelancerStyledParagraph>
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{country?.name}
					</StyledParagraph>
				</ParagraphWrapper>
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{employmentType}
					</StyledParagraph>
				</ParagraphWrapper>
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{workExperience}
					</StyledParagraph>
				</ParagraphWrapper>
				{skills &&
					skills.map(skill => (
						<ParagraphWrapper>
							<StyledParagraph fontSize="md" opacity={0.7}>
								{skill.name}
							</StyledParagraph>
						</ParagraphWrapper>
					))}
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{englishLevel}
					</StyledParagraph>
				</ParagraphWrapper>
			</FreelancerStyledParagraph>
		</StyledFreelancersCard>
	);
}

export default FreelancerCard;
