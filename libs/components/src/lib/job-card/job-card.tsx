import { useTranslation } from "react-i18next";
import { StyledButton, StyledParagraph, CardModal, SendProposal, CreateProposalonJob, Chat } from "@freelance/components";
import { IEmployerResponse, InstObject, Proposal } from "redux/jobs";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import moment from "moment";
import { JOBS_PAGE } from "utils/constants/breakpoint";
import { ROLES } from "utils/constants/roles";
import {
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
	CardTitleButton,
} from "./job-card.styled";
import {
	JobButtonContainer,
	EmployerButtonWrapper,
	FreelancerButtonWrapper,
} from "./job-card.styled";
import { useJobCard } from "./job-cardHooks";

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
	isPublished: boolean;
  employer: IEmployerResponse;
	typePage?: 'proposals' | 'jobs';
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
	typePage,
	isPublished,
  employer
}: JobCardProps) {
	const { t } = useTranslation();
	const { data } = useGetFreelancerQuery();
	const prettyDate = moment(createdDate).format('LL');
	const {
		handleSendProrposalClick,
		handleToggleIsPublishedButton,
		openSendProposal,
		closeCreateProposal,
		openCreateProposal,
		closeSendProposal,
		isTogglingJob,
		proposalModalOpen,
		detailsModalOpen,
		openChat,
		closeChat,
		chatModalOpen,
	} = useJobCard(isPublished, jobId, employer.id, data?.id);

	const isProposal = data?.proposals
		.map(proposal => {
			return proposals.find(item => item.id === proposal.id);
		})
		.some(item => item !== undefined);

	return (
		<StyledJobCard>
			<StyledJobCardHeader>
				<CardTitleButton onClick={openCreateProposal}>{position}</CardTitleButton>
				<strong>{prettyDate}</strong>
				{userType === ROLES.FREELANCER && (
					<>
						{typePage === JOBS_PAGE && !isProposal && (
							<FreelancerButtonWrapper>
								<StyledButton
									buttonColor="redGradient"
									buttonSize="md"
									fontSize="sm"
									onClick={openSendProposal}
								>
									<strong>{t("jobCard.sendProposal")}</strong>
								</StyledButton>
								<StyledButton
									buttonColor="redGradient"
									buttonSize="md"
									fontSize="sm"
									onClick={openChat}
								>
									<strong>Chat</strong>
								</StyledButton>
							</FreelancerButtonWrapper>
						)}
					</>
				)}
				{userType === ROLES.EMPLOYER && (
					<JobButtonContainer>
						<EmployerButtonWrapper>
							<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
								<strong>{t("jobCard.editJob")}</strong>
							</StyledButton>
						</EmployerButtonWrapper>
						<EmployerButtonWrapper>
							<StyledButton
								onClick={() => handleToggleIsPublishedButton(jobId)}
								buttonColor="redGradient"
								buttonSize="lg"
								fontSize="md"
								disabled={isTogglingJob}
							>
								<strong>{isPublished ? t("jobCard.closeJob") : t("jobCard.publishJob")}</strong>
							</StyledButton>
							<StyledButton
								buttonColor="redGradient"
								buttonSize="md"
								fontSize="sm"
								onClick={openChat}
							>
								<strong>Chat</strong>
							</StyledButton>
						</EmployerButtonWrapper>
					</JobButtonContainer>
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
			<CardModal open={detailsModalOpen} onCancel={closeCreateProposal} width={1000}>
				<CreateProposalonJob
					id={jobId}
					typePage={typePage}
					onBack={closeCreateProposal}
					onCancel={closeCreateProposal}
					isProposal={isProposal}
				/>
			</CardModal>
			<CardModal open={proposalModalOpen} onCancel={closeSendProposal} width={1000}>
				<SendProposal id={jobId} onCancel={closeSendProposal} />
			</CardModal>
			<CardModal open={chatModalOpen} onCancel={closeChat} width={1000}>
				<Chat userType={userType} userId={userType === ROLES.FREELANCER ? data?.id : employer.id} />
			</CardModal>
		</StyledJobCard>
	);
}

export default JobCard;
