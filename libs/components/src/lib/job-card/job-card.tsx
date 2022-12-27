import { useTranslation } from "react-i18next";
import { StyledButton, StyledParagraph} from "@freelance/components";
import { Country } from "redux/jobs";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { useState } from 'react';
import moment from "moment";
import { PROPOSALS_PAGE, JOBS_PAGE } from "utils/constants/breakpoint";
import { ROLES } from "utils/constants/roles";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
	CardTitleButton,
} from "./job-card.styled";
import CardModal from "../card-modal/card-modal";
import JobDetailsCard from "../job-details-card/job-details-card";
import SendProposal from "../send-proposal/send-proposal";

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
	typePage?: 'proposals' | 'jobs';
	proposalId?: string;
	skills?: {
		id: string;
		name: string;
	}[];
	category?: {
		id: string;
		name: string;
	};
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
	typePage,
}: JobCardProps) {
	const { t } = useTranslation();
	const { data } = useGetFreelancerQuery();
	const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
	const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);
	const [isCreateProposalActive, setIsCreateProposalActive] = useState(false);
	const prettyDate = moment(createdDate).format('LL');
	
	const isProposal = data?.proposals
		.map(proposal => {
			return proposals.find(item => item.id === proposal.id);
		})
		.some(item => item !== undefined);

	const closeSendProposal = () => {
		setProposalModalOpen(false);
	}

	const openCreateProposal = () => {
		setIsCreateProposalActive(true);
	}

	const goBackToDetails = () => {
		setIsCreateProposalActive(false);
	}

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<CardTitleButton onClick={() => setDetailsModalOpen(true)}>{position}</CardTitleButton>
				<strong>{prettyDate}</strong>
				{userType === ROLES.FREELANCER && (
					<>
						{typePage === JOBS_PAGE && !isProposal && (
							<StyledButton buttonColor="redGradient" buttonSize="md" fontSize="sm" onClick={() => setProposalModalOpen(true)}>
								<strong>{t("jobCard.sendProposal")}</strong>
							</StyledButton>
						)}
						{typePage === PROPOSALS_PAGE && (
							<StyledButton disabled buttonColor="redGradient" buttonSize="lg" fontSize="md">
								<strong>{t("jobCard.startChatting")}</strong>
							</StyledButton>
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
						{countries.map(country => (
							<strong key={country.id}>{country.name} </strong>
						))}
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
			<CardModal
				open={detailsModalOpen}
				onCancel={() => setDetailsModalOpen(false)}
				width={1000}>
				{!isCreateProposalActive && (
					<JobDetailsCard
						id={id} typePage={typePage}
						openCreateProposal={openCreateProposal}
						onBack={() => setDetailsModalOpen(false)} />
				)}
				{isCreateProposalActive && (
					<SendProposal
						id={id}
						goBack={goBackToDetails} />
				)}
			</CardModal>
			<CardModal
				open={proposalModalOpen}
				onCancel={() => setProposalModalOpen(false)}
				width={1000}>
				<SendProposal
					id={id}
					onCancel={closeSendProposal} />
			</CardModal>
		</StyledJobCard>

	);
}

export default JobCard;
