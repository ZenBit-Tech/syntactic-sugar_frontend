import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ErrorMessage } from "@hookform/error-message";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
	EditForm,
	FlexContainer,
	ErrorsHandlerWrapper,
	Input,
	GridContainer,
	StyledSpan,
	EditProfileTextArea,
	ButtonContainer,
} from "@freelance/components";
import { StyledPage } from "@pages/Freelancer/CreateProfile1/style";
import { DEFAULT_IMAGE, EMPLOYER_JOBS_PAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { setUserData } from "redux/userState/userSlice";
import { useCreateEmployerMutation } from "redux/createEmployer/employerApi";
import { FormBox, InputContainer, StyledFileField } from "./styles";

interface IFormInput {
	fullName: string;
	companyName: string;
	position: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
	image: string;
}

export function CreateEmployerProfile() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [
		createProfile,
		{ data: userData, isLoading: isLoadingData, isSuccess: isSuccessData, isError: isErrorData },
	] = useCreateEmployerMutation();
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<IFormInput>({ criteriaMode: "all" });
	const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);
	const [uploadImage, { data: imageData, isLoading, isError, isSuccess }] =
		useUploadImageMutation();

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

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + imageData?.file);
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError]);

	useEffect(() => {
		if (isSuccessData) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
		}
		if (isErrorData) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccessData, isErrorData]);

	const onSubmit = async (values: IFormInput) => {
		const employerInfo = {
			fullName: values.fullName,
			companyName: values.companyName,
			position: values.position,
			phone: values.phone,
			linkedIn: values.linkedIn,
			website: values.website,
			aboutUs: values.aboutUs,
			image: imageData && imageUrl !== DEFAULT_IMAGE ? imageData.file : "",
		};

		try {
			await createProfile(employerInfo);
			navigate(EMPLOYER_JOBS_PAGE);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="employer" typePage="createProfile">
					<StyledTitle tag="h2" fontSize="sm" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<StyledTitle tag="h2" fontSize="sm" fontWeight={500}>
						{t("employer.create.title")}
					</StyledTitle>
					<FlexContainer alignItems="start">
						<EditForm onSubmit={handleSubmit(onSubmit)}>
							<GridContainer gap={10}>
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
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="fullName"
										control={control}
										rules={{ required: "This field is required." }}
										render={({ field }) => (
											<Input
												id="fullName"
												type="text"
												{...field}
												placeholder={t("employer.create.fullNameLabel")}
												width={100}
											/>
										)}
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
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="position"
										control={control}
										rules={{ required: "This field is required." }}
										render={({ field }) => (
											<Input
												type="text"
												{...field}
												id="position"
												placeholder={t("employer.create.positionLabel")}
												width={100}
											/>
										)}
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
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="companyName"
										control={control}
										rules={{ required: "This field is required." }}
										render={({ field }) => (
											<Input
												type="text"
												id="companyName"
												{...field}
												placeholder={t("employer.create.companyNameLabel")}
												width={100}
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="companyName"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="phone"
										control={control}
										rules={{
											required: "This field is required.",
											pattern: {
												value: /^[\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
												message: "Add correct number, example: +919367788755",
											},
										}}
										render={({ field }) => (
											<Input
												type="tel"
												{...field}
												id="phone"
												placeholder={t("employer.create.phoneLabel")}
												width={100}
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="phone"
										render={({ messages }) =>
											messages &&
											Object.entries(messages).map(([type, message]) => (
												<StyledSpan fontSize="sm" type="validation">
													<strong>{message}</strong>
												</StyledSpan>
											))
										}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="linkedIn"
										control={control}
										rules={{ required: "This field is required." }}
										render={({ field }) => (
											<Input
												type="text"
												{...field}
												id="linkedIn"
												placeholder={t("employer.create.linkedinLabel")}
												width={100}
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="linkedIn"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="website"
										control={control}
										rules={{ required: "This field is required." }}
										render={({ field }) => (
											<Input
												type="text"
												{...field}
												id="website"
												placeholder={t("employer.create.websiteLabel")}
												width={100}
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="website"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Controller
										name="aboutUs"
										control={control}
										rules={{ required: "This field is required." }}
										render={({ field }) => (
											<EditProfileTextArea
												{...field}
												placeholder={t("employer.create.aboutusLabel")}
												rows={5}
												maxLength={600}
											/>
										)}
									/>
									<ErrorMessage
										errors={errors}
										name="aboutUs"
										render={({ message }) => (
											<StyledSpan fontSize="sm" type="validation">
												<strong>{message}</strong>
											</StyledSpan>
										)}
									/>
								</ErrorsHandlerWrapper>
								<ButtonContainer align="center">
									<StyledButton
										type="submit"
										buttonColor="redGradient"
										buttonSize="sm"
										fontSize="md"
									>
										<strong>{t("employer.create.btn1")}</strong>
									</StyledButton>
								</ButtonContainer>
							</GridContainer>
						</EditForm>
					</FlexContainer>
					<ToastContainer />
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}
