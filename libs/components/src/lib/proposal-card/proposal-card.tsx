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
	ViewFreelancerProfile,
} from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { useProposalCard } from "./proposal-cardHook";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";

export interface ProposalCardProps {
	id: string;
	coverLetter?: string;
	hourRate?: string;
	filePath?: string;
	createdDate?: string;
	freelancer?: IResponse;
}

export function ProposalCard({
	id,
	coverLetter,
	hourRate,
	filePath,
	createdDate,
	freelancer,
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
