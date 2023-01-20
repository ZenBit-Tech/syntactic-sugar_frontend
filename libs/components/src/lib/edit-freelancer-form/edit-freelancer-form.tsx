import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import {
	EditForm,
	ErrorsHandlerWrapper,
	Input,
	StyledSpan,
	SelectElement,
	GridContainer,
	setRemoteArray,
	selectDefaultObject,
	setRemoteObject,
	FreelancerEducationEditForm,
	FreelancerExperienceEditForm,
} from "@freelance/components";
import { SelectOptions, useOptions } from "utils/select-options/options";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { educationProps, workHistoryProps } from "redux/createFreelancer/freelancer-slice";

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
	image: string;
}

export interface EditFreelancerFormProps {
	imageUrl: string;
	profile?: IResponse;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditFreelancerForm({
	profile,
	imageUrl,
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
	});

	return (
		<EditForm>
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
						rules={{ required: true }}
						render={({ field }) => (
							<SelectElement
								options={categories}
								{...field}
								required
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
							<strong>{errors?.category?.message}</strong>
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
				<FreelancerEducationEditForm
					register={register}
					errors={errors}
					control={control}
					educationList={profile?.education}
				/>
				<FreelancerExperienceEditForm
					register={register}
					errors={errors}
					control={control}
					workHistoryList={profile?.workHistory}
				/>
			</GridContainer>
		</EditForm>
	);
}

export default EditFreelancerForm;
