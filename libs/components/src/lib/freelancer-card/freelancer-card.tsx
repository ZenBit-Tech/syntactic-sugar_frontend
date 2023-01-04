import { useTranslation } from "react-i18next";
import moment from "moment";
import { StyledButton, StyledParagraph } from "@freelance/components";
import { educationProps, workHistoryProps } from "redux/createFreelancer/freelancer-slice";
import { InstObject, Proposal } from "redux/jobs";
import { DEFAULT_IMAGE } from "utils/constants/links";
import {
	Header,
	StyledFreelancersCard,
	Title,
	FreelancerStyledParagraph,
	Wrapper,
	WrapperContainer,
	StyledContainer,
} from "./freelancer-card.styled";

import { useFreelancerCard } from "./freelancer-cardHook";

export interface FreelancerCardProps {
	id: string;
	fullName: string;
	category: InstObject;
	position: string;
	skills: InstObject[];
	employmentType: string;
	country: InstObject;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	education?: educationProps[];
	workHistory?: workHistoryProps[];
	otherExperience?: string;
	isPublished?: boolean;
	createdDate: string;
	updatedDate?: string;
	image?: string;
	proposals?: Proposal[];
	user: { id: number; email: string };
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
					<Wrapper>
						{image ? (
							<img src={image} alt={t("talents.avatar")} />
						) : (
							<img src={DEFAULT_IMAGE} alt={t("talents.avatar")} />
						)}
						<Title onClick={openFreelancerProfile}>{`${fullName}`}</Title>
						{/* <StyledParagraph fontSize="lg">{`${fullName}`}</StyledParagraph> */}
						<StyledParagraph fontSize="md" opacity={0.7}>
							<strong>{hourRate}</strong>
						</StyledParagraph>
					</Wrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						<strong>{position}</strong>
					</StyledParagraph>
				</WrapperContainer>

				<StyledContainer>
					<StyledButton
						buttonColor="redGradient"
						buttonSize="sm"
						fontSize="md"
						// onClick={}
					>
						<strong>{t("talents.inv")}</strong>
					</StyledButton>
					<strong>{prettyDate}</strong>
				</StyledContainer>
			</Header>
			<FreelancerStyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					<strong>{country.name}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					<strong>{employmentType}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					<strong>{workExperience}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					<strong>{englishLevel}</strong>
				</StyledParagraph>
			</FreelancerStyledParagraph>
		</StyledFreelancersCard>
	);
}

export default FreelancerCard;
