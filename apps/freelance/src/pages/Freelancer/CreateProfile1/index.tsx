import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { addFreelancerInfo } from "redux/createFreelancer/freelancer-slice";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { useAppDispatch } from "redux/hooks";
import { SelectOptions, useOptions } from "utils/select-options/options";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
	ErrorsHandlerWrapper,
	Input,
	StyledSpan,
	SelectElement,
} from "@freelance/components";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { CREATE_PROFILE_2 } from "utils/constants/breakpoint";
import { Container, StyledFileField } from "@pages/Employer/CreateProfile/styles";
import { StyledPage, Form, GridBox, SelectMulti } from "./style";

interface IFormInput {
	fullName: string;
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	country: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHours: SelectOptions;
	workExperience: SelectOptions;
	englishLevel: SelectOptions;
	image: string;
}

export function CreateProfile1() {
	const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {
		FIELD_REQUIRED,
		INPUT_CHAR_NUMBER,
		MESSAGE_JOB_TITLE_MAX_CHAR,
		MAX_SKILLS_NUMBER,
		MAX_SKILLS,
	} = useJobsValidationErrorMessages();
	const [uploadImage, { data: imageData, isSuccess }] = useUploadImageMutation();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IFormInput>();
	const {
		countries,
		categories,
		skills,
		employmentType,
		hourRate,
		hoursAmount,
		workExperience,
		englishLevel,
	} = useOptions();

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + imageData?.file);
		}
	}, [imageData, isSuccess]);

	const onSubmitFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData();

			if (event.currentTarget.files) {
				formData.append("file", event.currentTarget.files[0]);
			}
			await uploadImage(formData);
		} catch (error) {
			alert(error);
		}
	};

	const onSubmit: SubmitHandler<IFormInput> = async values => {
		try {
			const freelancerInfo = {
				fullName: values.fullName,
				category: values.category.label,
				position: values.position,
				skills: values.skills.map(skill => skill.label),
				employmentType: values.employmentType.label,
				country: values.country.label,
				hourRate: values.hourRate.label,
				availableAmountOfHours: values.availableAmountOfHours.label,
				workExperience: values.workExperience.label,
				englishLevel: values.englishLevel.label,
				image: imageData && imageUrl !== DEFAULT_IMAGE ? imageData.file : null,
			};

			dispatch(addFreelancerInfo(freelancerInfo));
			navigate(CREATE_PROFILE_2);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="freelancer" typePage="createProfile">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Container alignItems="start">
						<StyledFileField>
							<img src={imageUrl} alt="User Avatar" />
							<div>
								<label>
									{t("image.chooseImage")}
									<input
										id="fileInput"
										type="file"
										accept=".png, .jpg, .jpeg"
										{...register("image")}
										onChange={onSubmitFile}
									/>
								</label>
								<label>
									{t("image.resetImage")}
									<input
										type="button"
										onClick={() => {
											setImageUrl(DEFAULT_IMAGE);
										}}
									/>
								</label>
							</div>
						</StyledFileField>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<GridBox>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										id="fullName"
										{...register("fullName", {
											required: FIELD_REQUIRED,
											maxLength: {
												value: INPUT_CHAR_NUMBER,
												message: MESSAGE_JOB_TITLE_MAX_CHAR,
											},
										})}
										type="text"
										placeholder={t("employer.create.fullNameLabel")}
										width={100}
									/>
									<ErrorMessage
										errors={errors}
										name="fullName"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="category"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={categories}
												{...field}
												id="category"
												isClearable
												placeholder={t("freelancer.createProfile.selectOption.category")}
												isSearchable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="category"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										id="position"
										{...register("position", {
											required: FIELD_REQUIRED,
											maxLength: {
												value: INPUT_CHAR_NUMBER,
												message: MESSAGE_JOB_TITLE_MAX_CHAR,
											},
										})}
										type="text"
										autoComplete="off"
										placeholder={t("freelancer.createProfile.positionPlaceholder")}
										width={100}
									/>
									<ErrorMessage
										errors={errors}
										name="position"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="skills"
										control={control}
										rules={{
											required: FIELD_REQUIRED,
											validate: v => {
												if (v.length > MAX_SKILLS_NUMBER) {
													return MAX_SKILLS;
												} else {
													return undefined;
												}
											},
										}}
										render={({ field }) => (
											<SelectMulti
												options={skills}
												{...field}
												id="skills"
												placeholder={t("freelancer.createProfile.selectOption.skills")}
												isSearchable
												isMulti
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="skills"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="employmentType"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={employmentType}
												{...field}
												id="employmentType"
												placeholder={t("freelancer.createProfile.selectOption.employmentType")}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="employmentType"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="country"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={countries}
												{...field}
												id="country"
												placeholder={t("freelancer.createProfile.selectOption.country")}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="country"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="hourRate"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={hourRate}
												{...field}
												id="hourRate"
												placeholder={t("freelancer.createProfile.selectOption.hourRate")}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="hourRate"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="availableAmountOfHours"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={hoursAmount}
												{...field}
												id="amountHours"
												placeholder={t(
													"freelancer.createProfile.selectOption.availableAmountOfHour",
												)}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="availableAmountOfHours"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="workExperience"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={workExperience}
												{...field}
												id="workExperience"
												placeholder={t("freelancer.createProfile.selectOption.workExperience")}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="workExperience"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
									<Controller
										name="englishLevel"
										control={control}
										rules={{ required: FIELD_REQUIRED }}
										render={({ field }) => (
											<SelectElement
												options={englishLevel}
												{...field}
												id="englishLevel"
												placeholder={t("freelancer.createProfile.selectOption.englishLevel")}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="englishLevel"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<StyledButton type="submit" buttonColor="redGradient" buttonSize="sm" fontSize="md">
									<strong>{t("recoverPassForm.buttonContinue")}</strong>
								</StyledButton>
							</GridBox>
						</Form>
					</Container>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default CreateProfile1;
