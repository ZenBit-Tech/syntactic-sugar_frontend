import { Form, ErrorsHandlerWrapper, Input, StyledSpan, TextArea } from "@freelance/components";
import { useForm } from "react-hook-form";
import { IEmployerResponse } from "redux/jobs";

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
	profile?: IEmployerResponse;
	isLoading: boolean;
}

export function EditEmployerForm({ profile, isLoading }: EditEmployerFormProps) {
	const {
		register,
		formState: { errors, isDirty },
	} = useForm<IEditEmployerForm>();

	return (
		<Form>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<Input
					id="fullName"
					defaultValue={profile?.fullName}
					{...register("fullName")}
					type="text"
					autoComplete="off"
				/>
				{errors?.fullName && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.fullName?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<Input
					id="position"
					defaultValue={profile?.position}
					{...register("position")}
					type="text"
					autoComplete="off"
				/>
				{errors?.position && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.position?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<Input
					id="companyName"
					defaultValue={profile?.companyName}
					{...register("companyName")}
					type="text"
					autoComplete="off"
				/>
				{errors?.companyName && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.companyName?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<Input
					id="phone"
					defaultValue={profile?.phone}
					{...register("phone")}
					type="text"
					autoComplete="off"
				/>
				{errors?.phone && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.phone?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<Input
					id="linkedIn"
					defaultValue={profile?.linkedIn}
					{...register("linkedIn")}
					type="text"
					autoComplete="off"
				/>
				{errors?.linkedIn && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.linkedIn?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<Input
					id="website"
					defaultValue={profile?.website}
					{...register("website")}
					type="text"
					autoComplete="off"
				/>
				{errors?.linkedIn && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.linkedIn?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={4} width={12}>
				<TextArea
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
		</Form>
	);
}

export default EditEmployerForm;
