import { useForm, Controller } from "react-hook-form";
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
import { useAppSelector } from "redux/hooks";
import { getStoredJobInfo } from "redux/newJobPosting";
import { useOptions } from "utils/select-options/options";
import { useJobPostingSecondFormHook } from "./job-posting-second-formHooks";

export function JobPostingSecondForm({ page }: IJobPostingFormProps) {
	const {
		countries: storedCountries,
		category,
		position,
		employmentType: storedEmploymentType,
		availableAmountOfHours,
		hourRate: storedHourRate,
		workExperience: storedWorkExperience,
	} = useAppSelector(getStoredJobInfo);
	const {
		countreisLabel,
		countriesPlaceholder,
		categoryLabel,
		categoryPlaceholder,
		positionLabel,
		postitonPlaceholder,
		employmentTypeLabel,
		employmentTypePlaceholder,
		hoursAmountLabel,
		hoursAmountPlaceholder,
		workExperienceLabel,
		workExperiencePlaceholder,
		hourRateLabel,
		hourRatePlaceholder,
		fieldRequired,
		onSubmit,
	} = useJobPostingSecondFormHook();
	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<IJobPostingSecondForm>();
	const { countries, categories, hoursAmount, hourRate, employmentType, workExperience } =
		useOptions();

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="center">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="full">
				<JobPostingLabel>{countreisLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="countries"
						defaultValue={selectDefaultArray(storedCountries, countries)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={countries}
								{...field}
								placeholder={countriesPlaceholder}
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
				<JobPostingLabel>{categoryLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="category"
						defaultValue={selectDefaultObject(category, categories)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={categories}
								{...field}
								placeholder={categoryPlaceholder}
								isSearchable
								isClearable
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
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{positionLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<JobPostingInput
						defaultValue={position}
						{...register("position", { required: fieldRequired })}
						type="text"
						placeholder={postitonPlaceholder}
					/>
					{errors?.position && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.position?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{employmentTypeLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="employmentType"
						defaultValue={selectDefaultObject(storedEmploymentType, employmentType)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={employmentType}
								{...field}
								placeholder={employmentTypePlaceholder}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.employmentType && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.employmentType?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{hoursAmountLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="availableAmountOfHours"
						defaultValue={selectDefaultObject(availableAmountOfHours, hoursAmount)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={hoursAmount}
								{...field}
								placeholder={hoursAmountPlaceholder}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.availableAmountOfHours && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.availableAmountOfHours?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{workExperienceLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="workExperience"
						defaultValue={selectDefaultObject(storedWorkExperience, workExperience)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={workExperience}
								{...field}
								placeholder={workExperiencePlaceholder}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.workExperience && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.workExperience?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{hourRateLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="hourRate"
						defaultValue={selectDefaultObject(storedHourRate, hourRate)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={hourRate}
								{...field}
								placeholder={hourRatePlaceholder}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.hourRate && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.hourRate?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
		</JobPostingGridForm>
	);
}

export default JobPostingSecondForm;
