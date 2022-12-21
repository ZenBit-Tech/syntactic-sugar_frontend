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
} from "@freelance/components";
import { StyledPage } from "@pages/Freelancer/CreateProfile1/style";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { setUserData } from "redux/userState/userSlice";
import { useCreateEmployerMutation } from "redux/createEmployer/employerApi";
import { MY_JOBS } from "src/utils/constants/breakpoint";
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
			navigate(MY_JOBS);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="employer" typePage="createProfile">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<StyledTitle tag="h2" fontSize="md" fontWeight={500}>
						{t("employer.create.title")}
					</StyledTitle>
					<FormBox onSubmit={handleSubmit(onSubmit)}>
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
						<InputContainer>
							<Controller
								name="fullName"
								control={control}
								rules={{ required: "This field is required." }}
								render={({ field }) => (
									<input
										id="fullName"
										type="text"
										{...field}
										placeholder={t("employer.create.fullNameLabel")}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="fullName"
								render={({ message }) => <span>{message}</span>}
							/>
						</InputContainer>
						<InputContainer>
							<Controller
								name="position"
								control={control}
								rules={{ required: "This field is required." }}
								render={({ field }) => (
									<input
										type="text"
										{...field}
										id="position"
										placeholder={t("employer.create.positionLabel")}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="position"
								render={({ message }) => <span>{message}</span>}
							/>
						</InputContainer>
						<InputContainer>
							<Controller
								name="companyName"
								control={control}
								rules={{ required: "This field is required." }}
								render={({ field }) => (
									<input
										type="text"
										id="companyName"
										{...field}
										placeholder={t("employer.create.companyNameLabel")}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="companyName"
								render={({ message }) => <span>{message}</span>}
							/>
						</InputContainer>
						<InputContainer>
							<Controller
								name="phone"
								control={control}
								rules={{
									required: "This field is required.",
									pattern: {
										value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
										message: "Add correct number, example: +919367788755",
									},
								}}
								render={({ field }) => (
									<input
										type="tel"
										{...field}
										id="phone"
										placeholder={t("employer.create.phoneLabel")}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="phone"
								render={({ messages }) =>
									messages &&
									Object.entries(messages).map(([type, message]) => (
										<span key={type}>{message}</span>
									))
								}
							/>
						</InputContainer>
						<InputContainer>
							<Controller
								name="linkedIn"
								control={control}
								rules={{ required: "This field is required." }}
								render={({ field }) => (
									<input
										type="text"
										{...field}
										id="linkedIn"
										placeholder={t("employer.create.linkedinLabel")}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="linkedIn"
								render={({ message }) => <span>{message}</span>}
							/>
						</InputContainer>
						<InputContainer>
							<Controller
								name="website"
								control={control}
								rules={{ required: "This field is required." }}
								render={({ field }) => (
									<input
										type="text"
										{...field}
										id="website"
										placeholder={t("employer.create.websiteLabel")}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="website"
								render={({ message }) => <span>{message}</span>}
							/>
						</InputContainer>
						<Controller
							name="aboutUs"
							control={control}
							rules={{ required: "This field is required." }}
							render={({ field }) => (
								<textarea {...field} placeholder={t("employer.create.aboutusLabel")} />
							)}
						/>
						<ErrorMessage
							errors={errors}
							name="aboutUs"
							render={({ message }) => <span>{message}</span>}
						/>
						<StyledButton type="submit" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("employer.create.btn1")}</strong>
						</StyledButton>
					</FormBox>
					<ToastContainer />
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}
