import { useTranslation } from "react-i18next";
import { StyledTitle, StyledButton, StyledParagraph } from "@freelance/components";
import { Country } from "redux/jobs";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
} from "./job-card.styled";
import { NavLink } from "react-router-dom";

export interface JobCardProps {
	id: string;
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
}

export function JobCard({
	id,
	position,
	countries,
	employmentType,
	availableAmountOfHours,
	workExperience,
	levelEnglish,
	createdDate,
	userType,
}: JobCardProps) {
	const { t } = useTranslation();

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<NavLink to={`/jobs/details/${id}`}>
					<StyledTitle tag="h2" fontWeight={800} fontSize="md">
						<strong>{position}</strong>
					</StyledTitle>
				</NavLink>

				<strong>{createdDate}</strong>
				{userType === "freelancer" && (
					<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
						<strong>{t("jobCard.sendProposal")}</strong>
					</StyledButton>
				)}
				{userType === "employer" && (
					<>
						<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
							<strong>{t("jobCard.editJob")}</strong>
						</StyledButton>
						<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
							<strong>{t("jobCard.removeJob")}</strong>
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
						{countries.map(country => (
							<strong key={country.id}>{country.name}</strong>
						))}
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
