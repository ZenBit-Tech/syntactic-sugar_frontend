import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
	StyledPage,
	Container,
	Item,
	Title,
	ItemContainer,
	LeftSide,
	RightSide,
	Bottom,
	Subtitle,
	Subcontainer,
} from "./style";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";

export function ViewProfile() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="guest">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Container>
						<ItemContainer>
							<LeftSide>
								<Item>
									<Title id="country">
										<strong>Country</strong>
									</Title>
									<p>Brazil</p>
								</Item>
								<Item>
									<Title id="category">
										<strong>Category</strong>
									</Title>
									<p>IT, computers & Internet </p>
								</Item>
								<Item>
									<Title id="position">
										<strong>Position</strong>
									</Title>
									<p>Full Stack Developer</p>
								</Item>
								<Item>
									<Title id="employment">
										<strong>Employment</strong>
									</Title>
									<p>Remote</p>
								</Item>
								<Item>
									<Title id="englishLevel">
										<strong>English Level</strong>
									</Title>
									<p>Upper-intermediate</p>
								</Item>
							</LeftSide>
							<RightSide>
								<Item>
									<Title id="workExperience">
										<strong>Work Experience</strong>
									</Title>
									<p>More than 5 years</p>
								</Item>

								<Item>
									<Title id="rateHour">
										<strong>Rate Hour</strong>
									</Title>
									<p>From 1000$</p>
								</Item>
								<Item>
									<Title id="workingHour">
										<strong>Working Hour</strong>
									</Title>
									<p>Full Time</p>
								</Item>
								<Item>
									<Title id="skills">
										<strong>Skills</strong>
									</Title>
									<p>
										.NET, Python, PHP, Node.js, iOS Android JavaScript / Front-End, Java, Front-End,
										Java, Front-End, Java,Front-End, Java,Front-End, Java,Front-End, Java,
									</p>
								</Item>
							</RightSide>
						</ItemContainer>
						<Bottom>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>Work History</strong>
								</Title>
								<Subcontainer>
									<Item id="workHistory">
										<Subtitle>Company</Subtitle>
										<p>Developer Company</p>
									</Item>
									<Item id="workHistory">
										<Subtitle>Position</Subtitle>
										<p>FullStack Developer</p>
									</Item>
									<Item id="workHistory">
										<Subtitle>Period</Subtitle>
										<p>3 years</p>
									</Item>
								</Subcontainer>
							</ItemContainer>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>Education</strong>
								</Title>
								<Subcontainer>
									<Item id="workHistory">
										<Subtitle>Institute</Subtitle>
										<p>University of DevOps</p>
									</Item>
									<Item id="workHistory">
										<Subtitle>Ocuppation</Subtitle>
										<p>DevOp</p>
									</Item>
									<Item id="workHistory">
										<Subtitle>Period</Subtitle>
										<p>10 years</p>
									</Item>
								</Subcontainer>
							</ItemContainer>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>Other Experience</strong>
								</Title>
								<Subcontainer>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt culpa
										nesciunt ex quod veritatis aliquid doloribus mollitia expedita? Quas soluta
										officiis quo enim doloribus consequuntur animi, quia architecto omnis. Lorem,
										ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt culpa nesciunt
										ex quod veritatis aliquid doloribus mollitia expedita? Quas soluta officiis quo
										enim doloribus consequuntur animi, quia architecto omnis.
									</p>
								</Subcontainer>
							</ItemContainer>
						</Bottom>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>BACK</strong>
						</StyledButton>
					</Container>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default ViewProfile;
