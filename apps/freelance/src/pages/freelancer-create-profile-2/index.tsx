import { useTranslation } from "react-i18next";
import {
	StyledPage,
	Form,
	InputContainer,
	InputsWrapper,
	TextAreaContainer,
	ButtonsContainer,
	InputHeader,
} from "./style";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FreelancerCreateProfile2Props {}

export function FreelancerCreateProfile2(props: FreelancerCreateProfile2Props) {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="freelancer">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Form>
						<InputsWrapper>
							<InputContainer>
								<InputHeader>
									<label>Education</label>
									<StyledButton type='button' buttonColor="redGradient" buttonSize="md">
										+
									</StyledButton>
								</InputHeader>
								<input
									id="institute"
									type="text"
									name="institute"
									placeholder="Institute"
									required
								/>
								<input
									id="occupation"
									type="text"
									name="occupation"
									placeholder="Occupation"
									required
								/>
								<input id="period" type="text" name="period" placeholder="Period" required />
								<hr />
								<input
									id="institute"
									type="text"
									name="institute"
									placeholder="Institute"
									required
								/>
								<input
									id="occupation"
									type="text"
									name="occupation"
									placeholder="Occupation"
									required
								/>
								<input id="period" type="text" name="period" placeholder="Period" required />
								<StyledButton type='button' buttonColor="redGradient" buttonSize="md">
									REMOVE
								</StyledButton>
							</InputContainer>
							<InputContainer>
								<InputHeader>
									<label>Work Experience</label>
									<StyledButton type='button' buttonColor="redGradient" buttonSize="md">
										+
									</StyledButton>
								</InputHeader>
								<input id="company" type="text" name="company" placeholder="Company" required />
								<input
									id="workPosition"
									type="text"
									name="workPosition"
									placeholder="Position"
									required
								/>
								<input id="period" type="text" name="period" placeholder="Period" required />
								<hr />
								<input id="company" type="text" name="company" placeholder="Company" required />
								<input
									id="workPosition"
									type="text"
									name="workPosition"
									placeholder="Position"
									required
								/>
								<input id="period" type="text" name="period" placeholder="Period" required />
							</InputContainer>
						</InputsWrapper>
						<TextAreaContainer>
							<label>Other experience</label>
							<textarea />
						</TextAreaContainer>
						<ButtonsContainer>
							<StyledButton type="button" buttonColor="redGradient" buttonSize="md">
								VIEW PROFILE
							</StyledButton>
							<StyledButton type="button" buttonColor="redGradient" buttonSize="md">
								BACK
							</StyledButton>
							<StyledButton type="button" buttonColor="redGradient" buttonSize="md">
								CREATE PROFILE
							</StyledButton>
						</ButtonsContainer>
					</Form>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default FreelancerCreateProfile2;
