import React, { useEffect } from "react";
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
	StyledToastContainer,
} from "./style";
import { Dashboard, StyledTitle, StyledButton } from "@freelance/components";
import { useEducationHandler } from "./useEducationHandler";
import { useWorkExperienceHandler } from "./useWorkExperienceHandler";
import { it } from "node:test";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "redux/example-hooks";
import { createFreelancerP2 } from "redux/create-freelancer-page2/create-freelancer-p2.slice";
import { useAddPublishedMutation } from "redux/create-freelancer-page2/create-freelancer-p2.api";

enum listOption {
	EDUCATION = "EDUCATION",
	WORK_EXPERIENCE = "WORK_EXPERIENCE",
}

export function CreateProfile2() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [addPublished] = useAddPublishedMutation();
	const { handleAddEducation, handleRemoveEducation, educationList, setEducationList, education } =
		useEducationHandler();
	const {
		handleAddWorkExperience,
		handleRemoveWorkExperience,
		workExperienceList,
		setWorkExperienceList,
		workExperience,
	} = useWorkExperienceHandler();

	useEffect(() => {
		setEducationList([education]);
		setWorkExperienceList([workExperience]);
	}, []);

	const handleCreateProfileButton = () => {
		const payload = { education: educationList, workExperience: workExperienceList };
		toast(t("freelancer.createProfile.modal"), {
			position: toast.POSITION.BOTTOM_CENTER,
			toastId: "1",
		});
		console.log(payload);
		dispatch(createFreelancerP2(payload));
	};

	const handlePublishedButton = () => {
		addPublished({ isPublished: true });
	};

	const handleWithoutPublishButton = () => {};

	const ToastButtons = () => (
		<>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={handlePublishedButton}
			>
				<strong>{t("freelancer.createProfile.modalBtnNo")}</strong>
			</StyledButton>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={handlePublishedButton}
			>
				<strong>{t("freelancer.createProfile.modalBtnYes")}</strong>
			</StyledButton>
		</>
	);

	const handleChangeList = (
		index: number,
		event: React.FormEvent<HTMLInputElement>,
		option: listOption,
	): void => {
		const name = (event.target as HTMLInputElement).name;
		const value = (event.target as HTMLInputElement).value;
		if (option === listOption.EDUCATION) {
			const list = [...educationList];
			const newEducationList = list.map((it, pos) => {
				if (pos === index) {
					return { ...it, [name]: value };
				}
				return it;
			});
			setEducationList(newEducationList);
		} else {
			const list = [...workExperienceList];
			const newWorkExperienceList = list.map((it, position) => {
				if (position === index) {
					return { ...it, [name]: value };
				}
				return it;
			});
			setWorkExperienceList(newWorkExperienceList);
		}
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
										onChange={event => {
											handleChangeList(index, event, listOption.EDUCATION);
										}}
									/>
									<input
										id="occupation"
										type="text"
										name="occupation"
										placeholder={t("freelancer.createProfile.occupationPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.EDUCATION);
										}}
									/>
									<input
										id="period"
										type="text"
										name="period"
										placeholder={t("freelancer.createProfile.periodPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.EDUCATION);
										}}
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
										onChange={event => {
											handleChangeList(index, event, listOption.WORK_EXPERIENCE);
										}}
									/>
									<input
										id="workPosition"
										type="text"
										name="workPosition"
										placeholder={t("freelancer.createProfile.positionPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.WORK_EXPERIENCE);
										}}
									/>
									<input
										id="period"
										type="text"
										name="period"
										placeholder={t("freelancer.createProfile.periodPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.WORK_EXPERIENCE);
										}}
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
						<StyledButton
							type="button"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={handleCreateProfileButton}
						>
							<strong>{t("freelancer.createProfile.createProfileBtn")}</strong>
						</StyledButton>
						<StyledToastContainer closeButton={ToastButtons} autoClose={false} />
					</ButtonsContainer>
				</Form>
			</Dashboard>
		</StyledPage>
	);
}

export default CreateProfile2;
