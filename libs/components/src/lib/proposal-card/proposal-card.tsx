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
	Chat,
	CardModal,
	useChat,
} from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IChat } from "redux/chat/chatApi";
import { ROLES } from "utils/constants/roles";
import { baseUrl } from "utils/constants/redux-query";

export interface ProposalCardProps {
	id: string;
	coverLetter?: string;
	hourRate?: string;
	filePath?: string;
	createdDate?: string;
	freelancerId?: string;
	freelancerName?: string;
	freelancerImage?: string;
	employerId?: string;
	jobId?: string;
	jobChats?: IChat[];
	userType?: string;
}

export function ProposalCard({
	id,
	coverLetter,
	hourRate,
	filePath,
	createdDate,
	freelancerId,
	freelancerName,
	freelancerImage,
	employerId,
	jobId,
	jobChats,
	userType,
}: ProposalCardProps) {
	const { t } = useTranslation();
	const prettyDate = moment(createdDate).format("LL");
	const { openChat, closeChat, chatModalOpen, continueChat } = useChat({
		jobId,
		employerId,
		freelancerId,
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
							src={freelancerImage ? baseUrl + "/" + freelancerImage : DEFAULT_IMAGE}
							alt="User Avatar"
						/>
					</ImageContainer>
					<GridContainer>
						<CardTitleButton>{freelancerName}</CardTitleButton>
						<StyledParagraph fontSize="md">{hourRate}</StyledParagraph>
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
						<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
							<strong>{t("proposalCard.proposalDetails")}</strong>
						</StyledButton>
					</EmployerButtonWrapper>
				</GridContainer>
				<GridContainer justifyItems="center">
					<DateWrapper fontSize="md">
						<strong>{prettyDate}</strong>
					</DateWrapper>
				</GridContainer>
			</JobCardHeader>
			<CardModal open={chatModalOpen} onCancel={closeChat} width={800}>
				<Chat
					userType={userType!}
					userId={userType === ROLES.FREELANCER ? freelancerId : employerId}
				/>
			</CardModal>
		</StyledJobCard>
	);
}

export default ProposalCard;
