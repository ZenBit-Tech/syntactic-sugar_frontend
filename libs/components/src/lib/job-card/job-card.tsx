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
	CardNotification,
	DateWrapper,
	// StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
	CardTitleButton,
	JobCardHeader,
	// JobButtonContainer,
	EmployerButtonWrapper,
	FreelancerButtonWrapper,
} from "@freelance/components";
import { InstObject, Proposal } from "redux/jobs";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { JOBS_PAGE } from "utils/constants/breakpoint";
import { ROLES } from "utils/constants/roles";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
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
	typePage?: "proposals" | "jobs";
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
}: JobCardProps) {
	const { t } = useTranslation();
	const { data } = useGetFreelancerQuery();
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
		isTogglingJob,
		isModalEditJob,
	} = useJobCard({ isPublished });

	const isProposal =
		data?.proposals &&
		data?.proposals
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
								<img
									src={employerImg ? baseUrl + "/" + employerImg : DEFAULT_IMAGE}
									alt="User Avatar"
								/>
							</ImageContainer>
							<StyledParagraph fontSize="md">
								<strong>{employerCompany}</strong>, {employerName}, {employerPosition}
							</StyledParagraph>
						</FlexContainer>
					)}
					<StyledParagraph fontSize="lg">{title}</StyledParagraph>
				</GridContainer>
				{userType === ROLES.FREELANCER && typePage === JOBS_PAGE && !isProposal && (
					<FreelancerButtonWrapper>
						<StyledButton
							buttonColor="redGradient"
							buttonSize="md"
							fontSize="sm"
							onClick={openSendProposal}
						>
							<strong>{t("jobCard.sendProposal")}</strong>
						</StyledButton>
					</FreelancerButtonWrapper>
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
					{proposals && proposals.length > 0 && (
						<CardNotification fontSize="md">{t("jobCard.proposalRecived")}</CardNotification>
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
			<CardModal open={proposalModalOpen} onCancel={closeSendProposal} width={1000}>
				<SendProposal id={jobId} onCancel={closeSendProposal} />
			</CardModal>
			<CardModal open={isModalEditJob} onCancel={closeModalEditJob} width={1000}>
				<EditJobForm jobId={jobId} />
			</CardModal>
		</StyledJobCard>
	);
}

export default JobCard;
