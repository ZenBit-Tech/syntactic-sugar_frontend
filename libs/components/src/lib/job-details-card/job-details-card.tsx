import { useTranslation } from "react-i18next";
import moment from "moment";
import {
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { JOBS_PAGE} from "utils/constants/breakpoint";
import { baseUrl } from "utils/constants/redux-query";
import { useGetJobIdQuery } from "redux/jobs";
import { DEFAULT_IMAGE } from "utils/constants/links";
import {
	ContainerBox,
	Item,
	ButtonWrapper,
	Title,
	Box,
	ItemContainer,
	LeftSide,
	RightSide,
	Bottom,
	Wrapper,
	BottomText,
} from "./job-details-card.styled";

export interface JobDetailsCardProps {
	typePage?: 'proposals' | 'jobs';
	id: string;
	openCreateProposal: () => void;
	onBack: () => void;
	isProposal?: boolean;
}

export function JobDetailsCard({typePage, id, openCreateProposal, onBack, isProposal}: JobDetailsCardProps) {
	const { t } = useTranslation();
	const { data } = useGetJobIdQuery(id);

	return (
		<>
			<Box>
				<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
					{t("jobDetails.title")}
				</StyledTitle>
				<Wrapper>
					<img src={data?.employer.image ? baseUrl + data?.employer.image : DEFAULT_IMAGE} alt="User Avatar" />
					<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
						{data?.employer.companyName}
					</StyledTitle>
					<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
						{`${data?.employer.fullName}, ${data?.employer.position}`}
					</StyledTitle>
				</Wrapper>
			</Box>
			<ContainerBox>
				<ItemContainer>
					<LeftSide>
						<Item>
							<Title id="country">
								<strong>{t("newJobPosting.secondForm.positionLabel")}</strong>
							</Title>
							<p>{data?.position}</p>
						</Item>
						<Item>
							<Title id="category">
								<strong>{t("newJobPosting.secondForm.employmentTypeLabel")}</strong>
							</Title>
							<p>{data?.employmentType}</p>
						</Item>
						<Item>
							<Title id="position">
								<strong>{t("jobDetails.date")}</strong>
							</Title>
							<p>{moment(data?.createdDate).format('ll')}</p>
						</Item>
						<Item>
							<Title id="employment">
								<strong>{t("jobDetails.duration")}</strong>
							</Title>
							<p>{data?.availableAmountOfHours}</p>
						</Item>
					</LeftSide>
					<RightSide>
						<Item>
							<Title id="workExperience">
								<strong>{t("jobDetails.salary")}</strong>
							</Title>
							<p>{data?.hourRate}</p>
						</Item>

						<Item>
							<Title id="rateHour">
								<strong>{t("newJobPosting.thirdForm.englishLevelLabel")}</strong>
							</Title>
							<p>{data?.englishLevel}</p>
						</Item>
						<Item>
							<Title id="workingHour">
								<strong>{t("jobDetails.exp")}</strong>
							</Title>
							<p>{data?.workExperience}</p>
						</Item>
						<Item>
							<Title id="skills">
								<strong>{t("jobDetails.skills")}</strong>
							</Title>
							<div className="skillsContainer">
								{data &&
									data?.skills.map(skill => {
										return <p key={skill.id}>{skill.name}</p>;
									})}
							</div>
						</Item>
					</RightSide>
				</ItemContainer>
				<Bottom>
					<ItemContainer id="workHistory">
						<Title id="workHistory">
							<strong>{t("newJobPosting.firstForm.descriptionLabel")}</strong>
						</Title>
						<Item id="workHistory">
							<BottomText>{data?.description}</BottomText>
						</Item>
					</ItemContainer>
					<ItemContainer id="workHistory">
						<Title id="workHistory">
							<strong>{t("newJobPosting.thirdForm.otherRequirenmentsLabel")}</strong>
						</Title>
						<Item id="workHistory">
							<BottomText>{data?.otherRequirenments}</BottomText>
						</Item>
					</ItemContainer>
				</Bottom>
				{typePage === JOBS_PAGE && (
					<ButtonWrapper>
						<StyledButton
							type="button"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={onBack}
						>
							<strong>{t("freelancer.createProfile.backBtn")}</strong>
						</StyledButton>
						<StyledButton
							type="button"
							disabled={isProposal}
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={openCreateProposal}
						>
							<strong>
								{t(isProposal ? "jobDetails.alreadySended" : "jobDetails.createProposalBtn")}
							</strong>
						</StyledButton>
					</ButtonWrapper>
				)}	
			</ContainerBox>
		</>			
	);
}

export default JobDetailsCard;
