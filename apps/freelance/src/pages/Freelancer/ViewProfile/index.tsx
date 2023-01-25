import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ThemeColors, ThemeBackground, Dashboard, StyledButton } from "@freelance/components";
import { RootState } from "src/redux/store";
import { Freelancer } from "src/redux/createFreelancer/freelancer-slice";
import { CREATE_PROFILE_2 } from "utils/constants/breakpoint";
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

export function ViewProfile() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const {
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
	} = useSelector<RootState, Freelancer>(state => state.freelancer);

	const handleClick = () => {
		navigate(CREATE_PROFILE_2);
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="freelancer" typePage="createProfile">
					<Container>
						<ItemContainer>
							<LeftSide>
								<Item>
									<Title id="country">
										<strong>{t("freelancer.createProfile.selectOption.country")}</strong>
									</Title>
									<p>{country}</p>
								</Item>
								<Item>
									<Title id="category">
										<strong>{t("freelancer.createProfile.selectOption.category")}</strong>
									</Title>
									<p>{category}</p>
								</Item>
								<Item>
									<Title id="position">
										<strong>{t("freelancer.createProfile.positionPlaceholder")}</strong>
									</Title>
									<p>{position}</p>
								</Item>
								<Item>
									<Title id="employment">
										<strong>{t("freelancer.viewProfile.employmentType")}</strong>
									</Title>
									<p>{employmentType}</p>
								</Item>
								<Item>
									<Title id="englishLevel">
										<strong>{t("freelancer.createProfile.selectOption.englishLevel")}</strong>
									</Title>
									<p>{englishLevel}</p>
								</Item>
							</LeftSide>
							<RightSide>
								<Item>
									<Title id="workExperience">
										<strong>{t("freelancer.createProfile.selectOption.workExperience")}</strong>
									</Title>
									<p>{workExperience}</p>
								</Item>

								<Item>
									<Title id="rateHour">
										<strong>{t("freelancer.viewProfile.hourRate")}</strong>
									</Title>
									<p>{hourRate}</p>
								</Item>
								<Item>
									<Title id="workingHour">
										<strong>{t("freelancer.viewProfile.workingHours")}</strong>
									</Title>
									<p>{availableAmountOfHours}</p>
								</Item>
								<Item>
									<Title id="skills">
										<strong>{t("freelancer.createProfile.selectOption.skills")}</strong>
									</Title>
									<p>{skills.join(", ")}</p>
								</Item>
								<Item>
									<Title id="rateHour">
										<strong>{t("freelancer.createProfile.otherExperienceLabel")}</strong>
									</Title>
									<p>{otherExperience}</p>
								</Item>
							</RightSide>
						</ItemContainer>
						<Bottom>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>{t("freelancer.viewProfile.workHistory")}</strong>
								</Title>
								<Subcontainer>
									<Item id="workHistory">
										<Subtitle>{t("freelancer.createProfile.companyPlaceholder")}</Subtitle>
										{workHistory.map(item => (
											<p>{item.company}</p>
										))}
									</Item>
									<Item id="workHistory">
										<Subtitle>{t("freelancer.createProfile.positionPlaceholder")}</Subtitle>
										{workHistory.map(item => (
											<p>{item.workPosition}</p>
										))}
									</Item>
									<Item id="workHistory">
										<Subtitle>{t("freelancer.createProfile.periodPlaceholder")}</Subtitle>
										{workHistory.map(item => (
											<p>{item.period}</p>
										))}
									</Item>
								</Subcontainer>
							</ItemContainer>
							<ItemContainer id="workHistory">
								<Title id="workHistory">
									<strong>{t("freelancer.createProfile.educationLabel")}</strong>
								</Title>
								<Subcontainer>
									<Item id="workHistory">
										<Subtitle>{t("freelancer.createProfile.institutePlaceholder")}</Subtitle>
										{education.map(item => (
											<p>{item.institute}</p>
										))}
									</Item>
									<Item id="workHistory">
										<Subtitle>{t("freelancer.createProfile.occupationPlaceholder")}</Subtitle>
										{education.map(item => (
											<p>{item.occupation}</p>
										))}
									</Item>
									<Item id="workHistory">
										<Subtitle>{t("freelancer.createProfile.periodPlaceholder")}</Subtitle>
										{education.map(item => (
											<p>{item.period}</p>
										))}
									</Item>
								</Subcontainer>
							</ItemContainer>
						</Bottom>
						<StyledButton
							type="button"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={handleClick}
						>
							<strong>{t("freelancer.createProfile.backBtn")}</strong>
						</StyledButton>
					</Container>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default ViewProfile;
