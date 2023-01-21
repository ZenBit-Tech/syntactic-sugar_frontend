import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import {
	EditForm,
	ErrorsHandlerWrapper,
	Input,
	StyledSpan,
	EditProfileTextArea,
	GridContainer,
	ButtonContainer,
	StyledButton,
} from "@freelance/components";
import { IEmployerResponse } from "redux/jobs";
import { useEditEmployerSchema } from "utils/validations/editEmployerSchema";
import { useEditEmployerForm } from "./edit-employer-formHook";

export interface IEditEmployerForm {
	fullName: string;
	position: string;
	companyName: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
}

export interface EditEmployerFormProps {
	imageUrl: string;
	profile?: IEmployerResponse;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditEmployerForm({
	profile,
	imageUrl,
	isImageChanged,
	isFormChange,
	setIsFormChange,
	setIsImageChanged,
}: EditEmployerFormProps) {
	const { t } = useTranslation();
	const schema = useEditEmployerSchema();
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<IEditEmployerForm>({ resolver: yupResolver(schema) });
	const { onSubmit, isLoading } = useEditEmployerForm({
		imageUrl,
		reset,
		isFormChange,
		setIsFormChange,
		isDirty,
		setIsImageChanged,
	});

	return (
		<EditForm onSubmit={handleSubmit(onSubmit)}>
			<GridContainer gap={10}>
				<ErrorsHandlerWrapper positionRight={-21} width={18}>
					<Input
						id="fullName"
						defaultValue={profile?.fullName}
						{...register("fullName")}
						type="text"
						autoComplete="off"
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
						id="position"
						defaultValue={profile?.position}
						{...register("position")}
						type="text"
						autoComplete="off"
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
						id="companyName"
						defaultValue={profile?.companyName}
						{...register("companyName")}
						type="text"
						autoComplete="off"
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
						id="phone"
						defaultValue={profile?.phone}
						{...register("phone")}
						type="text"
						autoComplete="off"
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
						id="linkedIn"
						defaultValue={profile?.linkedIn}
						{...register("linkedIn")}
						type="text"
						autoComplete="off"
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
						id="website"
						defaultValue={profile?.website}
						{...register("website")}
						type="text"
						autoComplete="off"
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
						defaultValue={profile?.aboutUs}
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
						buttonSize="sm"
						fontSize="lg"
						buttonColor={"redGradient"}
						disabled={(!isImageChanged && !isDirty) || isLoading}
					>
						{isLoading ? t("loading") : t("editJob.saveChanges")}
					</StyledButton>
				</ButtonContainer>
			</GridContainer>
		</EditForm>
	);
}

export default EditEmployerForm;
