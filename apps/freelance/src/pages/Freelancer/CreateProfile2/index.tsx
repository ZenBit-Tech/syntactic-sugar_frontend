import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	StyledPage,
	Form,
	InputContainer,
	Wrapper,
	TextAreaContainer,
	ButtonsContainer,
	InputHeader,
	InputWrapper,
} from "./style";
import { Dashboard, StyledTitle, StyledButton } from "@freelance/components";

interface educationProps {
	institute: string;
	occupation: string;
	period: string;
}

interface workExperienceProps {
	company: string;
	workPosition: string;
	period: string;
}

const education = {
	institute: "",
	occupation: "",
	period: "",
};

const workExperience = {
	company: "",
	workPosition: "",
	period: "",
};

export function CreateProfile2() {
	const { t } = useTranslation();
	const [educationList, setEducationList] = useState<educationProps[]>([]);
	const [workExperienceList, setWorkExperienceList] = useState<workExperienceProps[]>([]);

	useEffect(() => {
		setEducationList([education]);
		setWorkExperienceList([workExperience]);
	}, []);

	const handleAddEducation = () => {
		setEducationList(prev => [...prev, education]);
	};

	const handleRemoveEducation = (index: number) => {
		const list = [...educationList];
		list.splice(index, 1);
		setEducationList(list);
	};

	const handleAddWorkExperience = () => {
		setWorkExperienceList(prev => [...prev, workExperience]);
	};

	const handleRemoveWorkExperience = (index: number) => {
		const list = [...workExperienceList];
		list.splice(index, 1);
		setWorkExperienceList(list);
	};

	return (
		<StyledPage>
			<Dashboard userRole="freelancer">
				<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
					{t("dashboard.profilePage.title")}
				</StyledTitle>
				<Form>
					<Wrapper>
						<InputContainer>
							<InputHeader>
								<label>{t("freelancer.createProfile.educationLabel")}</label>
								<StyledButton
									type="button"
									buttonColor="redGradient"
									buttonSize="sm"
									fontSize="md"
									onClick={handleAddEducation}
								>
									<strong>{t("freelancer.createProfile.addBtn")}</strong>
								</StyledButton>
							</InputHeader>
							{educationList.map((item, index) => (
								<InputWrapper key={index}>
									<input
										id="institute"
										type="text"
										name="institute"
										placeholder={t("freelancer.createProfile.institutePlaceholder")}
										required
									/>
									<input
										id="occupation"
										type="text"
										name="occupation"
										placeholder={t("freelancer.createProfile.occupationPlaceholder")}
										required
									/>
									<input
										id="period"
										type="text"
										name="period"
										placeholder={t("freelancer.createProfile.periodPlaceholder")}
										required
									/>
									{educationList.length > 1 && (
										<>
											<StyledButton
												type="button"
												buttonColor="redGradient"
												buttonSize="sm"
												fontSize="md"
												onClick={() => handleRemoveEducation(index)}
											>
												<strong>{t("freelancer.createProfile.removeBtn")}</strong>
											</StyledButton>
											{educationList.length - 1 === index ? "" : <hr />}
										</>
									)}
								</InputWrapper>
							))}
						</InputContainer>
						<InputContainer>
							<InputHeader>
								<label>{t("freelancer.createProfile.workExperienceLabel")}</label>
								<StyledButton
									type="button"
									buttonColor="redGradient"
									buttonSize="sm"
									fontSize="md"
									onClick={handleAddWorkExperience}
								>
									{t("freelancer.createProfile.addBtn")}
								</StyledButton>
							</InputHeader>
							{workExperienceList.map((item, index) => (
								<InputWrapper key={index}>
									<input
										id="company"
										type="text"
										name="company"
										placeholder={t("freelancer.createProfile.companyPlaceholder")}
										required
									/>
									<input
										id="workPosition"
										type="text"
										name="workPosition"
										placeholder={t("freelancer.createProfile.positionPlaceholder")}
										required
									/>
									<input
										id="period"
										type="text"
										name="period"
										placeholder={t("freelancer.createProfile.periodPlaceholder")}
										required
									/>
									{workExperienceList.length > 1 && (
										<>
											<StyledButton
												type="button"
												buttonColor="redGradient"
												buttonSize="sm"
												fontSize="md"
												onClick={() => handleRemoveWorkExperience(index)}
											>
												<strong>{t("freelancer.createProfile.removeBtn")}</strong>
											</StyledButton>
											{workExperienceList.length - 1 === index ? "" : <hr />}
										</>
									)}
								</InputWrapper>
							))}
						</InputContainer>
					</Wrapper>
					<TextAreaContainer>
						<label>{t("freelancer.createProfile.otherExperienceLabel")}</label>
						<textarea />
					</TextAreaContainer>
					<ButtonsContainer>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("freelancer.createProfile.viewProfileBtn")}</strong>
						</StyledButton>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("freelancer.createProfile.backBtn")}</strong>
						</StyledButton>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("freelancer.createProfile.createProfileBtn")}</strong>
						</StyledButton>
					</ButtonsContainer>
				</Form>
			</Dashboard>
		</StyledPage>
	);
}

export default CreateProfile2;
