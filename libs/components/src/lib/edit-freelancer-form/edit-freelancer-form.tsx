import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import {
	EditForm,
	ErrorsHandlerWrapper,
	EditProfileTextArea,
	Input,
	StyledSpan,
	SelectElement,
	ButtonContainer,
	StyledButton,
	GridContainer,
	setRemoteArray,
	selectDefaultObject,
	setRemoteObject,
	FreelancerEducationEditForm,
	FreelancerExperienceEditForm,
} from "@freelance/components";
import { SelectOptions, useOptions } from "utils/select-options/options";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { useEditFreelancerSchema } from "utils/validations/editFreelancerSchema";
import { educationProps, workHistoryProps } from "redux/createFreelancer/freelancer-slice";
import { useEditFreelancerForm } from "./edit-freelancer-formHook";

export interface IEditFreelancerForm {
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
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
}

export interface EditFreelancerFormProps {
	imageUrl: string;
	profile?: IResponse;
	isFetching: boolean;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditFreelancerForm({
	profile,
	imageUrl,
	isFetching,
	isImageChanged,
	isFormChange,
	setIsFormChange,
	setIsImageChanged,
}: EditFreelancerFormProps) {
	const { t } = useTranslation();
	const { FIELD_REQUIRED } = useJobsValidationErrorMessages();
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
	const schema = useEditFreelancerSchema();
	const {
		handleSubmit,
		control,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<IEditFreelancerForm>({
		defaultValues: {
			education: profile?.education || [{ institute: "", occupation: "", period: "" }],
			workHistory: profile?.workHistory || [{ company: "", workPosition: "", period: "" }],
		},
		resolver: yupResolver(schema),
	});
	const { onSubmit, isLoading } = useEditFreelancerForm({
		imageUrl,
		reset,
		isFetching,
		isFormChange,
		setIsFormChange,
		isDirty,
		setIsImageChanged,
		profile,
		education: profile?.education,
		workHistory: profile?.workHistory,
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
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="category"
						control={control}
						defaultValue={setRemoteObject(profile?.category, categories)}
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
					{errors?.category && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.category?.label ? errors?.category?.label.message : FIELD_REQUIRED}
							</strong>
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
						placeholder={t("freelancer.createProfile.positionPlaceholder")}
						width={100}
					/>
					{errors?.position && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.position?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="skills"
						defaultValue={setRemoteArray(profile?.skills, skills)}
						control={control}
						render={({ field }) => (
							<SelectElement
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
					{errors?.skills && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.skills?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="employmentType"
						defaultValue={selectDefaultObject(profile?.employmentType, employmentType)}
						control={control}
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
					{errors?.employmentType && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.employmentType?.label
									? errors?.employmentType?.label.message
									: FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="country"
						defaultValue={setRemoteObject(profile?.country, countries)}
						control={control}
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
					{errors?.country && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.country?.label ? errors?.country?.label.message : FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="hourRate"
						defaultValue={selectDefaultObject(profile?.hourRate, hourRate)}
						control={control}
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
					{errors?.hourRate && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.hourRate?.label ? errors?.hourRate?.label.message : FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="availableAmountOfHours"
						defaultValue={selectDefaultObject(profile?.availableAmountOfHours, hoursAmount)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={hoursAmount}
								{...field}
								id="amountHours"
								placeholder={t("freelancer.createProfile.selectOption.availableAmountOfHour")}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.availableAmountOfHours && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.availableAmountOfHours?.label
									? errors?.availableAmountOfHours?.label.message
									: FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="workExperience"
						defaultValue={selectDefaultObject(profile?.workExperience, workExperience)}
						control={control}
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
					{errors?.workExperience && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.workExperience?.label
									? errors?.workExperience?.label.message
									: FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<ErrorsHandlerWrapper selectIcons positionRight={-21} width={18}>
					<Controller
						name="englishLevel"
						defaultValue={selectDefaultObject(profile?.englishLevel, englishLevel)}
						control={control}
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
					{errors?.englishLevel && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.englishLevel?.label ? errors?.englishLevel?.label.message : FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
				<FreelancerEducationEditForm register={register} errors={errors} control={control} />
				<FreelancerExperienceEditForm register={register} errors={errors} control={control} />
				<ErrorsHandlerWrapper positionRight={-21} width={18}>
					<EditProfileTextArea
						defaultValue={profile?.otherExperience}
						{...register("otherExperience")}
						placeholder={t("freelancer.createProfile.otherExperienceLabel")}
						rows={5}
						maxLength={600}
					/>
					{errors?.otherExperience && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.otherExperience?.message}</strong>
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

export default EditFreelancerForm;
