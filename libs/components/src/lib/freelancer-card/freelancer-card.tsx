import { useTranslation } from "react-i18next";
import moment from "moment";
import {
	CardTitleButton,
	StyledButton,
	StyledParagraph,
	JobCardHeader,
	ImageContainer,
	GridContainer,
	DateWrapper,
	EmployerButtonWrapper,
	CardModal,
	StyledTitle,
	ViewFreelancerProfile,
	InvitationCard,
} from "@freelance/components";
import { IEduResponse, IWorkHistoryResponse } from "redux/createFreelancer/freelancer-pageApi";
import { InstObject, Proposal } from "redux/jobs";
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import {
	StyledFreelancersCard,
	FreelancerStyledParagraph,
	Wrapper,
	WrapperContainer,
	ParagraphWrapper,
	TitleBox,
} from "./freelancer-card.styled";
import { useFreelancerCard } from "./freelancer-cardHook";

export interface FreelancerCardProps {
	id: string;
	fullName?: string;
	category?: InstObject;
	position?: string;
	skills?: InstObject[];
	employmentType?: string;
	country?: InstObject;
	hourRate?: string;
	availableAmountOfHours?: string;
	workExperience?: string;
	englishLevel?: string;
	education?: IEduResponse[];
	workHistory?: IWorkHistoryResponse[];
	otherExperience?: string;
	isPublished?: boolean;
	createdDate?: string;
	updatedDate?: string;
	image?: string;
	proposals?: Proposal[];
	user?: { id: number; email: string };
	profile?: IResponse | IResponseEmployer;
}

export function FreelancerCard({
	id,
	fullName,
	category,
	position,
	skills,
	employmentType,
	country,
	hourRate,
	availableAmountOfHours,
	workExperience,
	englishLevel,
	education,
	workHistory,
	otherExperience,
	createdDate,
	image,
}: FreelancerCardProps) {
	const { t } = useTranslation();
	const prettyDate = moment(createdDate).format("LL");
	const {
		openFreelancerProfile,
		closeFreelancerProfile,
		freelancerProfileModalOpen,
		openInvitationModal,
		closeInvitationModal,
		invitationModalOpen,
	} = useFreelancerCard();

	return (
		<StyledFreelancersCard>
			<JobCardHeader>
				<WrapperContainer>
					<ImageContainer proposalCard>
						<img src={image ? baseUrl + image : DEFAULT_IMAGE} alt="User Avatar" />
					</ImageContainer>
					<Wrapper>
						<TitleBox>
							<CardTitleButton onClick={openFreelancerProfile}>{`${fullName}`}</CardTitleButton>
							<StyledParagraph fontSize="md">{hourRate}</StyledParagraph>
						</TitleBox>
						<StyledParagraph fontSize="md" opacity={0.7}>
							<strong>{position}</strong>
						</StyledParagraph>
					</Wrapper>
				</WrapperContainer>
				<GridContainer gap={10} alignItems="center">
					<EmployerButtonWrapper>
						<StyledButton
							buttonSize="lg"
							buttonColor="lightRed"
							fontSize="md"
							onClick={openInvitationModal}
						>
							{t("talents.inv")}
						</StyledButton>
					</EmployerButtonWrapper>
				</GridContainer>
				<GridContainer justifyItems="center" alignItems="center">
					<DateWrapper fontSize="md">
						<strong>{prettyDate}</strong>
					</DateWrapper>
				</GridContainer>
			</JobCardHeader>
			<FreelancerStyledParagraph>
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{country?.name}
					</StyledParagraph>
				</ParagraphWrapper>
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{employmentType}
					</StyledParagraph>
				</ParagraphWrapper>
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{workExperience}
					</StyledParagraph>
				</ParagraphWrapper>
				{skills &&
					skills.map(skill => (
						<ParagraphWrapper key={skill.id}>
							<StyledParagraph fontSize="md" opacity={0.7}>
								{skill.name}
							</StyledParagraph>
						</ParagraphWrapper>
					))}
				<ParagraphWrapper>
					<StyledParagraph fontSize="md" opacity={0.7}>
						{englishLevel}
					</StyledParagraph>
				</ParagraphWrapper>
			</FreelancerStyledParagraph>

			{/* Modals */}

			<CardModal open={freelancerProfileModalOpen} onCancel={closeFreelancerProfile} width={1000}>
				<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
					{t("proposalCard.freelancerProfile")}
				</StyledTitle>
				<ViewFreelancerProfile
					fullName={fullName}
					category={category}
					country={country}
					position={position}
					employmentType={employmentType}
					englishLevel={englishLevel}
					workExperience={workExperience}
					hourRate={hourRate}
					availableAmountOfHours={availableAmountOfHours}
					skills={skills}
					workHistory={workHistory}
					education={education}
					otherExperience={otherExperience}
				/>
			</CardModal>
			<CardModal open={invitationModalOpen} onCancel={closeInvitationModal} width={700}>
				<InvitationCard freelancer_id={id} onCancel={closeInvitationModal}></InvitationCard>
			</CardModal>
		</StyledFreelancersCard>
	);
}

export default FreelancerCard;
