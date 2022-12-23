import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { StyledTitle, StyledButton, StyledParagraph } from "@freelance/components";
import { InstObject, Proposal } from "redux/jobs";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { ROLES } from "utils/constants/roles";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
} from "./job-card.styled";

export interface JobCardProps {
	jobId: string;
	position: string;
	countries: InstObject[];
	employmentType: string;
	proposals: Proposal[];
	availableAmountOfHours: string;
	workExperience: string;
	levelEnglish: string;
	createdDate: string;
	updatedDate?: string;
	userType: string;
	skills?: InstObject[];
	category?: InstObject;
	handleRemoveJob?: (id: string) => void;
}

export function JobCard({
	jobId,
	position,
	countries,
	employmentType,
	proposals,
	availableAmountOfHours,
	workExperience,
	levelEnglish,
	createdDate,
	userType,
	handleRemoveJob,
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
				<NavLink to={`/jobs/details/${jobId}`}>
					<StyledTitle tag="h2" fontWeight={800} fontSize="md">
						<strong>{position}</strong>
					</StyledTitle>
				</NavLink>
				<strong>{createdDate}</strong>
				{userType === ROLES.FREELANCER && !isProposal && (
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
