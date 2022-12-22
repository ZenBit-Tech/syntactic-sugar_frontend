import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { StyledTitle, StyledButton, StyledParagraph } from "@freelance/components";
import { Country } from "redux/jobs";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
} from "./job-card.styled";

export interface JobCardProps {
	id: string;
	position: string;
	countries: Country[];
	employmentType: string;
	proposals: {
		id: string;
		coverLetter: string;
	}[];
	availableAmountOfHours: string;
	workExperience: string;
	levelEnglish: string;
	createdDate: string;
	updatedDate?: string;
	userType: string;
	skills?: {
		id: string;
		name: string;
	}[];
	category?: {
		id: string;
		name: string;
	};
}

interface Proposal {
	id: string;
	coverLetter: string;
}

export function JobCard({
	id,
	position,
	countries,
	employmentType,
	proposals,
	availableAmountOfHours,
	workExperience,
	levelEnglish,
	createdDate,
	userType,
}: JobCardProps) {
	const { t } = useTranslation();
	const { data } = useGetFreelancerQuery();

	const isProposal = data?.proposals
		.map(proposal => {
			return proposals.find(item => item.id === proposal.id);
		})
		.some(item => item !== undefined);

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<NavLink to={`/jobs/details/${id}`}>
					<StyledTitle tag="h2" fontWeight={500} fontSize="md">
						<strong>{position}</strong>
					</StyledTitle>
				</NavLink>
				<strong>{createdDate}</strong>
				{userType === "freelancer" && !isProposal && (
					<NavLink to={`/freelancer/send-proposal/${id}`}>
						<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
							<strong>{t("jobCard.sendProposal")}</strong>
						</StyledButton>
					</NavLink>
				)}
				{userType === "employer" && (
					<div className="employerButtonContainer">
						<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
							<strong>{t("jobCard.editJob")}</strong>
						</StyledButton>
						<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm">
							<strong>{t("jobCard.removeJob")}</strong>
						</StyledButton>
					</div>
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
