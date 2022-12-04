import { useForm, Controller } from "react-hook-form";
import {
	countries,
	categories,
	employmentType,
	hoursAmount,
	hourRate,
	workExperience,
} from "utils/select-options/options";
import {
	IJobPostingFormProps,
	InputWrapper,
	IncreasedFieldWrapper,
	FieldWrapper,
	JobPostingGridForm,
	JobPostingLabel,
	SelectElement,
	JobPostingInput,
} from "@freelance/components";
import { IJobPostingSecondForm } from "./interfaces";
import { useJobPostingSecondFormHook } from "./job-posting-second-formHooks";

export function JobPostingSecondForm({ page }: IJobPostingFormProps) {
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
		onSubmit,
	} = useJobPostingSecondFormHook();
	const { handleSubmit, control, register } = useForm<IJobPostingSecondForm>();

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="center">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="full">
				<JobPostingLabel>{countreisLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="countries"
						control={control}
						rules={{ required: true }}
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
				</InputWrapper>
			</IncreasedFieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{categoryLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="category"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<SelectElement
								options={categories}
								{...field}
								placeholder={categoryPlaceholder}
								classNamePrefix="react-select"
							/>
						)}
					/>
				</InputWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{positionLabel}</JobPostingLabel>
				<InputWrapper>
					<JobPostingInput
						{...register("position", { required: true })}
						type="text"
						placeholder={postitonPlaceholder}
					/>
				</InputWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{employmentTypeLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="employmentType"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<SelectElement
								options={employmentType}
								{...field}
								placeholder={employmentTypePlaceholder}
								classNamePrefix="react-select"
							/>
						)}
					/>
				</InputWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{hoursAmountLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="availableAmountOfHour"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<SelectElement
								options={hoursAmount}
								{...field}
								placeholder={hoursAmountPlaceholder}
								classNamePrefix="react-select"
							/>
						)}
					/>
				</InputWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{workExperienceLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="workExperience"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<SelectElement
								options={workExperience}
								{...field}
								placeholder={workExperiencePlaceholder}
								classNamePrefix="react-select"
							/>
						)}
					/>
				</InputWrapper>
			</FieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{hourRateLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="hourRate"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<SelectElement
								options={hourRate}
								{...field}
								placeholder={hourRatePlaceholder}
								classNamePrefix="react-select"
							/>
						)}
					/>
				</InputWrapper>
			</FieldWrapper>
		</JobPostingGridForm>
	);
}

export default JobPostingSecondForm;
