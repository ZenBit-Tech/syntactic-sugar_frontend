import { useTranslation } from "react-i18next";
import { StyledTitle, StyledButton, StyledParagraph } from "@freelance/components";
import { Country, useRemoveProposalByIdMutation } from "redux/jobs";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock
} from "./job-card.styled";
import { PROPOSALS_PAGE, JOBS_PAGE } from "utils/constants/breakpoint";
import { ROLES } from "utils/constants/roles";

export interface JobCardProps {
	position: string;
	countries: Country[];
	employmentType: string;
	availableAmountOfHours: string;
	workExperience: string;
	levelEnglish: string;
	createdDate: string;
	updatedDate?: string;
	userType: string;
	skills?: string[];
	category?: string;
	typePage?: 'proposals' | 'jobs';
	proposalId?: string;
}

export function JobCard({
	position,
	countries,
	employmentType,
	availableAmountOfHours,
	workExperience,
	levelEnglish,
	createdDate,
	userType,
	typePage,
	proposalId,
}: JobCardProps) {
	const { t } = useTranslation();

	const [remove] = useRemoveProposalByIdMutation();

	const handleClick = async(proposalId: string) => {
		await remove(proposalId);
	}

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<StyledTitle tag="h2" fontWeight={800} fontSize="sm">
					<strong>{position}</strong>
				</StyledTitle>
				<strong>{createdDate}</strong>
				{userType === ROLES.FREELANCER && (
					<>
						{typePage === JOBS_PAGE && (
							<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
								<strong>{t("jobCard.sendProposal")}</strong>
							</StyledButton>)}
						{typePage === PROPOSALS_PAGE && (
							<>
								<StyledButton disabled buttonColor="redGradient" buttonSize="lg" fontSize="md">
									<strong>{t("jobCard.startChatting")}</strong>
								</StyledButton>
								{/* <StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md" onClick={() => proposalId && handleClick(proposalId)}>
									<strong>{t("jobCard.removeProposal")}</strong>
								</StyledButton> */}
							</>
						)}
					</>
				)}
				{userType === ROLES.EMPLOYER && (
					<>
						<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
							<strong>{t("jobCard.editJob")}</strong>
						</StyledButton>
						<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
							<strong>{t("jobCard.removeJob")}</strong>
						</StyledButton>
					</>
				)}
			</StyledJobCardHeader>
			<StyledJobCardParagraph>
				<LocationBlock>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{t("jobCard.location")}:
					</StyledParagraph>
					<CountriesContainer>
						<div>
							{countries.map(country => (
								<strong key={country.id}>{country.name} </strong>
							))}
						</div>
					</CountriesContainer>
				</LocationBlock>
				<StyledParagraph fontSize="md" opacity={0.7}>
					{t("jobCard.employmentType")}: <strong>{employmentType}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					{t("jobCard.option")}: <strong>{availableAmountOfHours}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					{t("jobCard.exp")}: <strong>{workExperience}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="md" opacity={0.7}>
					{t("jobCard.englishLevel")}: <strong>{levelEnglish}</strong>
				</StyledParagraph>
			</StyledJobCardParagraph>
		</StyledJobCard>
	);
}

export default JobCard;
