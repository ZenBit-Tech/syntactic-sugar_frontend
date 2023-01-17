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
	isLoading: boolean;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditEmployerForm({
	profile,
	isLoading,
	imageUrl,
	isImageChanged,
	isFormChange,
	setIsFormChange,
}: EditEmployerFormProps) {
	const { t } = useTranslation();
	const schema = useEditEmployerSchema();
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<IEditEmployerForm>({ resolver: yupResolver(schema) });
	const { onSubmit } = useEditEmployerForm({ imageUrl, reset, isFormChange, setIsFormChange });

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
						width={100}
					/>
					{errors?.linkedIn && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.linkedIn?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper positionRight={-21} width={18}>
					<EditProfileTextArea
						defaultValue={profile?.aboutUs}
						{...register("aboutUs")}
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
						disabled={!isImageChanged && !isDirty}
					>
						{t("editJob.saveChanges")}
					</StyledButton>
				</ButtonContainer>
			</GridContainer>
		</EditForm>
	);
}

export default EditEmployerForm;
