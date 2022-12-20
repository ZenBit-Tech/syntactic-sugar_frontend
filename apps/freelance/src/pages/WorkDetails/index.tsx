import { useEffect } from "react";
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
import { SEARCH_WORK, SEND_PROPOSAL } from "utils/constants/breakpoint";
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
	const id = Number(params["id"]);
	const { data } = useGetJobIdQuery(id);

	useEffect(() => {
		if (id === null && data === undefined) {
			return;
		}
	}, [id, data]);

	const handleClickProposal = () => {
		navigate(SEND_PROPOSAL);
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
							<img src="/assets/images/user_avatar.png" alt="User Avatar" />
							<div>
								<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
									{t("employer.create.companyNameLabel")}
								</StyledTitle>
								<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
									{`${t("employer.create.fullNameLabel")}, ${t("employer.create.positionLabel")}`}
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
									<p></p>
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
									<p></p>
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
								buttonColor="redGradient"
								buttonSize="sm"
								fontSize="md"
								onClick={handleClickProposal}
							>
								<strong>{t("jobDetails.sendProposalBtn")}</strong>
							</StyledButton>
						</ButtonWrapper>
					</ContainerBox>
				</CardContainer>
			</StyledPage>
		</ThemeProvider>
	);
}

export default WorkDetails;
