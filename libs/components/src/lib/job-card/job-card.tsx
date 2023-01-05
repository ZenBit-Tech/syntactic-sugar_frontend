import { useTranslation } from "react-i18next";
import moment from "moment";
import {
	GridContainer,
	// ParagraphWrapper,
	// GridItem,
	ImageContainer,
	FlexContainer,
	StyledButton,
	StyledParagraph,
	CardModal,
	SendProposal,
	CreateProposalonJob,
	EditJobForm,
	StyledJobCard,
	// StyledJobCardHeader,
	StyledJobCardParagraph,
	CountriesContainer,
	LocationBlock,
	CardTitleButton,
	JobCardHeader,
	JobButtonContainer,
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
	position: string;
	hourRate: string;
	employerImg: string;
	employerName: string;
	employerCompany: string;
	employerPosition: string;
	title: string;
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
	levelEnglish,
	createdDate,
	userType,
	typePage,
	isPublished,
}: JobCardProps) {
	const { t } = useTranslation();
	const { data } = useGetFreelancerQuery();
	const prettyDate = moment(createdDate).format("LL");
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

	const isProposal = data?.proposals
		.map(proposal => {
			return proposals.find(item => item.id === proposal.id);
		})
		.some(item => item !== undefined);

	return (
		<StyledJobCard>
			<JobCardHeader>
				<GridContainer>
					<FlexContainer>
						<CardTitleButton onClick={openCreateProposal}>{position}</CardTitleButton>
						<StyledParagraph fontSize="md">{hourRate}</StyledParagraph>
					</FlexContainer>
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
					<StyledParagraph fontSize="lg">{title}</StyledParagraph>
				</GridContainer>
				<strong>{prettyDate}</strong>
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
					<JobButtonContainer>
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
					</JobButtonContainer>
				)}
			</JobCardHeader>
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
			<CardModal open={isModalEditJob} onCancel={closeModalEditJob} width={1000}>
				<EditJobForm jobId={jobId} />
			</CardModal>
		</StyledJobCard>
	);
}

export default JobCard;
