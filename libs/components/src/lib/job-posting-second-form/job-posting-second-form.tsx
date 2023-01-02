import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	IJobPostingFormProps,
	IJobPostingSecondForm,
	ErrorsHandlerWrapper,
	IncreasedFieldWrapper,
	FieldWrapper,
	JobPostingGridForm,
	JobPostingLabel,
	SelectElement,
	JobPostingInput,
	StyledSpan,
	selectDefaultArray,
	selectDefaultObject,
} from "@freelance/components";
import { getStoredJobInfo } from "redux/jobs";
import { useAppSelector } from "redux/hooks";
import { useOptions } from "utils/select-options/options";
import { useSecondFormSchema } from "utils/validations/newJobPostingSchemas";
import { useJobLabelAndPlaceholder } from "utils/constants/jobs-labels-and-placeholders";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { useJobPostingSecondFormHook } from "./job-posting-second-formHooks";

export function JobPostingSecondForm({ page }: IJobPostingFormProps) {
	const schema = useSecondFormSchema();
	const {
		JOB_COUNTRIES_PLACEHOLDER,
		JOB_CATEGORY_PLACEHOLDER,
		JOB_POSITION_PLACEHOLDER,
		JOB_EMPLOYMENT_TYPE_PLACEHOLDER,
		JOB_AMOUNT_HOURS_PLACEHOLDER,
		JOB_WORK_EXPERIANCE_PLACEHOLDER,
		JOB_HOUR_RATE_PLACEHOLDER,
		JOB_COUNTRIES_LABEL,
		JOB_CATEGORY_LABEL,
		JOB_POSITION_LABEL,
		JOB_EMPLOYMENT_TYPE_LABEL,
		JOB_AMOUNT_HOURS_LABEL,
		JOB_WORK_EXPERIANCE_LABEL,
		JOB_HOUR_RATE_LABEL,
	} = useJobLabelAndPlaceholder();
	const { FIELD_REQUIRED } = useJobsValidationErrorMessages();
	const {
		countries: storedCountries,
		category,
		position,
		employmentType: storedEmploymentType,
		availableAmountOfHours,
		hourRate: storedHourRate,
		workExperience: storedWorkExperience,
	} = useAppSelector(getStoredJobInfo);
	const { onSubmit } = useJobPostingSecondFormHook();
	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<IJobPostingSecondForm>({ resolver: yupResolver(schema) });
	const { countries, categories, hoursAmount, hourRate, employmentType, workExperience } =
		useOptions();

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="center">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="full">
				<JobPostingLabel>{JOB_COUNTRIES_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="countries"
						defaultValue={selectDefaultArray(storedCountries, countries)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={countries}
								{...field}
								placeholder={JOB_COUNTRIES_PLACEHOLDER}
								isSearchable
								isMulti
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.countries && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.countries?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</IncreasedFieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{JOB_CATEGORY_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="category"
						defaultValue={selectDefaultObject(category, categories)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={categories}
								{...field}
								placeholder={JOB_CATEGORY_PLACEHOLDER}
								isSearchable
								isClearable
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
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{JOB_POSITION_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<JobPostingInput
						defaultValue={position}
						{...register("position")}
						type="text"
						placeholder={JOB_POSITION_PLACEHOLDER}
					/>
					{errors?.position && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.position?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{JOB_EMPLOYMENT_TYPE_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="employmentType"
						defaultValue={selectDefaultObject(storedEmploymentType, employmentType)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={employmentType}
								{...field}
								placeholder={JOB_EMPLOYMENT_TYPE_PLACEHOLDER}
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
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{JOB_AMOUNT_HOURS_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="availableAmountOfHours"
						defaultValue={selectDefaultObject(availableAmountOfHours, hoursAmount)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={hoursAmount}
								{...field}
								placeholder={JOB_AMOUNT_HOURS_PLACEHOLDER}
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
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{JOB_WORK_EXPERIANCE_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="workExperience"
						defaultValue={selectDefaultObject(storedWorkExperience, workExperience)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={workExperience}
								{...field}
								placeholder={JOB_WORK_EXPERIANCE_PLACEHOLDER}
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
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{JOB_HOUR_RATE_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="hourRate"
						defaultValue={selectDefaultObject(storedHourRate, hourRate)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={hourRate}
								{...field}
								placeholder={JOB_HOUR_RATE_PLACEHOLDER}
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
			</FieldWrapper>
		</JobPostingGridForm>
	);
}

export default JobPostingSecondForm;
