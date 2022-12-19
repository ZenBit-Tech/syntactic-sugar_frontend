import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "redux/example-hooks";
import { addFreelancerInfo } from "redux/createFreelancer/freelancer-slice";
import { Dashboard, StyledTitle, StyledButton, ModalWindow } from "@freelance/components";
import { CREATE_PROFILE_1, VIEW_PROFILE } from "src/utils/constants/breakpoint";
import { useEducationHandler } from "./useEducationHandler";
import { useWorkHistoryHandler } from "./useWorkHistoryHandler";
import { useChangeListHandler, listOption } from "./useChangeListHandler";
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

export function CreateProfile2() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [otherExperience, setOtherExperience] = useState<string>("");
	const { handleAddEducation, handleRemoveEducation, educationList, setEducationList, education } =
		useEducationHandler();
	const {
		handleAddWorkHistory,
		handleRemoveWorkHistory,
		workHistoryList,
		setWorkHistoryList,
		workHistory,
	} = useWorkHistoryHandler();

	useEffect(() => {
		setEducationList([education]);
		setWorkHistoryList([workHistory]);
	}, []);

	const { handleChangeList } = useChangeListHandler(
		setEducationList,
		setWorkHistoryList,
		educationList,
		workHistoryList,
	);

	const handleotherExperienceChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
		setOtherExperience((event.target as HTMLTextAreaElement).value);
	};

	const handleCreateProfileButton = (type: string) => {
		const payload = {
			education: educationList,
			workHistory: workHistoryList,
			otherExperience: otherExperience,
		};
		if (type === "create") {
			toast(t("freelancer.createProfile.modal"), {
				position: toast.POSITION.BOTTOM_CENTER,
				toastId: "1",
			});
			dispatch(addFreelancerInfo(payload));
		}
		if (type === "view") {
			dispatch(addFreelancerInfo(payload));
			navigate(VIEW_PROFILE);
		}
		if (type === "back") {
			navigate(CREATE_PROFILE_1);
		}
	};

	return (
		<StyledPage>
			<Dashboard userRole="freelancer" typePage="createProfile">
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
								<label>{t("freelancer.createProfile.workHistoryLabel")}</label>
								<StyledButton
									type="button"
									buttonColor="redGradient"
									buttonSize="sm"
									fontSize="md"
									onClick={handleAddWorkHistory}
								>
									{t("freelancer.createProfile.addBtn")}
								</StyledButton>
							</InputHeader>
							{workHistoryList.map((item, index) => (
								<InputWrapper key={index}>
									<input
										id="company"
										type="text"
										name="company"
										placeholder={t("freelancer.createProfile.companyPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.WORK_HISTORY);
										}}
									/>
									<input
										id="workPosition"
										type="text"
										name="workPosition"
										placeholder={t("freelancer.createProfile.positionPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.WORK_HISTORY);
										}}
									/>
									<input
										id="period"
										type="text"
										name="period"
										placeholder={t("freelancer.createProfile.periodPlaceholder")}
										required
										onChange={event => {
											handleChangeList(index, event, listOption.WORK_HISTORY);
										}}
									/>
									{workHistoryList.length > 1 && (
										<>
											<StyledButton
												type="button"
												buttonColor="redGradient"
												buttonSize="sm"
												fontSize="md"
												onClick={() => handleRemoveWorkHistory(index)}
											>
												<strong>{t("freelancer.createProfile.removeBtn")}</strong>
											</StyledButton>
											{workHistoryList.length - 1 === index ? "" : <hr />}
										</>
									)}
								</InputWrapper>
							))}
						</InputContainer>
					</Wrapper>
					<TextAreaContainer>
						<label>{t("freelancer.createProfile.otherExperienceLabel")}</label>
						<textarea
							onChange={event => {
								handleotherExperienceChange(event);
							}}
						/>
					</TextAreaContainer>
					<ButtonsContainer>
						<StyledButton
							type="button"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={() => {
								handleCreateProfileButton("view");
							}}
						>
							<strong>{t("freelancer.createProfile.viewProfileBtn")}</strong>
						</StyledButton>
						<StyledButton
							type="button"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={() => {
								handleCreateProfileButton("back");
							}}
						>
							<strong>{t("freelancer.createProfile.backBtn")}</strong>
						</StyledButton>
						<StyledButton
							type="button"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={() => {
								handleCreateProfileButton("create");
							}}
						>
							<strong>{t("freelancer.createProfile.createProfileBtn")}</strong>
						</StyledButton>
						<StyledToastContainer closeButton={ModalWindow} autoClose={false} />
					</ButtonsContainer>
				</Form>
			</Dashboard>
		</StyledPage>
	);
}

export default CreateProfile2;
