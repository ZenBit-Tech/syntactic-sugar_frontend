import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
	EditForm,
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
import { useEditEmployerSchema } from "utils/validations/editEmployerSchema";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { setProfile, setUserData } from "redux/userState/userSlice";
import { useCreateEmployerMutation } from "redux/createEmployer/employerApi";
import { StyledFileField, Container } from "./styles";

export interface IFormInput {
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
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);
	const schema = useEditEmployerSchema();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IFormInput>({ resolver: yupResolver(schema) });
	const [createProfile, { data: userData, isSuccess: isSuccessData, isError: isErrorData }] =
		useCreateEmployerMutation();
	const [uploadImage, { data: imageData, isError, isSuccess }] = useUploadImageMutation();

	useEffect(() => {
		if (isSuccessData) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
		}
		if (isErrorData) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccessData, isErrorData, dispatch, userData?.token, userData?.role, t]);

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + imageData?.file);
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError, imageData?.file, t]);

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
			dispatch(setProfile({ isProfile: true }));
			navigate(EMPLOYER_JOBS_PAGE);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="employer" typePage="createProfile">
					<StyledTitle tag="h1" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Container alignItems="start">
						<StyledFileField>
							<img src={imageUrl} alt="User Avatar" />
							<div>
								<label>
									<strong>{t("image.chooseImage")}</strong>
									<input
										id="fileInput"
										type="file"
										accept=".png, .jpg, .jpeg"
										{...register("image")}
										onChange={onSubmitFile}
									/>
								</label>
								<label>
									<strong>{t("image.resetImage")}</strong>
									<input
										type="button"
										onClick={() => {
											setImageUrl(DEFAULT_IMAGE);
										}}
									/>
								</label>
							</div>
						</StyledFileField>
						<EditForm onSubmit={handleSubmit(onSubmit)}>
							<GridContainer gap={8}>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										id="fullName"
										{...register("fullName")}
										type="text"
										placeholder={t("employer.create.fullNameLabel")}
										width={100}
									/>
									{errors?.fullName && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.fullName?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										type="text"
										{...register("position")}
										id="position"
										placeholder={t("employer.create.positionLabel")}
										width={100}
									/>
									{errors?.position && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.position?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										type="text"
										id="companyName"
										{...register("companyName")}
										placeholder={t("employer.create.companyNameLabel")}
										width={100}
									/>
									{errors?.companyName && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.companyName?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										type="tel"
										{...register("phone")}
										id="phone"
										placeholder={t("employer.create.phoneLabel")}
										width={100}
									/>
									{errors?.phone && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.phone?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										type="text"
										{...register("linkedIn")}
										id="linkedIn"
										placeholder={t("employer.create.linkedinLabel")}
										width={100}
									/>
									{errors?.linkedIn && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.linkedIn?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<Input
										type="text"
										{...register("website")}
										id="website"
										placeholder={t("employer.create.websiteLabel")}
										width={100}
									/>
									{errors?.website && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.website?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
								<ErrorsHandlerWrapper positionRight={-21} width={18}>
									<EditProfileTextArea
										{...register("aboutUs")}
										placeholder={t("employer.create.aboutusLabel")}
										rows={5}
										maxLength={600}
									/>
									{errors?.aboutUs && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.aboutUs?.message}</strong>
										</StyledSpan>
									)}
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
					</Container>
					<ToastContainer />
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}
