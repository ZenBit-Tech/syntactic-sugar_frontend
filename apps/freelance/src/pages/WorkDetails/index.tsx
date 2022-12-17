import { useTranslation } from "react-i18next";
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

export function WorkDetails() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<CardContainer>
					<Box>
						<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
							Job details
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
									<p>Full stack Developer</p>
								</Item>
								<Item>
									<Title id="category">
										<strong>{t("newJobPosting.secondForm.employmentTypeLabel")}</strong>
									</Title>
									<p>Remote</p>
								</Item>
								<Item>
									<Title id="position">
										<strong>{t("jobDetails.date")}</strong>
									</Title>
									<p>date</p>
								</Item>
								<Item>
									<Title id="employment">
										<strong>{t("jobDetails.duration")}</strong>
									</Title>
									<p>Part time</p>
								</Item>
							</LeftSide>
							<RightSide>
								<Item>
									<Title id="workExperience">
										<strong>{t("jobDetails.salary")}</strong>
									</Title>
									<p>3500$</p>
								</Item>

								<Item>
									<Title id="rateHour">
										<strong>{t("newJobPosting.thirdForm.englishLevelLabel")}</strong>
									</Title>
									<p>Upper interm</p>
								</Item>
								<Item>
									<Title id="workingHour">
										<strong>{t("jobDetails.exp")}</strong>
									</Title>
									<p>2 years</p>
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
							<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
								<strong>{t("freelancer.createProfile.backBtn")}</strong>
							</StyledButton>
							<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
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
