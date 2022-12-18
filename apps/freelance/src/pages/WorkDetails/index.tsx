import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
	ThemeColors,
	ThemeBackground,
	StyledPage,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { RootState } from "src/redux/store";

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
	Subcontainer,
	Wrapper,
} from "./styles";
import { SEARCH_WORK, SEND_PROPOSAL } from "src/utils/constants/breakpoint";
import { JobsInterface } from "src/redux/jobs/jobs.api";

export function WorkDetails() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	// const data = useSelector<RootState, JobsInterface>(state => state.jobs);

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
									ZenBit
								</StyledTitle>
								<StyledTitle tag="h3" fontSize="md" fontWeight={500}>
									Iryna Trus, HR
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
									<p></p>
								</Item>
								<Item>
									<Title id="category">
										<strong>{t("newJobPosting.secondForm.employmentTypeLabel")}</strong>
									</Title>
									<p></p>
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
									<p></p>
								</Item>
							</LeftSide>
							<RightSide>
								<Item>
									<Title id="workExperience">
										<strong>{t("jobDetails.salary")}</strong>
									</Title>
									<p></p>
								</Item>

								<Item>
									<Title id="rateHour">
										<strong>{t("newJobPosting.thirdForm.englishLevelLabel")}</strong>
									</Title>
									<p></p>
								</Item>
								<Item>
									<Title id="workingHour">
										<strong>{t("jobDetails.exp")}</strong>
									</Title>
									<p></p>
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
								<Subcontainer>
									<Item id="workHistory">
										<p></p>
									</Item>
								</Subcontainer>
							</ItemContainer>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>{t("newJobPosting.thirdForm.otherRequirenmentsLabel")}</strong>
								</Title>
								<Item id="workHistory">
									<p></p>
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
