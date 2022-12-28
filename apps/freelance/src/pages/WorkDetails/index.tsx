import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
	ThemeColors,
	ThemeBackground,
	StyledPage,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { useGetJobIdQuery } from "src/redux/jobs/jobs.api";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { SEARCH_WORK, SEND_PROPOSAL } from "utils/constants/breakpoint";
import { baseUrl } from "utils/constants/redux-query";
import { jobIds } from "utils/tests/testsIds/jobDetailsIds";
import {
	ContainerBox,
	CardContainer,
	Item,
	ButtonWrapper,
	Title,
	Box,
	ItemContainer,
	LeftSide,
	RightSide,
	Bottom,
	Wrapper,
} from "./styles";

export function WorkDetails() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const params = useParams();
	const id = String(params["id"]);
	const { data } = useGetJobIdQuery(id);
	const { data: freelancerData } = useGetFreelancerQuery();

	const isProposal = freelancerData?.proposals
		.map(proposal => {
			return data?.proposals.find(item => item.id === proposal.id);
		})
		.some(item => item !== undefined);

	const handleClickProposal = () => {
		navigate(SEND_PROPOSAL + "/" + id);
	};

	const handleClickBack = () => {
		navigate(SEARCH_WORK);
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<CardContainer>
					<Box>
						<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
							{t("jobDetails.title")}
						</StyledTitle>
						<Wrapper>
							<img
								data-testid={jobIds.img}
								src={baseUrl + "/" + data?.employer.image}
								alt="User Avatar"
							/>
							<div>
								<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
									{data?.employer.companyName}
								</StyledTitle>
								<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
									{`${data?.employer.fullName}, ${data?.employer.position}`}
								</StyledTitle>
							</div>
						</Wrapper>
					</Box>

					<ContainerBox>
						<ItemContainer>
							<LeftSide>
								<Item>
									<Title id="country">
										<strong>{t("newJobPosting.secondForm.positionLabel")}</strong>
									</Title>
									<p data-testid={jobIds.position}>{data?.position}</p>
								</Item>
								<Item>
									<Title id="category">
										<strong>{t("newJobPosting.secondForm.employmentTypeLabel")}</strong>
									</Title>
									<p data-testid={jobIds.employmentType}>{data?.employmentType}</p>
								</Item>
								<Item>
									<Title id="position">
										<strong>{t("jobDetails.date")}</strong>
									</Title>
									<p data-testid={jobIds.createdDate}>{data?.createdDate}</p>
								</Item>
								<Item>
									<Title id="employment">
										<strong>{t("jobDetails.duration")}</strong>
									</Title>
									<p data-testid={jobIds.availableAmountOfHours}>{data?.availableAmountOfHours}</p>
								</Item>
							</LeftSide>
							<RightSide>
								<Item>
									<Title id="workExperience">
										<strong>{t("jobDetails.salary")}</strong>
									</Title>
									<p data-testid={jobIds.hourRate}>{data?.hourRate}</p>
								</Item>

								<Item>
									<Title id="rateHour">
										<strong>{t("newJobPosting.thirdForm.englishLevelLabel")}</strong>
									</Title>
									<p data-testid={jobIds.englishLevel}>{data?.englishLevel}</p>
								</Item>
								<Item>
									<Title id="workingHour">
										<strong>{t("jobDetails.exp")}</strong>
									</Title>
									<p data-testid={jobIds.workExperience}>{data?.workExperience}</p>
								</Item>
								<Item>
									<Title id="skills">
										<strong>{t("jobDetails.skills")}</strong>
									</Title>
									<div className="skillsContainer">
										{data &&
											data?.skills.map(skill => {
												return (
													<p data-testid={jobIds.skills} key={skill.id}>
														{skill.name}
													</p>
												);
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
									<p data-testid={jobIds.description}>{data?.description}</p>
								</Item>
							</ItemContainer>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>{t("newJobPosting.thirdForm.otherRequirenmentsLabel")}</strong>
								</Title>
								<Item id="workHistory">
									<p data-testid={jobIds.otherRequirenments}>{data?.otherRequirenments}</p>
								</Item>
							</ItemContainer>
						</Bottom>
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
								onClick={handleClickProposal}
							>
								<strong>
									{t(isProposal ? "jobDetails.alreadySended" : "jobDetails.sendProposalBtn")}
								</strong>
							</StyledButton>
						</ButtonWrapper>
					</ContainerBox>
				</CardContainer>
			</StyledPage>
		</ThemeProvider>
	);
}

export default WorkDetails;
