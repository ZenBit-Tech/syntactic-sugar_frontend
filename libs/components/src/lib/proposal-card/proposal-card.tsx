import { useTranslation } from "react-i18next";
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
} from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { useProposalCard } from "./proposal-cardHook";

export interface ProposalCardProps {
	id: string;
	coverLetter?: string;
	hourRate?: string;
	filePath?: string;
	createdDate?: string;
	freelancerId?: string;
	freelancerName?: string;
	freelancerImage?: string;
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

	return (
		<StyledJobCard>
			<JobCardHeader alignItems="center">
				<FlexContainer gap={10}>
					<ImageContainer proposalCard>
						<img
							src={freelancerImage ? baseUrl + freelancerImage : DEFAULT_IMAGE}
							alt="User Avatar"
						/>
					</ImageContainer>
					<GridContainer>
						<CardTitleButton onClick={openProfileModal}>{freelancerName}</CardTitleButton>
						<StyledParagraph fontSize="md">{hourRate}$</StyledParagraph>
					</GridContainer>
				</FlexContainer>
				<GridContainer gap={10}>
					<EmployerButtonWrapper>
						<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
							<strong>{t("proposalCard.startChat")}</strong>
						</StyledButton>
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

			<CardModal open={isProfileOpen} onCancel={closeProfileModal}>
				<h1>View Freelancer Profile</h1>
			</CardModal>
			<CardModal open={isLetterOpen} onCancel={closeLetterModal} width={1000}>
				<Container modal proposalsList>
					<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
						{t("proposalCard.coverLetter")}
					</StyledTitle>
					<StyledParagraph fontSize="md">{coverLetter}</StyledParagraph>
				</Container>
			</CardModal>
		</StyledJobCard>
	);
}

export default ProposalCard;
