import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import moment from "moment";
import {
	StyledJobCard,
	ImageContainer,
	JobCardHeader,
	FlexContainer,
	GridContainer,
	CardTitleButton,
	StyledParagraph,
	EmployerButtonWrapper,
	StyledButton,
	DateWrapper,
	CardModal,
	Container,
	StyledTitle,
	ViewFreelancerProfile,
	Chat,
	useChat,
} from "@freelance/components";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { IChat } from "redux/chat/chatApi";
import { useProposalCard } from "./proposal-cardHook";

export interface ProposalCardProps {
	id: string;
	coverLetter?: string;
	hourRate?: string;
	filePath?: string;
	createdDate?: string;
	freelancer?: IResponse;
	employerId?: string;
	jobId?: string;
	jobChats?: IChat[];
	userType?: string;
}

export function ProposalCard({
	coverLetter,
	hourRate,
	createdDate,
	freelancer,
	employerId,
	jobId,
	jobChats,
	userType,
}: ProposalCardProps) {
	const { t } = useTranslation();
	const prettyDate = moment(createdDate).format("LL");
	const {
		openProfileModal,
		closeProfileModal,
		isProfileOpen,
		openLetterModal,
		closeLetterModal,
		isLetterOpen,
	} = useProposalCard();
	const { openChat, closeChat, chatModalOpen, continueChat } = useChat({
		jobId,
		employerId,
		freelancerId: freelancer?.id,
	});
	const isChat = useMemo(
		() => jobChats?.some(chat => chat.employer?.id === employerId),
		[jobChats, employerId],
	);

	return (
		<StyledJobCard>
			<JobCardHeader alignItems="center">
				<FlexContainer gap={10}>
					<ImageContainer proposalCard>
						<img
							src={freelancer?.image ? baseUrl + freelancer?.image : DEFAULT_IMAGE}
							alt="User Avatar"
						/>
					</ImageContainer>
					<GridContainer>
						<CardTitleButton onClick={openProfileModal}>{freelancer?.fullName}</CardTitleButton>
						<StyledParagraph fontSize="md">{hourRate}$</StyledParagraph>
					</GridContainer>
				</FlexContainer>
				<GridContainer gap={10}>
					<EmployerButtonWrapper>
						{!isChat && (
							<StyledButton
								buttonColor="redGradient"
								buttonSize="lg"
								fontSize="md"
								onClick={openChat}
							>
								<strong>{t("chat.startChat")}</strong>
							</StyledButton>
						)}
						{isChat && (
							<StyledButton
								buttonColor="redGradient"
								buttonSize="lg"
								fontSize="md"
								onClick={continueChat}
							>
								<strong>{t("chat.continueChat")}</strong>
							</StyledButton>
						)}
					</EmployerButtonWrapper>
					<EmployerButtonWrapper>
						<StyledButton
							onClick={openLetterModal}
							buttonColor="redGradient"
							buttonSize="lg"
							fontSize="md"
						>
							<strong>{t("proposalCard.coverLetter")}</strong>
						</StyledButton>
					</EmployerButtonWrapper>
				</GridContainer>
				<GridContainer justifyItems="center">
					<DateWrapper fontSize="md">
						<strong>{prettyDate}</strong>
					</DateWrapper>
				</GridContainer>
			</JobCardHeader>

			{/* Modals */}

			<CardModal open={isProfileOpen} onCancel={closeProfileModal} width={1000}>
				<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
					{t("proposalCard.freelancerProfile")}
				</StyledTitle>
				<ViewFreelancerProfile
					fullName={freelancer?.fullName}
					category={freelancer?.category}
					country={freelancer?.country}
					position={freelancer?.position}
					employmentType={freelancer?.employmentType}
					englishLevel={freelancer?.englishLevel}
					workExperience={freelancer?.workExperience}
					hourRate={freelancer?.hourRate}
					availableAmountOfHours={freelancer?.availableAmountOfHours}
					skills={freelancer?.skills}
					workHistory={freelancer?.workHistory}
					education={freelancer?.education}
					otherExperience={freelancer?.otherExperience}
				/>
			</CardModal>
			<CardModal open={isLetterOpen} onCancel={closeLetterModal} width={1000}>
				<Container modal>
					<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
						{t("proposalCard.coverLetter")}
					</StyledTitle>
					<StyledParagraph fontSize="md">{coverLetter}</StyledParagraph>
				</Container>
			</CardModal>
			<CardModal open={chatModalOpen} onCancel={closeChat} width={800}>
				<Chat userType={userType!} userId={employerId} />
			</CardModal>
		</StyledJobCard>
	);
}

export default ProposalCard;
