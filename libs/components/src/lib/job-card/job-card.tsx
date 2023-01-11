import { useTranslation } from "react-i18next";
import moment from "moment";
import {
	GridContainer,
	ParagraphWrapper,
	ImageContainer,
	FlexContainer,
	StyledButton,
	StyledParagraph,
	CardModal,
	SendProposal,
	CreateProposalonJob,
	EditJobForm,
	StyledJobCard,
	DateWrapper,
	CardTitleButton,
	JobCardHeader,
	EmployerButtonWrapper,
	FreelancerButtonWrapper,
	ProposalsList,
	TypePage,
	CardNotification,
} from "@freelance/components";
import { InstObject, Proposal } from "redux/jobs";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { EMPLOYER_JOBS, JOBS_PAGE } from "utils/constants/breakpoint";
import { ROLES } from "utils/constants/roles";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { useJobCard } from "./job-cardHooks";

export interface JobCardProps {
	jobId: string;
	position?: string;
	hourRate?: string;
	employerImg?: string;
	employerName?: string;
	employerCompany?: string;
	employerPosition?: string;
	title?: string;
	countries?: InstObject[];
	employmentType?: string;
	proposals?: Proposal[];
	availableAmountOfHours?: string;
	workExperience?: string;
	levelEnglish?: string;
	createdDate?: string;
	updatedDate?: string;
	userType?: string;
	skills?: InstObject[];
	category?: InstObject;
	isPublished?: boolean;
	typePage?: TypePage;
	profile?: IResponse | IResponseEmployer;
}

export function JobCard({
	jobId,
	position,
	hourRate,
	employerImg,
	employerName,
	employerCompany,
	employerPosition,
	title,
	countries,
	employmentType,
	proposals,
	availableAmountOfHours,
	workExperience,
	skills,
	levelEnglish,
	updatedDate,
	userType,
	typePage,
	isPublished,
	profile,
}: JobCardProps) {
	const { t } = useTranslation();
	const prettyDate = moment(updatedDate).format("LL");
	const {
		handleToggleIsPublishedButton,
		openSendProposal,
		closeCreateProposal,
		openCreateProposal,
		closeSendProposal,
		proposalModalOpen,
		detailsModalOpen,
		handleEditJob,
		closeModalEditJob,
		openProposalsList,
		closeProposalsList,
		isProposalsListOpen,
		isTogglingJob,
		isModalEditJob,
	} = useJobCard({ isPublished });

	const isProposal =
		profile?.proposals &&
		profile?.proposals
			.map(proposal => {
				return proposals?.find(item => item.id === proposal.id);
			})
			.some(item => item !== undefined);

	return (
		<StyledJobCard>
			<JobCardHeader>
				<GridContainer>
					<FlexContainer alignItems="baseline" gap={10}>
						<CardTitleButton onClick={openCreateProposal}>{position}</CardTitleButton>
						<StyledParagraph fontSize="md">{hourRate}</StyledParagraph>
					</FlexContainer>
					{userType === ROLES.FREELANCER && (
						<FlexContainer>
							<ImageContainer>
								<img src={employerImg ? baseUrl + employerImg : DEFAULT_IMAGE} alt="User Avatar" />
							</ImageContainer>
							<StyledParagraph fontSize="md">
								<strong>{employerCompany}</strong>, {employerName}, {employerPosition}
							</StyledParagraph>
						</FlexContainer>
					)}
					<StyledParagraph fontSize="lg">{title}</StyledParagraph>
				</GridContainer>
				{userType === ROLES.FREELANCER && typePage === JOBS_PAGE && (
					<GridContainer alignItems="center" justifyItems="center">
						{!isProposal ? (
							<FreelancerButtonWrapper>
								<StyledButton
									buttonColor="redGradient"
									buttonSize="lg"
									fontSize="md"
									onClick={openSendProposal}
								>
									<strong>{t("jobCard.sendProposal")}</strong>
								</StyledButton>
							</FreelancerButtonWrapper>
						) : (
							<CardNotification fontSize="md">
								<strong>{t("jobCard.proposalSent")}</strong>
							</CardNotification>
						)}
					</GridContainer>
				)}
				{userType === ROLES.EMPLOYER && (
					<GridContainer alignItems="center" justifyItems="center" gap={10}>
						<EmployerButtonWrapper>
							<StyledButton
								onClick={() => handleEditJob(proposals)}
								buttonColor="redGradient"
								buttonSize="lg"
								fontSize="md"
							>
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
						</EmployerButtonWrapper>
					</GridContainer>
				)}
				<GridContainer alignItems="center" justifyItems="center">
					<DateWrapper fontSize="md">
						<strong>{prettyDate}</strong>
					</DateWrapper>
					{userType === ROLES.EMPLOYER && proposals && proposals.length > 0 && (
						<EmployerButtonWrapper>
							<StyledButton
								onClick={openProposalsList}
								buttonColor="redGradient"
								buttonSize="lg"
								fontSize="md"
							>
								<strong>{t("jobCard.proposalRecived")}</strong>
							</StyledButton>
						</EmployerButtonWrapper>
					)}
				</GridContainer>
			</JobCardHeader>
			<FlexContainer gap={10}>
				{countries &&
					countries.map(country => (
						<ParagraphWrapper fontSize="md" opacity={0.8} key={country.id}>
							{country.name}{" "}
						</ParagraphWrapper>
					))}
				<ParagraphWrapper fontSize="md" opacity={0.8}>
					{employmentType}
				</ParagraphWrapper>
				<ParagraphWrapper fontSize="md" opacity={0.8}>
					{availableAmountOfHours}
				</ParagraphWrapper>
				<ParagraphWrapper fontSize="md" opacity={0.8}>
					{workExperience}
				</ParagraphWrapper>
				<ParagraphWrapper fontSize="md" opacity={0.8}>
					{levelEnglish}
				</ParagraphWrapper>
				{skills &&
					skills.map(skill => (
						<ParagraphWrapper fontSize="md" opacity={0.8} key={skill.id}>
							{skill.name}
						</ParagraphWrapper>
					))}
			</FlexContainer>

			{/* Modals */}

			<CardModal open={detailsModalOpen} onCancel={closeCreateProposal} width={1000}>
				<CreateProposalonJob
					id={jobId}
					typePage={typePage}
					onBack={closeCreateProposal}
					onCancel={closeCreateProposal}
					isProposal={isProposal}
				/>
			</CardModal>
			{typePage === JOBS_PAGE && (
				<CardModal open={proposalModalOpen} onCancel={closeSendProposal} width={1000}>
					<SendProposal id={jobId} onCancel={closeSendProposal} />
				</CardModal>
			)}
			{typePage === EMPLOYER_JOBS && (
				<>
					<CardModal open={isModalEditJob} onCancel={closeModalEditJob} width={1000}>
						<EditJobForm jobId={jobId} />
					</CardModal>
					<CardModal open={isProposalsListOpen} onCancel={closeProposalsList} width={1000}>
						<ProposalsList id={jobId} />
					</CardModal>
				</>
			)}
		</StyledJobCard>
	);
}

export default JobCard;
