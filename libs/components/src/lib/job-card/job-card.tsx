import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { StyledTitle, StyledButton, StyledParagraph } from "@freelance/components";
import { Country } from "redux/jobs";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
} from "./job-card.styled";
import { ROLES } from "utils/constants/roles";

export interface JobCardProps {
	jobId: string;
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
	handleRemoveJob?: (id: string) => void;
}

export function JobCard({
	jobId,
	position,
	countries,
	employmentType,
	availableAmountOfHours,
	workExperience,
	levelEnglish,
	createdDate,
	userType,
	handleRemoveJob,
}: JobCardProps) {
	const { t } = useTranslation();

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<NavLink to={`/jobs/details/${jobId}`}>
					<StyledTitle tag="h2" fontWeight={800} fontSize="md">
						<strong>{position}</strong>
					</StyledTitle>
				</NavLink>
				<strong>{createdDate}</strong>
				{userType === ROLES.FREELANCER && (
					<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
						<strong>{t("jobCard.sendProposal")}</strong>
					</StyledButton>
				)}
				{userType === ROLES.EMPLOYER && (
					<>
						<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
							<strong>{t("jobCard.editJob")}</strong>
						</StyledButton>
						<StyledButton
							onClick={() => handleRemoveJob && handleRemoveJob(jobId)}
							buttonColor="redGradient"
							buttonSize="lg"
							fontSize="md"
						>
							<strong>{t("jobCard.closeJob")}</strong>
						</StyledButton>
					</>
				)}
			</StyledJobCardHeader>
			<StyledJobCardParagraph>
				<LocationBlock>
					<StyledParagraph fontSize="sm" opacity={0.7}>
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
				<StyledParagraph fontSize="sm" opacity={0.7}>
					{t("jobCard.employmentType")}: <strong>{employmentType}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="sm" opacity={0.7}>
					{t("jobCard.option")}: <strong>{availableAmountOfHours}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="sm" opacity={0.7}>
					{t("jobCard.exp")}: <strong>{workExperience}</strong>
				</StyledParagraph>
				<StyledParagraph fontSize="sm" opacity={0.7}>
					{t("jobCard.englishLevel")}: <strong>{levelEnglish}</strong>
				</StyledParagraph>
			</StyledJobCardParagraph>
		</StyledJobCard>
	);
}

export default JobCard;
