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
	Chat,
	OfferButtonWrapper,
	OfferCardNotification,
} from "@freelance/components";
import { InstObject, Proposal } from "redux/jobs";
import { EMPLOYER_JOBS, JOBS_PAGE } from "utils/constants/breakpoint";
import { ROLES } from "utils/constants/roles";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { useJobCard } from "./job-cardHooks";
import { useChat } from "./job-cardChatHooks";
import { IInvitation, IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { IChat } from "redux/chat/chatApi";
import { IOffer } from "redux/offer/offerApi";

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
	availableAmountOfHours?: string;
	workExperience?: string;
	levelEnglish?: string;
	createdDate?: string;
	updatedDate?: string;
	userType: string;
	skills?: InstObject[];
	category?: InstObject;
	isPublished?: boolean;
	typePage?: TypePage;
	refetch?: () => void;
	employerId?: string;
	proposals?: Proposal[];
	profile?: IResponse | IResponseEmployer;
	invitation?: IInvitation[];
	jobChats?: IChat[];
	offer?: IOffer[];
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
	availableAmountOfHours,
	workExperience,
	skills,
	levelEnglish,
	updatedDate,
	userType,
	typePage,
	isPublished,
	refetch,
	employerId,
	proposals,
	invitation,
	jobChats,
	profile,
	offer,
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
		isChat,
		isInvitation,
		isProposal,
		isOffer,
		offerTax,
	} = useJobCard({ isPublished, invitation, jobChats, profile, proposals, offer });
	const { openChat, closeChat, chatModalOpen, continueChat } = useChat({
		jobId,
		employerId,
		freelancerId: profile?.id,
	});

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
				{userType === ROLES.FREELANCER && typePage === JOBS_PAGE && !isInvitation && !isProposal && (
					<GridContainer alignItems="center" justifyItems="center">
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
					</GridContainer>
				)}
				{userType === ROLES.FREELANCER &&
					typePage === JOBS_PAGE &&
					!isInvitation &&
					isProposal &&
					!isChat && (
						<GridContainer alignItems="center" justifyItems="center">
							<CardNotification fontSize="md">
								<strong>{t("jobCard.proposalSent")}</strong>
							</CardNotification>
						</GridContainer>
					)}
				{userType === ROLES.FREELANCER &&
					typePage === JOBS_PAGE &&
					!isInvitation &&
					isProposal &&
					isChat &&
					!isOffer && (
						<GridContainer alignItems="center" justifyItems="center">
							<FreelancerButtonWrapper>
								<StyledButton
									buttonColor="redGradient"
									buttonSize="lg"
									fontSize="md"
									onClick={continueChat}
								>
									<strong>{t("chat.continueChat")}</strong>
								</StyledButton>
							</FreelancerButtonWrapper>
						</GridContainer>
					)}
				{userType === ROLES.FREELANCER && typePage === JOBS_PAGE && isInvitation && !isChat && (
					<GridContainer alignItems="center" justifyItems="center">
						<FreelancerButtonWrapper>
							<StyledButton
								buttonColor="redGradient"
								buttonSize="lg"
								fontSize="md"
								onClick={openChat}
							>
								<strong>{t("chat.startChat")}</strong>
							</StyledButton>
						</FreelancerButtonWrapper>
					</GridContainer>
				)}
				{userType === ROLES.FREELANCER &&
					typePage === JOBS_PAGE &&
					isInvitation &&
					isChat &&
					!isOffer && (
						<GridContainer alignItems="center" justifyItems="center">
							<FreelancerButtonWrapper>
								<StyledButton
									buttonColor="redGradient"
									buttonSize="lg"
									fontSize="md"
									onClick={continueChat}
								>
									<strong>{t("chat.continueChat")}</strong>
								</StyledButton>
							</FreelancerButtonWrapper>
						</GridContainer>
					)}
				{userType === ROLES.FREELANCER && typePage === JOBS_PAGE && isOffer && (
					<GridContainer alignItems="center" justifyItems="center">
						<OfferCardNotification fontSize="md">
							<strong>
								{t("jobCard.offerReceived")} ${offerTax}
							</strong>
						</OfferCardNotification>
						<OfferButtonWrapper>
							<StyledButton buttonColor="redGradient" buttonSize="sm" fontSize="md">
								<strong>{t("jobCard.accept")}</strong>
							</StyledButton>
							<StyledButton buttonColor="redGradient" buttonSize="sm" fontSize="md">
								<strong>{t("jobCard.decline")}</strong>
							</StyledButton>
						</OfferButtonWrapper>
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
					<SendProposal id={jobId} onCancel={closeSendProposal} refetch={refetch} />
				</CardModal>
			)}
			{typePage === EMPLOYER_JOBS && (
				<>
					<CardModal open={isModalEditJob} onCancel={closeModalEditJob} width={1000}>
						<EditJobForm jobId={jobId} />
					</CardModal>
					<CardModal open={isProposalsListOpen} onCancel={closeProposalsList} width={1000}>
						<ProposalsList
							id={jobId}
							closeProposalsList={closeProposalsList}
							openProposalsList={openProposalsList}
						/>
					</CardModal>
				</>
			)}
			<CardModal open={chatModalOpen} onCancel={closeChat} width={800}>
				<Chat userType={userType} userId={profile?.id} />
			</CardModal>
		</StyledJobCard>
	);
}

export default JobCard;
