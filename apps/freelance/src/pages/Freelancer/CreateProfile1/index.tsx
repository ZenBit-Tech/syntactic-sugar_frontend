import { useTranslation } from "react-i18next";
import { StyledPage, Form } from "./style";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";
import countries from "utils/select-options/eu-countries.json";
import categories from "utils/select-options/categories.json";
import hourRate from "utils/select-options/hour-rate.json";
import workHours from "utils/select-options/hours-amount.json";
import skills from "utils/select-options/skills.json";
import workExperience from "utils/select-options/work-experience.json";
import employmentType from "utils/select-options/employment-type.json";
import englishLevel from "utils/select-options/english-level.json";

export function CreateProfile1() {
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
								{countries.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<div className="selectContainer">
							<select id="category" name="category" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.category")}
								</option>
								{categories.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<div className="selectContainer">
							<select id="hourRate" name="hourRate" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.hourRate")}
								</option>
								{hourRate.map(({ name }) => {
									return <option>{name}</option>;
								})}
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
								{workHours.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<div className="selectContainer">
							<select id="skills" name="skills" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.skills")}
								</option>
								{skills.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<div className="selectContainer">
							<select id="workExperience" name="workExperience" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.workExperience")}
								</option>
								{workExperience.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<div className="selectContainer">
							<select id="employmentType" name="employmentType" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.employmentType")}
								</option>
								{employmentType.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<div className="selectContainer">
							<select id="englishLevel" name="englishLevel" required>
								<option value="" disabled selected hidden>
									{t("freelancer.createProfile.selectOption.englishLevel")}
								</option>
								{englishLevel.map(({ name }) => {
									return <option>{name}</option>;
								})}
							</select>
						</div>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("recoverPassForm.buttonContinue")}</strong>
						</StyledButton>
					</Form>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default CreateProfile1;
