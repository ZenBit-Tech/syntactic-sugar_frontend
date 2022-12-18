import { useTranslation } from "react-i18next";
import { StyledTitle, StyledButton, StyledParagraph } from "@freelance/components";
import { Country } from "redux/jobs";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
} from "./job-card.styled";

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
}: JobCardProps) {
	const { t } = useTranslation();

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<StyledTitle tag="h2" fontWeight={800} fontSize="md">
					<strong>{position}</strong>
				</StyledTitle>
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
				<StyledParagraph fontSize="sm" opacity={0.7}>
					{t("jobCard.location")}:
					<CountriesContainer>
						{countries.map(country => (
							<strong key={country.id}>{country.name}</strong>
						))}
					</CountriesContainer>
				</StyledParagraph>
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
