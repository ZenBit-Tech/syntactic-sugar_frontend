import { useTranslation } from "react-i18next";
import { StyledPage, Form } from "./freelancer-profile-page.styled";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FreelancerPageProps {}

export function FreelancerPage(props: FreelancerPageProps) {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="freelancer">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Form>
						<input
							id="fullName"
							type="text"
							name="fullName"
							placeholder={t("freelancer.createProfile.fullNamePlaceholder")}
							required
						/>
						<div className="selectContainer">
							<select id="country" name="country" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.country")}
								</option>
								<option value="country1">
									{t("freelancer.createProfile.selectOption.country")}
								</option>
								<option value="country2">
									{t("freelancer.createProfile.selectOption.country")}
								</option>
								<option value="country3">
									{t("freelancer.createProfile.selectOption.country")}
								</option>
							</select>
						</div>
						<div className="selectContainer">
							<select id="category" name="category" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.category")}
								</option>
								<option value="category1">
									{t("freelancer.createProfile.selectOption.category")}
								</option>
								<option value="category2">
									{t("freelancer.createProfile.selectOption.category")}
								</option>
								<option value="category3">
									{t("freelancer.createProfile.selectOption.category")}
								</option>
							</select>
						</div>
						<div className="selectContainer">
							<select id="hourRate" name="hourRate" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.hourRate")}
								</option>
								<option value="hourRate1">
									{t("freelancer.createProfile.selectOption.hourRate")}
								</option>
								<option value="hourRate2">
									{t("freelancer.createProfile.selectOption.hourRate")}
								</option>
								<option value="hourRate3">
									{t("freelancer.createProfile.selectOption.hourRate")}
								</option>
							</select>
						</div>
						<input
							id="position"
							type="text"
							name="position"
							placeholder={t("freelancer.createProfile.positionPlaceholder")}
							required
						/>
						<div className="selectContainer">
							<select id="amountHours" name="amountHours" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.amountHours")}
								</option>
								<option value="amountHours1">
									{t("freelancer.createProfile.selectOption.amountHours")}
								</option>
								<option value="amountHours2">
									{t("freelancer.createProfile.selectOption.amountHours")}
								</option>
								<option value="amountHours3">
									{t("freelancer.createProfile.selectOption.amountHours")}
								</option>
							</select>
						</div>
						<div className="selectContainer">
							<select id="skills" name="skills" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.skills")}
								</option>
								<option value="skill1">{t("freelancer.createProfile.selectOption.skills")}</option>
								<option value="skill2">{t("freelancer.createProfile.selectOption.skills")}</option>
								<option value="skill3">{t("freelancer.createProfile.selectOption.skills")}</option>
							</select>
						</div>
						<div className="selectContainer">
							<select id="workExperience" name="workExperience" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.workExperience")}
								</option>
								<option value="workExperience1">
									{t("freelancer.createProfile.selectOption.workExperience")}
								</option>
								<option value="workExperience2">
									{t("freelancer.createProfile.selectOption.workExperience")}
								</option>
								<option value="workExperience3">
									{t("freelancer.createProfile.selectOption.workExperience")}
								</option>
							</select>
						</div>
						<div className="selectContainer">
							<select id="employmentType" name="employmentType" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.employmentType")}
								</option>
								<option value="employmentType1">
									{t("freelancer.createProfile.selectOption.employmentType")}
								</option>
								<option value="employmentType2">
									{t("freelancer.createProfile.selectOption.employmentType")}
								</option>
								<option value="employmentType3">
									{t("freelancer.createProfile.selectOption.employmentType")}
								</option>
							</select>
						</div>
						<div className="selectContainer">
							<select id="englishLevel" name="englishLevel" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.englishLevel")}
								</option>
								<option value="englishLevel1">
									{t("freelancer.createProfile.selectOption.englishLevel")}
								</option>
								<option value="englishLevel2">
									{t("freelancer.createProfile.selectOption.englishLevel")}
								</option>
								<option value="englishLevel3">
									{t("freelancer.createProfile.selectOption.englishLevel")}
								</option>
							</select>
						</div>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="md">
							{t("recoverPassForm.buttonContinue")}
						</StyledButton>
					</Form>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default FreelancerPage;
