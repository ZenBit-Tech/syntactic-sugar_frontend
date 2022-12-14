import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
	StyledParagraph,
} from "@freelance/components";
import { RootState } from "src/redux/store";

import {
	StyledPage,
	ContainerBox,
	Container,
	Item,
	ButtonWrapper,
	ImageWrapper,
	Title,
	Box,
	ItemContainer,
	LeftSide,
	RightSide,
	Bottom,
	Subtitle,
	Subcontainer,
	Wrapper,
} from "./styles";

export function WorkDetails() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Container>
					{/* <Dashboard userRole="guest"> */}
					<Box>
						<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
							Job details
						</StyledTitle>
						<Wrapper>
							{/* <ImageWrapper> */}
							<img src="/assets/images/user_avatar.png" alt="User Avatar" />
							{/* </ImageWrapper> */}
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
										<strong>Position</strong>
									</Title>
									<p>Full stack Developer</p>
								</Item>
								<Item>
									<Title id="category">
										<strong>Employment type</strong>
									</Title>
									<p>Remote</p>
								</Item>
								<Item>
									<Title id="position">
										<strong>Date</strong>
									</Title>
									<p>date</p>
								</Item>
								<Item>
									<Title id="employment">
										<strong>Duration</strong>
									</Title>
									<p>Part time</p>
								</Item>
							</LeftSide>
							<RightSide>
								<Item>
									<Title id="workExperience">
										<strong>Salary</strong>
									</Title>
									<p>3500$</p>
								</Item>

								<Item>
									<Title id="rateHour">
										<strong>English level</strong>
									</Title>
									<p>Upper interm</p>
								</Item>
								<Item>
									<Title id="workingHour">
										<strong>Experience</strong>
									</Title>
									<p>2 years</p>
								</Item>
								<Item>
									<Title id="skills">
										<strong>Skills required</strong>
									</Title>
									<p></p>
								</Item>
							</RightSide>
						</ItemContainer>
						<Bottom>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>Description</strong>
								</Title>
								<Subcontainer>
									<Item id="workHistory">
										<p></p>
									</Item>
								</Subcontainer>
							</ItemContainer>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>Other requirenments</strong>
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
								<strong>SEND PROPOSAL</strong>
							</StyledButton>
						</ButtonWrapper>
					</ContainerBox>
					{/* </Dashboard> */}
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default WorkDetails;
