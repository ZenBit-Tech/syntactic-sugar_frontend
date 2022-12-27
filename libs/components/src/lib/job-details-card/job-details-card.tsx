import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { JOBS_PAGE} from "utils/constants/breakpoint";
import { baseUrl } from "utils/constants/redux-query";
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
} from "./job-details-card.styled";
import { useGetJobIdQuery } from "redux/jobs";

export interface JobDetailsCardProps {
	typePage?: 'proposals' | 'jobs';
	id: string;
	openSendProposalModal: () => void;
}

export function JobDetailsCard({typePage, id, openSendProposalModal}: JobDetailsCardProps) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { data } = useGetJobIdQuery(id);
	const { data: freelancerData } = useGetFreelancerQuery();

  	const isProposal = freelancerData?.proposals
		.map(proposal => {
			return data?.proposals.find(item => item.id === proposal.id);
		})
		.some(item => item !== undefined);

	const handleClickBack = () => {
		// navigate(SEARCH_WORK);
	};

	return (
		<>
			<Box>
				<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
					{t("jobDetails.title")}
				</StyledTitle>
				<Wrapper>
					<img src={baseUrl + "/" + data?.employer.image} alt="User Avatar" />
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
							<p>{data?.createdDate}</p>
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
							<p>{data?.description}</p>
						</Item>
					</ItemContainer>
					<ItemContainer id="workHistory">
						<Title id="workHistory">
							<strong>{t("newJobPosting.thirdForm.otherRequirenmentsLabel")}</strong>
						</Title>
						<Item id="workHistory">
							<p>{data?.otherRequirenments}</p>
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
							onClick={handleClickBack}
						>
							<strong>{t("freelancer.createProfile.backBtn")}</strong>
						</StyledButton>
						<StyledButton
							type="button"
							disabled={isProposal ? true : false}
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={openSendProposalModal}
						>
							<strong>
								{t(isProposal ? "jobDetails.alreadySended" : "jobDetails.sendProposalBtn")}
							</strong>
						</StyledButton>
					</ButtonWrapper>
				)}
					
			</ContainerBox>
		</>			
	);
}

export default JobDetailsCard;
