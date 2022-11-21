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
						<input type="text" name="fullName" placeholder="Full Name" />
						<select name="country">
							<option value="" disabled selected hidden>
								Country
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<select name="category">
							<option value="" disabled selected hidden>
								Category
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<select name="hour">
							<option value="" disabled selected hidden>
								Hour rate (one price)
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<input type="text" name="position" placeholder="Position" />
						<select name="amountHours">
							<option value="" disabled selected hidden>
								Available amount of hours
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<select name="skills">
							<option value="" disabled selected hidden>
								Skills
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<select name="worksExperience">
							<option value="" disabled selected hidden>
								Work experience
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<select name="employmentType">
							<option value="" disabled selected hidden>
								Employment type
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<select name="englishLevel">
							<option value="" disabled selected hidden>
								English Level
							</option>
							<option value="1">Test 1</option>
							<option value="2">Test 2</option>
							<option value="3">Test 3</option>
						</select>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="md">
							CONTINUE
						</StyledButton>
					</Form>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default FreelancerPage;
